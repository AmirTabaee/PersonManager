import React , {createContext} from 'react';

const simpleContext = createContext({
    state:{},
    handleDeletePerson: () => {},
    handleEditPerson: () => {},
    handleCreateNewPerson: () => {},
    setPerson: () => {}
});

export default simpleContext;