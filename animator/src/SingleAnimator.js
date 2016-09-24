import React, { Component} from 'react';
import { LayoutAnimation, AnimatedImplementation, TouchableHighlight,Animated, View,Easing,StyleSheet, Text,Alert} from 'react-native';

class SingleAnimator extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
    _onPress(){
    this.state.bounceValue.setValue(0.8);     // Start large
Animated.sequence([

    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.2,                         // Animate to smaller size
        tension: 1,                          // Bouncier spring
      }
    ),                               // Start the animation

    Animated.timing(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
       duration:2000
      }
    ),                               // Start the animation  

]).start(); 
}

  render() {
    
    return (
      <View style={{flex:1}}>
        <TouchableHighlight onPress={this._onPress}>
          <View>
           <Text>animation</Text>
          </View>
        </TouchableHighlight>

     <Animated.View 
     style={{
      width:this.state.bounceValue.interpolate({inputRange:[0,1.5],outputRange:[20,100]}),
      height:this.state.bounceValue.interpolate({inputRange:[0,1.5],outputRange:[20,50]}),
      backgroundColor:'blue',
      opacity:this.state.bounceValue
    }}> 
    <Text>animation</Text>
    </Animated.View>


        <Animated.Image                         // Base: Image, Text, View
          source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
          style={{
            flex: 1,
            transform: [                        // `transform` is an ordered array
              {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
            ]
          }}
        />
      </View>
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }
}



export default SingleAnimator