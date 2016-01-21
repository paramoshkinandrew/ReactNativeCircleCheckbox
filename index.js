/*   
  ReactNativeCircleCheckbox 0.1.0
  https://github.com/ParamoshkinAndrew/ReactNativeCircleCheckbox
  (c) 2016 Andrew Paramoshkin <paramoshkin.andrew@gmail.com>
  ReactNativeCircleCheckbox may be freely distributed under the MIT license.
 */ 

'use strict'

var React = require('react-native');
var {
  StyleSheet,
  View,
  Component,
  TouchableHighlight
} = React;

class CircleCheckBox extends Component {

  constructor(props) {
    super(props);
    var outerSize = (props.outerSize) ? props.outerSize : 26;
    outerSize = (parseInt(outerSize) < 10 || isNaN(parseInt(outerSize))) ? 10 : parseInt(outerSize);
    var outerColor = (props.outerColor) ? props.outerColor : '#FC9527';
    var outerStyle = {
      width: outerSize,
      height: outerSize,
      borderRadius: outerSize/2,
      backgroundColor: outerColor
    };
    var filterSize = (parseInt(props.filterSize) > outerStyle.width + 3 || isNaN(parseInt(props.filterSize))) ? outerStyle.width - 3 : parseInt(props.filterSize);
    var filterColor = (props.filterColor) ? props.filterColor : '#FFF';
    var filterStyle = {
      width: filterSize,
      height: filterSize,
      borderRadius: filterSize/2,
      backgroundColor: filterColor
    };
    var innerSize = (parseInt(props.innerSize) > filterStyle.width + 5 || isNaN(parseInt(props.innerSize))) ? filterStyle.width - 5 : parseInt(props.innerSize);
    var innerColor = (props.innerColor) ? props.innerColor : '#FC9527';
    var innerStyle = {
      width: innerSize,
      height: innerSize,
      borderRadius: innerSize/2,
      backgroundColor: innerColor
    };

    this.state = {
      checked: props.checked ? props.checked : false,
      onPress: props.onPress,
      _circleOuterStyle: outerStyle,
      _circleFilterStyle: filterStyle,
      _circleInnerStyle: innerStyle
    }
  }

  render() {
    return (
      <TouchableHighlight style={[styles.alignStyle, this.state._circleOuterStyle]}
        onPress={ () =>
          (this.state.onPress) ?
          this.state.onPress(this.state.checked) :
          this._onPress(this.state.checked) }
      >
        <View style={[styles.alignStyle, this.state._circleFilterStyle]}>
          {this._renderInner()}
        </View>
      </TouchableHighlight>
    );
  }

  _onPress(checked) {
    this.setState({
      checked: !checked
    });
  }

  _renderInner() {
    return this.state.checked ? (<View style={this.state._circleInnerStyle} />) : (<View/>);
  }
}

var styles = StyleSheet.create({
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

module.exports = CircleCheckBox;
