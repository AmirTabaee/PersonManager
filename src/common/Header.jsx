import React, { useContext } from 'react';
import simpleContext from '../context/context';


const Header = () => {
    const context = useContext(simpleContext);
    
    const {persons} = context.state;
    const badgeStyle = [];
        if(persons.length > 3) badgeStyle.push("badge-success");
        if(persons.length <= 3) badgeStyle.push("badge-warning");
        if(persons.length <= 1) badgeStyle.push("badge-danger");

    return ( 
        <div>
            <div className="alert alert-info">
                <h1>نمایش دهنده اشخاص</h1>
            </div>
            <h3 className="alert alert-light">تعداد اشخاص <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>{persons.length}</span> نفر می باشد</h3>
        </div>
     );
}
 
export default Header;