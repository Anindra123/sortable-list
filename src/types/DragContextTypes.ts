export interface DragContextType {
  dragOverItemIndex: number | undefined;
  dragItemIndex: number | undefined;
  handleDragStart: (
    id: number,
    event: React.DragEvent<HTMLDivElement>
  ) => void | (() => void);
  handleDrop: () => void;
  handleDragEnd: () => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (id: number) => void;
}
