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
  onToggle={(checked) => console.log('My state is: ', checked)}
/>
```

## Preview

![alt tag](http://s28.postimg.org/55twmp73d/uncheck.png)
![alt tag](http://s22.postimg.org/q8398tg8t/check.png)

## Available properties:

Name | Default | Type | Required | Description
:--- | :----- | :- | :-- | :--------------
checked | false | boolean | - | Initial state of checkbox
onPress | null | Func | * | Function that will be invoked by pressing to checkbox with checked property as argument
outerSize | 26 | number | - | Outer circle diameter. Min: 10
filterSize | 23 | number | - | Underlayer circle diameter. Min: 7
innerSize | 18 | number | - | Flag circle diameter. Min: 2
outerColor | #FC9527 | string | - | Outer circle color
filterColor | #FFF | string | - | Underlayer circle color
innerColor | #FC9527 | string | - | Flag circle color
