import React, { Component } from 'react';
import { TextInput, Text, View, Image,TouchableHighligh,StyleSheet,TouchableHighlight} from 'react-native';
import PersonList  from '../store/PersonStore';

class AddPerson extends Component{	
	
	constructor(props){
		super(props);	
		let length = PersonList.length;

		this.state = {
			userName:'',
			keyNo: length+1		
		};
	}

	onAddPerson(){

		PersonList.push({
			name: this.state.userName,
			sex: 'F',
			keyNo: this.state.keyNo
		});
		
		this.setState({
			userName:this.state.userName,
			keyNo: this.state.keyNo+1		
		});
	}

	render(){
		return <View style={style.addContainer}>
					<View style={style.back}>
						<TouchableHighlight onPress={this.props.onBack}>
							<View style={ style.tabButton } >
				        		<Text style={style.txtButton}>Back</Text>
				        	</View>
			       		</TouchableHighlight>
						
		       		</View>

		       		<View  style={style.add}>

						<TextInput style= { style.txt } 
							placeholder='add userName'
							onChangeText = { (text) => 
								this.setState(Object.assign({},this.state,{userName:text}))					
							}>
							{this.state.userName} 
						</TextInput>

						<TouchableHighlight onPress={this.onAddPerson.bind(this)}>
								<View style={style.tabButton}>
									<Image source={require('../images/addPerson.png')} style={{width: 40, height: 40}}/>
					        		<Text style={style.txtButton}>AddPerson</Text>
				        		</View>
				       	</TouchableHighlight>
					</View>

					
		</View>
	}
}
var style = StyleSheet.create({
	addContainer:{
 		flex: 1,
		flexDirection: 'column',
  		justifyContent: 'center',
    	alignItems: 'center',
		padding:10 
	},	

	back:{
 		flex: 1,
	},

	add:{
		flex: 4,
		flexDirection: 'column',
  		justifyContent: 'center',
    	alignItems: 'center',
		padding:10 
	},

	tabButton:{
		height:60,
		width:150,
		backgroundColor: 'steelblue',
		flex: 1,
		flexDirection: 'row',
  		justifyContent: 'center',
    	alignItems: 'center',	
    	marginLeft: 30,
    	marginRight: 30    	
	},
	txt:{
		height: 60,
		width:200, 
		padding: 10
	},

	txtButton:{
		color:'ghostwhite',
		fontSize: 20,
    	fontWeight: 'bold', 
	}
});
export default AddPerson