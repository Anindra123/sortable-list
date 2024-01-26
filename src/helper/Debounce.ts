export default function debounce(callback: () => void, time: number) {
  let timer: number;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, time);
  };
}
