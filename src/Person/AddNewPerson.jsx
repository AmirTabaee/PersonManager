import React, { useContext } from 'react';
import simpleContext from '../context/context';

const AddNewPerson = () => {
    const context = useContext(simpleContext);
    const {handleCreateNewPerson , setPerson} = context
    return ( 
        <div>
            <form onSubmit={event => event.preventDefault()}>
                <div className="input-group w-25 mx-auto my-3">
                    <input type="text" onChange={setPerson} placeholder="اسم بهم بده" className="form-control" value={context.state.person}/>
                    <div className="input-group-append">
                        <button onClick={handleCreateNewPerson} className="btn btn-success fa fa-plus"/>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddNewPerson;