// import React from "react";

export default function debounce<T extends (...args: T[]) => void>(
  callback: T,
  time: number
) {
  let timer: number;

  return function <U>(this: U, ...arg: Parameters<typeof callback>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, arg);
    }, time);
  };
}
