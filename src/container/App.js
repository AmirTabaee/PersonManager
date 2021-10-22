import React , {Component} from 'react';
import Persons from '../Person/Persons';
import {ToastContainer , toast} from 'react-toastify';
import simpleContext from '../context/context';
import Header from './../common/Header';
import AddNewPerson from '../Person/AddNewPerson';

class App extends Component {
    state={
        persons : [{id:1 , fullname:"امیر علوی"}] ,
        person : "" ,
        showPersons : true
    }

    handleShowPersons = () => {
        this.setState({showPersons : !this.state.showPersons});
    }

    handleDeletePerson = (id) => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({persons : filteredPersons});
        const personIndex = persons.findIndex(p => p.id ===id);
        const person = persons[personIndex];
        toast.error(`${person.fullname} با موفقیت حذف شد` , {
            position:'bottom-right',
            closeOnClick:true
        });
    }

    handleEditPerson = (event , id) =>{
        const  {persons : allpersons} = this.state;
        const personIndex = allpersons.findIndex( p => p.id === id);
        const person = allpersons[personIndex];
        person.fullname = event.target.value;
        allpersons[personIndex] = person;
        const persons = [...allpersons];
        this.setState({persons});
    }

    handleCreateNewPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id : Math.floor(Math.random() * 1000),
            fullname : this.state.person
        }
        if(this.state.person !== "" && this.state.person !== " "){
            persons.push(person);
            this.setState({persons , person:""});
            toast.success(`${person.fullname} با موفقیت اضافه شد` ,{
                    position:"top-right",
                    closeOnClick:true
                }
            )
        }
    }

    setPerson= (event) => {
        this.setState({person : event.target.value});
    }

    render() { 
        const {persons ,showPersons } = this.state;

        return (
            <simpleContext.Provider value={{
                state:this.state,
                handleDeletePerson:this.handleDeletePerson,
                handleEditPerson:this.handleEditPerson,
                handleCreateNewPerson:this.handleCreateNewPerson,
                setPerson:this.setPerson
            }}>
                <div className="rtl text-center">
                    <Header/>
                    <AddNewPerson/>
                    <button onClick={this.handleShowPersons} className={`btn ${(persons.length > 0)? "btn-info" : "btn-danger"}`}>نمایش اشخاص</button>
                    {(showPersons) ? <Persons/> : null}
                    <ToastContainer/>
                </div>
            </simpleContext.Provider>
        );
    }
}
 
export default App;