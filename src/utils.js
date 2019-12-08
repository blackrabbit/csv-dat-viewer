/**
 * Debounces function once per requestAnimationFrame.
 */
export function debounce(fn) {
  let timeout;

  return () => {
    var context = this;
    var args = arguments;

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      fn.apply(context, args);
    });
  };
}
