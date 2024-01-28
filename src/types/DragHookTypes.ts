export interface DragHookPropType {
  elementArray: string[];
}

export type DragHookReturnType = [
  string[],
  number | undefined,
  number | undefined,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void,
  () => void,
  () => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (id: number) => void
];
