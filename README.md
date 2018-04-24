 ReactNativeCircleCheckbox
=========

Circle-style checkbox component for React Native.

## Installation
```
  npm install react-native-circle-checkbox --save
```
## Usage

```js
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
   
<CircleCheckBox
  checked={true}
  onToggle={(checked) => console.log('My state is: ', checked)}
  labelPosition={LABEL_POSITION.RIGHT}
  label="Checkbox example"
/>
```

## Preview
    
![alt tag](https://i.imgur.com/eWLb0Cp.gif "Preview")

## Available properties:

- `checked` : initial state of checkbox. Default: `false`
- `onToggle` : function that will be invoked by pressing to checkbox with checked property as argument.
- `outerSize` : Diameter of outer circle. Minimum: `10`, default: `26`
- `filterSize` : Diameter of underlayer circle. Minimum: `7`, default: `23`
- `innerSize` : Diameter of flag. Minimum: `2`, default: `18`
- `outerColor` : Color of outer circle. Default: `#FC9527`
- `filterColor` : Color of underlayer circle. Default: `#FFF`
- `innerColor` : Color of flag. Default: `#FC9527`
- `label` : Checkbox label. Default: empty
- `labelPosition` : Label rendering position. Default: `right`, may be 'right' or 'left'. For your convenience this package exports `LABEL_POSITION` object with two keys - `RIGHT` and `LEFT`. You can use it for `labelPosition` definition.
- `styleCheckboxContainer`: Styles for checkbox container.
- `styleLabel`: Styles for label.
