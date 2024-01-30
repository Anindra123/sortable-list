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

  function handleDragStart(id: number) {
    setDragItemIndex(id);
  }

  function handleDrop() {
    const top_bar = document.getElementById("top" + dragOverItemIndex);
    const bottom_bar = document.getElementById("bottom" + dragOverItemIndex);
    if (top_bar?.classList.contains("visible")) {
      top_bar.classList.remove("visible");
    }

    if (bottom_bar?.classList.contains("visible")) {
      bottom_bar.classList.remove("visible");
    }

    const _elementArray = [...children];
    const element = _elementArray.splice(dragItemIndex!, 1)[0];
    _elementArray.splice(dragOverItemIndex!, 0, element);
    setChildren(_elementArray);
  }

  function handleDragEnd() {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  function handleDragEnter(id: number, event: React.DragEvent<HTMLDivElement>) {
    console.log(event.currentTarget);
    setDragOverItemIndex(id);
  }

  return [
    children,
    dragOverItemIndex,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    handleDragEnter,
  ];
}
