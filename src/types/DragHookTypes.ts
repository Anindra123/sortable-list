export interface DragHookPropType {
  elementArray: string[];
}

export type DragHookReturnType = [
  boolean,
  boolean,
  string[],
  number | undefined,
  number | undefined,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void,
  (id: number, event: React.DragEvent<HTMLDivElement>) => void,
  (event: React.DragEvent<HTMLDivElement>) => void
];
