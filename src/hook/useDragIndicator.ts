import { useState } from "react";

interface useDragIndicatorHookProp {
  topValue: boolean;
  bottomValue: boolean;
}

export default function useDragIndicator({
  topValue,
  bottomValue,
}: useDragIndicatorHookProp) {
  const [isTop, setTop] = useState(topValue);
  const [isBottom, setBottom] = useState(bottomValue);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const dragOverItem = event.currentTarget;
    const dragOverItemRect = dragOverItem.getBoundingClientRect();

    if (event.clientY < dragOverItemRect.bottom - dragOverItemRect.height / 2) {
      setTop(true);
      setBottom(false);
    } else {
      setBottom(true);
      setTop(false);
    }
  }

  return [isTop, isBottom, handleDragOver] as const;
}
