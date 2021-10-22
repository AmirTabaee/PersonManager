import React , {useState} from 'react';
import Persons from '../Person/Persons';
import {ToastContainer , toast} from 'react-toastify';
import simpleContext from '../context/context';
import Header from './../common/Header';
import AddNewPerson from '../Person/AddNewPerson';

const App = () => {
    const [getPersons , setPersons] = useState([]);
    const [getPerson , setPerson] = useState("");
    const [getShowPersons , setShowPersons] = useState(true);

    const HandleShowPersons = () => {
        setShowPersons(!getShowPersons);
    };

    const handleDeletePerson = (id) => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id);
        setPersons(filteredPersons);
        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];
        toast.error(`${person.fullname} با موفقیت حذف شد`,{
            position : "bottom-right",
            closeOnClick : true
        })
    }

    const handleEditPerson = (event , id) => {
        const persons = [...getPersons];
        const personIndex = persons.findIndex(p => p.id ===id);
        const person = persons[personIndex];
        person.fullname = event.target.value;
        persons[personIndex] = person;
        setPersons(persons);
    }

    const handleCreateNewPerson = (id) => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getPerson,
        };
        if(getPerson !== "" && getPerson !== " "){
            persons.push(person);
            setPersons(persons);
            setPerson("");
            toast.success(`${person.fullname} با موفقیت اضافه شد` , {
                position : "top-right",
                closeOnClick : true
            })
        }
    }

    const setSinglePerson = (event) => {
        setPerson(event.target.value);
    }

    return ( 

        <simpleContext.Provider value={{
            persons : getPersons,
            person : getPerson,
            handleDeletePerson : handleDeletePerson,
            handleEditPerson: handleEditPerson,
            handleCreateNewPerson : handleCreateNewPerson,
            setPerson : setSinglePerson
        }}>
            <div className="rtl text-center">
                <Header/>
                <AddNewPerson/>
                <button onClick={HandleShowPersons} className={`btn ${(getPersons.length > 0)? "btn-info" : "btn-danger"}`}>نمایش اشخاص</button>
                {(getShowPersons) ? <Persons/> : null}
                <ToastContainer/>
            </div>
        </simpleContext.Provider>
     );
}
 
export default App;
