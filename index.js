/*
  ReactNativeCircleCheckbox 0.1.3
  https://github.com/ParamoshkinAndrew/ReactNativeCircleCheckbox
  (c) 2016 Andrew Paramoshkin <paramoshkin.andrew@gmail.com>
  ReactNativeCircleCheckbox may be freely distributed under the MIT license.
 */

'use strict'

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
} = React;

class CircleCheckBox extends Component {

  static propTypes = {
   checked: React.PropTypes.bool,
   label: React.PropTypes.string,
   outerSize: React.PropTypes.number,
   filterSize: React.PropTypes.number,
   innerSize: React.PropTypes.number,
   outerColor: React.PropTypes.string,
   filterColor: React.PropTypes.string,
   innerColor: React.PropTypes.string,
   onToggle: React.PropTypes.func.isRequired,
   labelPosition: React.PropTypes.oneOf(['right', 'left'])
  };

  static defaultProps = {
    checked: false,
    outerSize: 26,
    filterSize: 23,
    innerSize: 18,
    outerColor: '#FC9527',
    filterColor: '#FFF',
    innerColor: '#FC9527',
    label: '',
    labelPosition: 'right'
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
      <View style={styles.checkBoxContainer}>
        {this._renderLabel('left')}
        <TouchableHighlight style={[styles.alignStyle, this.state.customStyle._circleOuterStyle]} onPress={this._onToggle.bind(this)}>
          <View style={[styles.alignStyle, this.state.customStyle._circleFilterStyle]}>
            {this._renderInner()}
          </View>
        </TouchableHighlight>
        {this._renderLabel('right')}
      </View>
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

  _renderLabel(position) {
    var templ = (<View></View>);
    if ((this.props.label.length > 0) && (position === this.props.labelPosition)) {
      templ = (<Text style={styles.checkBoxLabel}>{this.props.label}</Text>);
    }
    return templ;

  }
}

var styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  alignStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxLabel: {
    marginLeft: 5,
    marginRight: 5
  }
});

module.exports = CircleCheckBox;
