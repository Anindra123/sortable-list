export interface DragHookPropType<T> {
  childrenArray: T[];
  elementArray: Array<React.JSX.Element>;
  setChildrenArray: React.Dispatch<React.SetStateAction<T[]>>;
}

export type DragHookReturnType = [
  Array<React.JSX.Element>,
  number | undefined,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void
];
