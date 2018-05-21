# vue-number-transition-directive
Zero dependency, simple animated-like number iteration directive for vue components

![](https://github.com/tugayilik/vue-number-transition-directive/blob/master/static/logo.gif)

# Install
via npm

```bash
npm install vue-number-transition
```

via unpkg

```bash
https://unpkg.com/vue-number-transition@1.0.0/src/index.js
```

# Usage

First import the directive and bind it to component's directives.

```js
import NumberTransition from 'vue-number-transition';

export default {
    directives: {
        // ..
        NumberTransition
        // ..
    }
}
```

Then bind the directive on your target element;

```html
<div id="count" v-number-transition="{ target: 500, iteration: 10, speed: 1000 }">
```

# Parameters

`target`: The number that directive will count to. Can be computed property too.

`iteration`: The number of iterations until counter reaches to target number. 

**Example**
If you want to reach from `0 to 500` and iteration is `10`, it will be increasing 50 by 50 **(target/iteration)** until 500.

`speed`: speed and iteration works together. The result of `speed / iteration` defines the interval speed between changes.