'use strict';

import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import Result from './components/Result/index';

const main = Result;

run(main, {
  DOM: makeDOMDriver('.root', {transposition: true}),
});
