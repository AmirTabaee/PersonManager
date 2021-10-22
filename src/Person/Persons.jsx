import React, { useContext } from "react";
import simpleContext from "../context/context";
import Person from "./Person";


const Persons = () => {
    const context = useContext(simpleContext);
    const {persons} = context.state;
    const {handleDeletePerson , handleEditPerson} = context;
    return persons.map((person) => (
        <Person
            key={person.id}
            fullname = {person.fullname}
            deleted = {() => handleDeletePerson(person.id)}
            edited = {(event) => handleEditPerson(event, person.id)}
        />
    ));
};

export default Persons;
