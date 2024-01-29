export interface DragContextType {
  isTop: boolean;
  isBottom: boolean;
  dragOverItemIndex: number | undefined;
  dragItemIndex: number | undefined;
  handleDragStart: (
    id: number,
    event: React.DragEvent<HTMLDivElement>
  ) => void | (() => void);
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragEnter: (id: number, event: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
}
