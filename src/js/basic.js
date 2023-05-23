// исправила из-за error
export default function sum(items) {
  return items.reduce((total, item) => total + item, 0);
}
