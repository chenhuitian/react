import React from 'react';
import { LayoutAnimation,Animate,Text,TouchableOpacity,View, StyleSheet } from 'react-native';
var NativeModules = require('NativeModules');
var {
  UIManager,
} = NativeModules;

class LayoutAnimationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { w: 20, h: 20 };
    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    // Animate creation
     UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
    // LayoutAnimation.easeInEaseOut();
  }

 
  _onPress() {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    this.setState({w: this.state.w + 20, h: this.state.h + 20})
  }
 // <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
  render() {
    return (
      <View style={{flex:1,flexDirection: 'row', height: 100, padding: 20}}>
        
         <View style={{width: this.state.w, height: this.state.h,backgroundColor:'red'}} />
         
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>            
          </View>
          
        </TouchableOpacity>
        

       
        <Text>{this.state.h}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1
  },
  one:{
    backgroundColor:'darkkhaki'
  },
  box:{
    backgroundColor: 'blue',

  },
  button:{

  },
  buttonText:{

  }
});
export default LayoutAnimationView