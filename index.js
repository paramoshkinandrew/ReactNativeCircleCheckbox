/*
  ReactNativeCircleCheckbox 0.1.2
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

  static propTypes = {
   checked: React.PropTypes.bool,
   outerSize: React.PropTypes.number,
   filterSize: React.PropTypes.number,
   innerSize: React.PropTypes.number,
   outerColor: React.PropTypes.string,
   filterColor: React.PropTypes.string,
   innerColor: React.PropTypes.string,
   onToggle: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    checked: false,
    outerSize: 26,
    filterSize: 23,
    innerSize: 18,
    outerColor: '#FC9527',
    filterColor: '#FFF',
    innerColor: '#FC9527'
  };

  constructor(props) {
    super(props);
    var outerSize = (parseInt(props.outerSize) < 10 || isNaN(parseInt(props.outerSize))) ? 10 : parseInt(props.outerSize);
    var filterSize = (parseInt(props.filterSize) > outerSize + 3 || isNaN(parseInt(props.filterSize))) ? outerSize - 3 : parseInt(props.filterSize);
    var innerSize = (parseInt(props.innerSize) > filterSize + 5 || isNaN(parseInt(props.innerSize))) ? filterSize - 5 : parseInt(props.innerSize);

    var customStyle = StyleSheet.create({
      _circleOuterStyle: {
        width: outerSize,
        height: outerSize,
        borderRadius: outerSize/2,
        backgroundColor: props.outerColor
      },
      _circleFilterStyle: {
        width: filterSize,
        height: filterSize,
        borderRadius: filterSize/2,
        backgroundColor: props.filterColor
      },
      _circleInnerStyle: {
        width: innerSize,
        height: innerSize,
        borderRadius: innerSize/2,
        backgroundColor: props.innerColor
      }
    });

    this.state = {
      customStyle: customStyle
    }
  }

  render() {
    return (
      <TouchableHighlight style={[styles.alignStyle, this.state.customStyle._circleOuterStyle]} onPress={this._onToggle.bind(this)}>
        <View style={[styles.alignStyle, this.state.customStyle._circleFilterStyle]}>
          {this._renderInner()}
        </View>
      </TouchableHighlight>
    );
  }

  _onToggle() {
    if(this.props.onToggle) {
      this.props.onToggle(!this.props.checked);
    }
  }

  _renderInner() {
    return this.props.checked ? (<View style={this.state.customStyle._circleInnerStyle} />) : (<View/>);
  }
}

var styles = StyleSheet.create({
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

module.exports = CircleCheckBox;
