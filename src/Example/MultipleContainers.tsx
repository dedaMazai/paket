/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  ReactNode,
  useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import {
  DndContext,
  DragOverlay,
  DropAnimation,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensors,
  useSensor,
  MeasuringStrategy,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable';

import { Item, SortableItem } from './components';
import { DroppableContainer } from './components/Container';

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5'
      }
    }
  })
};

export interface ItemType {
  id: UniqueIdentifier,
  node: ReactNode,
}
type ItemsType = Record<UniqueIdentifier, ItemType[]>;

const ITEMS = [
  { id: '1', node: <div>Hello1</div> },
  { id: '2', node: <div>Hello2</div> },
  { id: '3', node: <div>Hello3</div> },
  { id: '4', node: <div>Hello4</div> },
  { id: '5', node: <div>Hello5</div> },
  { id: '6', node: <div>Hello6</div> },
];

const ITEMS2 = [
  { id: '13', node: <div>Hello1</div> },
  { id: '23', node: <div>Hello2</div> },
  { id: '33', node: <div>Hello3</div> },
];

export function MultipleContainers() {
  const [items, setItems] = useState<ItemsType>({
    A: ITEMS,
    B: ITEMS2,
  });
  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[]
  );

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const recentlyMovedToNewContainer = useRef(false);

  const [clonedItems, setClonedItems] = useState<ItemsType | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );
  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].findIndex((el) => el.id === id) >= 0);
  };

  const onDragCancel = () => {
    if (clonedItems) {
      setItems(clonedItems);
    }

    setActiveId(null);
    setClonedItems(null);
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);

  return (
    <DndContext
      sensors={sensors}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always
        }
      }}
      onDragStart={({ active }) => {
        setActiveId(active?.id);
        setClonedItems(items);
      }}
      onDragOver={({ active, over }) => {
        const overId = over?.id;

        if (overId == null || active.id in items) {
          return;
        }

        const overContainer = findContainer(overId);
        const activeContainer = findContainer(active?.id);

        if (!overContainer || !activeContainer) {
          return;
        }

        if (activeContainer !== overContainer) {
          setItems((items) => {
            const activeItems = items[activeContainer];
            const overItems = items[overContainer];
            const overIndex = overItems.findIndex(
              ({ id }) => id === overId
            );
            const activeIndex = activeItems.findIndex(
              ({ id }) => id === active?.id
            );
            let newIndex: number;

            if (overId in items) {
              newIndex = overItems.length + 1;
            } else {
              const isBelowOverItem = over
                && active.rect.current.translated
                && active.rect.current.translated.top > over.rect.top + over.rect.height;

              const modifier = isBelowOverItem ? 1 : 0;

              newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            recentlyMovedToNewContainer.current = true;

            return {
              ...items,
              [activeContainer]: items[activeContainer].filter(
                (item) => item.id !== active?.id
              ),
              [overContainer]: [
                ...items[overContainer].slice(0, newIndex),
                items[activeContainer][activeIndex],
                ...items[overContainer].slice(
                  newIndex,
                  items[overContainer].length
                )
              ]
            };
          });
        }
      }}
      onDragEnd={({ active, over }) => {
        if (active?.id in items && over?.id) {
          setContainers((containers) => {
            const activeIndex = containers.indexOf(active.id);
            const overIndex = containers.indexOf(over.id);

            return arrayMove(containers, activeIndex, overIndex);
          });
        }

        const activeContainer = findContainer(active?.id);

        if (!activeContainer) {
          setActiveId(null);
          return;
        }

        const overId = over?.id;

        if (overId == null) {
          setActiveId(null);
          return;
        }

        const overContainer = findContainer(overId);

        if (overContainer) {
          const activeIndex = items[activeContainer].findIndex(
            ({ id }) => id === active?.id
          );
          const overIndex = items[overContainer].findIndex(
            ({ id }) => id === overId
          );
          if (activeIndex !== overIndex && overContainer === activeContainer) {
            setItems((items) => ({
              ...items,
              [overContainer]: arrayMove(
                items[overContainer],
                activeIndex,
                overIndex
              )
            }));
          } else {
            setItems((prevState) => {
              prevState[overContainer].splice(
                overIndex + 1 || prevState[overContainer].length,
                0,
                prevState[activeContainer][activeIndex]
              );
              prevState[activeContainer].splice(activeIndex, 1);
              return prevState;
            });
          }
        }

        setActiveId(null);
      }}
      onDragCancel={onDragCancel}
    >
      <div
        style={{
          display: 'inline-grid',
          boxSizing: 'border-box',
          padding: 20,
          gridAutoFlow: 'column'
        }}
      >
        <SortableContext
          items={[...containers]}
          strategy={horizontalListSortingStrategy}
        >
          {containers.map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              items={items[containerId]}
            >
              <SortableContext items={items[containerId]}>
                {items[containerId].map((value, index) => {
                  return <SortableItem id={value?.id} value={value?.node} index={index} key={value?.id} />;
                })}
              </SortableContext>
            </DroppableContainer>
          ))}
        </SortableContext>
      </div>
      {createPortal(
        <DragOverlay dropAnimation={dropAnimation}>
          {activeId && (
            <Item
              value={items[findContainer(activeId)!].find((el) => el.id === activeId)?.node}
              dragOverlay
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}
