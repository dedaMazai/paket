import React from 'react';
import classNames from 'classnames';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { ItemType } from '../../MultipleContainers';

import cls from './Container.module.scss';

export interface ContainerProps {
  children: React.ReactNode;
}

export function DroppableContainer({
  children,
  id,
  items
}: ContainerProps & {
  id: UniqueIdentifier;
  items: ItemType[];
  style?: React.CSSProperties;
}) {
  const { setNodeRef } = useSortable({
    id,
    data: {
      type: 'container',
      children: items
    }
  });

  return (
    <div ref={setNodeRef} className={classNames(cls.Container)}>
      {children}
    </div>
  );
}
