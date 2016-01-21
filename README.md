 ReactNativeCircleCheckbox
=========

Circle-style checkbox component for React Native.

## Installation
```
  npm install react-native-circle-checkbox --save
```
## Usage

```js
<CircleCheckBox
  checked={true}
  onPress={(checked) => console.log('My state is: ', checked)}
/>
```

## Preview

![alt tag](http://s28.postimg.org/55twmp73d/uncheck.png)
![alt tag](http://s22.postimg.org/q8398tg8t/check.png)

## Available properties:

- `checked` : initial state of checkbox. Default: `false`
- `onPress` : function that will be invoked by pressing to checkbox with checked property as argument.
- `outerSize` : Diameter of outer circle. Minimum: `10`, default: `26`
- `filterSize` : Diameter of underlayer circle. Minimum: `7`, default: `23`
- `innerSize` : Diameter of flag. Minimum: `2`, default: `18`
- `outerColor` : Color of outer circle. Default: `#FC9527`
- `filterColor` : Color of underlayer circle. Default: `#FFF`
- `innerColor` : Color of flag. Default: `#FC9527`
