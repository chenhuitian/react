import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import Login from '../components/Login';
import Dashborder from '../components/Dashborder';
import AddPerson from '../components/AddPerson';

class MainContainer extends Component{

	onForword(route,navigator){
		navigator.push({index: route.index+1});
	}

	onBack(route,navigator){
		navigator.pop();
	}
	render(){
		return (
		    <Navigator
		      initialRoute={{index: 0 }}
		      renderScene={(route, navigator) => {
		      	switch(route.index){
		      		case 0:
		      			return <Login onForword={()=>this.onForword(route,navigator)} />;
		      		case 1:
		      			return <Dashborder onBack={()=>this.onBack(route,navigator)}
		      					onForword={()=>this.onForword(route,navigator)} />;
		      		case 2:
		      			return <AddPerson onBack={()=>this.onBack(route,navigator)}/>;
		      		default:
		      			return <Login />;
		      	}		        
		      }
		  }/>
		  	);
		}
}

export default MainContainer;