export default function getLength(x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) {
    return 0;
  }
  return Math.sqrt( (Math.pow(x1 - x2, 2)) + Math.pow(y1 - y2, 2) );
}