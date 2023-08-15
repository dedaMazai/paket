declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json'
declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const __IS_DEV__: boolean;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type SomePropertyFrom<T> = {
  [K in keyof T]: Pick<Required<T>, K>
}[keyof T]

declare module 'HOST/BaseQuery' {
  const BaseQuery: React.ComponentType;

  export default BaseQuery;
}

declare module 'HOST/Translations' {
  const Translations: React.ComponentType;

  export default Translations;
}
