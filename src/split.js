export default (list, test) => list.reduce(([a, b], listItem) => {
  if (test(listItem)) {
    a.push(listItem);
  } else {
    b.push(listItem);
  }
  return [a, b];
}, [[], []]);
