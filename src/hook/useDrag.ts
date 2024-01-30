import { useState } from "react";
import { DragHookPropType } from "../types/DragHookTypes";

export default function useDrag<T>({
  childrenArray,
  elementArray,
  setChildrenArray,
}: DragHookPropType<T>) {
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

  function handleDrop(isTop: boolean, isBottom: boolean) {
    const _childArray = [...childrenArray];
    let spliceIndex = dragOverItemIndex!;
    if (dragItemIndex! < dragOverItemIndex! && isTop)
      spliceIndex = spliceIndex - 1;
    if (dragItemIndex! > dragOverItemIndex! && isBottom)
      spliceIndex = spliceIndex + 1;
    const child = _childArray.splice(dragItemIndex!, 1)[0];
    _childArray.splice(spliceIndex, 0, child);
    const _elementArray = [...elements];
    const element = _elementArray.splice(dragItemIndex!, 1)[0];
    _elementArray.splice(spliceIndex, 0, element);

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
    dragItemIndex,
    dragOverItemIndex,
    handleDragStart,
    handleDrop,
    handleDragEnd,
    handleDragEnter,
  ] as const;
}
