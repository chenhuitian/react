
import React, { Component } from 'react';
import { TextInput, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class Login extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
				userName:'',
				passWord:''
			};	
  	}

  	_onPressGo(){
  		if(this.state.userName === 'ch' && this.state.passWord === '1')
  		{
	  		this.props.onForword();
  		}
  		else{  			
  			this.setState({
				userName:'',
				passWord:''
			});
  		}
  	}

	render(){
		return(

			<View style= {style.main}>

				<View>
					<TextInput style= { style.txtInput } 
						placeholder='type your userName'
						onChangeText = { (text) => 
							this.setState(Object.assign({},this.state,{userName:text}))					
						}>
						{this.state.userName} 
					</TextInput>

					<TextInput style= { style.txtInput } 
						placeholder='type your passWord'
						onChangeText = { (text) => 
							this.setState(Object.assign({},this.state,{passWord:text})) 
						}>
						{this.state.passWord} 
					</TextInput>
				</View>

		 	   <TouchableHighlight onPress={this._onPressGo.bind(this)} >
		 	    <View style={ style.tabLogin } >
		        	<Text style={style.txtLogin} >Login</Text>
		        </View>
		       </TouchableHighlight>
				
			</View>
		)
	}
}

var style = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'column',
  		justifyContent: 'center',
    	alignItems: 'center',
		padding:10 
	},
	txtInput:{
		height: 40,
		width:200, 
		padding: 10
	},
	tabLogin:{
		height:40,
		width:150,
		backgroundColor: 'steelblue',
		flex: 1,
		flexDirection: 'column',
  		justifyContent: 'center',
    	alignItems: 'center',		
		margin: 20
	},

	txtLogin:{
		color:'ghostwhite',
		fontSize: 20,
    	fontWeight: 'bold',
	}
});

export default Login