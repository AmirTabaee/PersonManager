import React , {createContext} from 'react';

const simpleContext = createContext({
    persons:[],
    person:"",
    handleDeletePerson: () => {},
    handleEditPerson: () => {},
    handleCreateNewPerson: () => {},
    setPerson: () => {}
});

export default simpleContext;