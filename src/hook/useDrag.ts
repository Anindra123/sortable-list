import { useState } from "react";
import { DragHookPropType, DragHookReturnType } from "../types/DragHookTypes";

export default function useDrag<T>({
  childrenArray,
  elementArray,
  setChildrenArray,
}: DragHookPropType<T>): DragHookReturnType {
  // const [children, setChildren] = useState(childrenArray);
  const [elements, setElementArray] = useState(elementArray);

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

    const _childArray = [...childrenArray];
    const child = _childArray.splice(dragItemIndex!, 1)[0];
    _childArray.splice(dragOverItemIndex!, 0, child);
    const _elementArray = [...elements];
    const element = _elementArray.splice(dragItemIndex!, 1)[0];
    _elementArray.splice(dragOverItemIndex!, 0, element);

    setElementArray(_elementArray);
    setChildrenArray(_childArray);
  }

  function handleDragEnd() {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  function handleDragEnter(id: number) {
    setDragOverItemIndex(id);
  }

  return [
    elements,
    dragOverItemIndex,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    handleDragEnter,
  ];
}
