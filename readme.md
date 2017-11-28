# Overview

This is a very simplistic app intended as an exercise in using streams in UI code and applying the dialog pattern described [here](https://staltz.com/unidirectional-user-interface-architectures.html).

In Staltz's example app he has opted for a Todo list which was used to inform the design decisions made for my little accumulator. An aside: I have not added enough layers to really expose the _fractal_ and _recursive_ aspect of this design in this exercise.

## Why an accumulator?

The thinking behind building something which 'simply' accumulates values over time sounds very simple but because it involves subtleties in state management one can go about this in either a _mutable_ or _immutable_ fashion - so the challenge was making disciplined decisions in how the value _changes_ at different points in time.

Streams expose the _immutable_ facts about change (it is always true that `0` was incremented to `1`) which make them a powerful abstraction for pushing state change to the fringes of your application.

TODO: Expose the cool state management by recording and replaying given user input over time.

I also wanted to apply what I had read about streams outside the context of a Todo list app so that I could wrestle with `Cycle.js` and `xstream`.

## How to run?

1. Clone the repo
2. Install the deps (`npm i` or `yarn`)
3. (Optional) Run `(yarn)|(npm run) build`
4. Run `(yarn)|(npm run) serve` and point your browser to the outputted localhost.
5. Click away!