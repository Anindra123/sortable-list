export interface DragHookPropType {
  elementArray: Array<React.JSX.Element>;
}

export type DragHookReturnType = [
  Array<React.JSX.Element>,
  number | undefined,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void
];
