import React from "react";

export default function debounce(
  callback: () => void | ((event: React.DragEvent<HTMLDivElement>) => void),
  time: number
) {
  let timer: number;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, time);
  };
}
