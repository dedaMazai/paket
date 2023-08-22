import React, { useEffect } from 'react';
import classNames from 'classnames';
import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import type { Transform } from '@dnd-kit/utilities';

import { useSortable } from '@dnd-kit/sortable';
import cls from './Item.module.scss';

export interface Props {
  dragOverlay?: boolean;
  dragging?: boolean;
  index?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  style?: React.CSSProperties;
  transition?: string | null;
  wrapperStyle?: React.CSSProperties;
  value: React.ReactNode;
}

export const Item = React.memo(
  React.forwardRef<HTMLLIElement, Props>(
    (
      {
        dragOverlay,
        dragging,
        fadeIn,
        index,
        listeners,
        sorting,
        style,
        transition,
        transform,
        value,
        wrapperStyle,
      },
      ref,
    ) => {
      useEffect(() => {
        if (!dragOverlay) {
          return;
        }

        document.body.style.cursor = 'grabbing';

        return () => {
          document.body.style.cursor = '';
        };
      }, [dragOverlay]);

      return (
        <li
          className={classNames(
            cls.Wrapper,
            fadeIn && cls.fadeIn,
            sorting && cls.sorting,
            dragOverlay && cls.dragOverlay,
          )}
          style={
            {
              ...wrapperStyle,
              transition: [transition, wrapperStyle?.transition]
                .filter(Boolean)
                .join(', '),
              '--translate-x': transform
                ? `${Math.round(transform.x)}px`
                : undefined,
              '--translate-y': transform
                ? `${Math.round(transform.y)}px`
                : undefined,
              '--scale-x': transform?.scaleX
                ? `${transform.scaleX}`
                : undefined,
              '--scale-y': transform?.scaleY
                ? `${transform.scaleY}`
                : undefined,
              '--index': index,
            } as React.CSSProperties
          }
          ref={ref}
        >
          <div
            className={classNames(
              cls.Item,
              dragging && cls.dragging,
            )}
            style={style}
            {...listeners}
          >
            {value}
          </div>
        </li>
      );
    },
  ),
);

interface SortableItemProps {
  id: UniqueIdentifier;
  index: number;
  value: React.ReactNode;
}

export function SortableItem({
  id,
  value,
  index,
}: SortableItemProps) {
  const {
    setNodeRef,
    listeners,
    isDragging,
    isSorting,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mountedWhileDragging = isDragging;

  return (
    <Item
      ref={setNodeRef}
      value={value}
      dragging={isDragging}
      sorting={isSorting}
      index={index}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
    />
  );
}
