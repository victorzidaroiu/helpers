export function combine(list) {
  const functions = [];

  const addFunction = (type, func) => {
    functions.push({ type, func });
  };

  const combineInterface = {
    filter(func) {
      addFunction('filter', func);

      return combineInterface;
    },

    map(func) {
      addFunction('map', func);

      return combineInterface;
    },

    done() {
      return list.reduce((acc, item) => {
        let itemToReturn = item;

        functions.forEach(({ type, func }) => {
          if (itemToReturn) {
            switch (type) {
              case 'filter':
                if (!func(item)) {
                  itemToReturn = null;
                  break;
                }

                break;

              case 'map':
                itemToReturn = func(item);

                break;
              default:
            }
          }
        });

        return itemToReturn ? acc.concat(itemToReturn) : acc;
      }, []);
    },
  };

  return combineInterface;
}
