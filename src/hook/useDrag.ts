import { useState } from "react";
import { DragHookPropType, DragHookReturnType } from "../types/DragHookTypes";

export default function useDrag({
  elementArray,
}: DragHookPropType): DragHookReturnType {
  const [children, setChildren] = useState(elementArray);

  const [dragItemIndex, setDragItemIndex] = useState<number | undefined>(
    undefined
  );
  const [dragOverItemIndex, setDragOverItemIndex] = useState<
    number | undefined
  >(undefined);

  function handleDragStart(id: number, event: React.DragEvent<HTMLDivElement>) {
    // const img = new Image();
    // img.src =
    //   "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    // event.dataTransfer.setDragImage(img, 0, 0);
    event.dataTransfer.effectAllowed = "move";
    setDragItemIndex(id);
  }

  function handleDrop() {
    const _elementArray = [...children];
    const element = _elementArray.splice(dragItemIndex!, 1)[0];
    _elementArray.splice(dragOverItemIndex!, 0, element);
    setChildren(_elementArray);
  }

  function handleDragEnd() {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDragEnter(id: number) {
    setDragOverItemIndex(id);
  }
  return [
    children,
    dragItemIndex,
    dragOverItemIndex,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    handleDragOver,
    handleDragEnter,
  ];
}
