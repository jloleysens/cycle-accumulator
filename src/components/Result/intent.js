'use strict';

import xs from 'xstream';

function intent(sources) {
  return xs.merge(
    sources.DOM.select('.increment').events('click').mapTo({type: 'increment'}),
    sources.DOM.select('.decrement').events('click').mapTo({type: 'decrement'})
  );
}

export default intent;
