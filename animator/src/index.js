import React, { Component} from 'react';
import { LayoutAnimation, TouchableHighlight,Animated, View, StyleSheet, Text,Alert} from 'react-native';

import DraggableView from './DraggableView';
import LayoutAnimationView from './LayoutAnimationView';
import SingleAnimator from './SingleAnimator';

class App extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>

        <SingleAnimator/>

        <LayoutAnimationView />  

        <DraggableView >
          <Text>drag</Text>
        </DraggableView>
           
      </View>
    );
  }
 
}


  // onPress(){
  //   this.state.bounceValue.setValue(1.5);     // Start large
  //   Animated.spring(                          // Base: spring, decay, timing
  //     this.state.bounceValue,                 // Animate `bounceValue`
  //     {
  //       toValue: 0.8,                         // Animate to smaller size
  //     }
  //   ).start();     
  // }



      // <TouchableHighlight onPress={this.onPress.bind(this)}>
      //   <Text>Run</Text>
      // </TouchableHighlight>
 

export default App
