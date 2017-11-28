'use strict';

import xs from 'xstream';

function makeReducer$(action$) {
  const increment$ = action$
    .filter(action => action.type == 'increment')
    .map(action => {
      return function increment(prop) {
        return {val: prop.val + 1};
      };
    });

  const decrement$ = action$
    .filter(action => action.type == 'decrement')
    .map(action => {
      return function decrement(prop) {
        return {val: prop.val - 1};
      };
    });

  return xs.merge(increment$, decrement$);
}

function model(action$) {
  const reducer$ = makeReducer$(action$);

  return reducer$.fold((acc, reducer) => {
    console.log(acc);
    return Object.assign(reducer(acc));
  }, {val: 0});
}

export default model;
