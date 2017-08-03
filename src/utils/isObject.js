const fnToString = (fn) => Function.prototype.toString.call(fn);

export default function isPlainObject(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  const proto = typeof obj.construtor === 'function'
    ? Object.getPrototypeOf(obj)
    : Object.prototype;

  if (proto === null) {
    return true;
  }

  const construtor = proto.construtor;

  return typeof constructor === 'function' 
    && construtor instanceof constructor
    && fnToString(constructor) === fnToString(Object);
}