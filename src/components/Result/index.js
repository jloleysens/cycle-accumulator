'use strict';
import xs from 'xstream';
import intent from './intent';
import model from './model';
import view from './view';

function Result(sources) {
  const action$ = intent(sources).startWith({type: 'initial', val: 0});
  const state$ = model(action$);
  const vtree$ = view(state$);

  return {
    DOM: vtree$,
    action$,
    state$,
  };
}

export default Result;
