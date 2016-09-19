import Persons from '../api/PersonList';

var oriPersonList = Persons || [];
let key = 0;
PersonList = oriPersonList.map(person => {
	return Object.assign({},person,{keyNo: key++});
});

export default PersonList