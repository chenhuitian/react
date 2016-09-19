import React, { Component } from 'react';
import { TextInput, Text,Image, View, ScrollView,StyleSheet, TouchableHighlight } from 'react-native';
import PersonList  from '../store/PersonStore';

class Dashborder extends Component{

	render(){
		return(
			<View>

				<View style={ style.buttons } >
					
					<TouchableHighlight onPress={this.props.onBack}>
						<View style={ style.tabButton } >
				        	<Text style={ style.txtButton }>Back</Text>	
				        </View>	        
				     </TouchableHighlight>
				     
				     
				     <TouchableHighlight onPress={this.props.onForword}>
				        <View style={ style.tabButton } >
				        	<Image source={require('../images/addPerson.png')} style={{width: 40, height: 40}}/>
				        	<Text style={ style.txtButton }>addPerson</Text>		
				        </View>	 	        
				     </TouchableHighlight>
				     
			     </View>

			     <Text> Persons List </Text>
			     
			     <ScrollView style={style.personlist}>
			     {
			     	PersonList.map(person => {
			     		return person.sex === 'F' ? 
			     		<View key={person.keyNo} style={style.person}>
				     		<Image source={require('../images/F.png')} style={style.image}/>
				     		<Text  style={{color: 'red'}}> { person.name } </Text>
			     		</View>: 
			     		<View key={person.keyNo} style={style.person}>
				     		<Image source={require('../images/M.png')} style={style.image}/>
			     			<Text  style={{color: 'blue'}}> { person.name } </Text>
			     		</View>
			     	} )
			     }
			     </ScrollView>
		     </View>)
		
	}
}

var style = StyleSheet.create({
	buttons:{
 		flex: 1,
		flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
		height:60,
	},
	personlist: {
		height:300
	},
    person: {
        flex: 1,
		flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
    	width: 60, 
    	height: 60
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

	txtButton:{
		color:'ghostwhite',
		fontSize: 20,
    	fontWeight: 'bold',    	
	}
});

export default Dashborder