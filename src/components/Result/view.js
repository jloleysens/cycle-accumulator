'use strict';

import {div, span, button, br} from '@cycle/dom';

function view(state$) {
  return state$.map(({val}) => {
    return div('.root', {class: 'blah'}, [
      button('.increment', 'Increment'),
      button('.decrement', 'Decrement'),
      br(),
      br(),
      span('.result', val),
    ]);
  });
}

export default view;
