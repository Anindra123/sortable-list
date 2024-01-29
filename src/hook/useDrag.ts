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

  const [isTop, setTop] = useState(false);
  const [isBottom, setBottom] = useState(false);

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

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const dragOverItem = event.currentTarget;
    const dragOverItemRect = dragOverItem.getBoundingClientRect();
    // const top_bar = document.getElementById("top" + dragOverItem.id);
    // const bottom_bar = document.getElementById("bottom" + dragOverItem.id);

    if (event.clientY < dragOverItemRect.bottom - dragOverItemRect.height / 2) {
      setTop(true);
      setBottom(false);
    } else {
      setBottom(true);
      setTop(false);
    }
  }

  function handleDragEnter(id: number, event: React.DragEvent<HTMLDivElement>) {
    console.log(event.currentTarget);
    setDragOverItemIndex(id);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    console.log(event.currentTarget.id, dragOverItemIndex);
  }

  return [
    isTop,
    isBottom,
    children,
    dragItemIndex,
    dragOverItemIndex,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
  ];
}
