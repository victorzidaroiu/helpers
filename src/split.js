export function split(list, test) {
  return list.reduce(([a, b], listItem) => {
    if (test(listItem)) {
      a.push(listItem);
    } else {
      b.push(listItem);
    }
    return [a, b];
  }, [[], []]);
}
