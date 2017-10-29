'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combine = combine;
function combine(list) {
  var functions = [];

  var addFunction = function addFunction(type, func) {
    functions.push({ type: type, func: func });
  };

  var combineInterface = {
    filter: function filter(func) {
      addFunction('filter', func);

      return combineInterface;
    },
    map: function map(func) {
      addFunction('map', func);

      return combineInterface;
    },
    done: function done() {
      return list.reduce(function (acc, item) {
        var itemToReturn = item;

        functions.forEach(function (_ref) {
          var type = _ref.type,
              func = _ref.func;

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
    }
  };

  return combineInterface;
}