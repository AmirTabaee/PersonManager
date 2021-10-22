import React from "react";

const Person = ({ fullname, deleted, edited }) => {
    return (
        <div className="card bg-info w-25 mx-auto mt-3 text-white">
            <h5 className="card-header">{fullname}</h5>
            <div className="card-body input-group mx-auto w-75 ">
                <input type="text" onChange={edited} className="form-control" />
                <div className="input-group-append">
                    <button onClick={deleted} className="btn btn-danger fa fa-trash"/>
                </div>
            </div>
        </div>
    );
};

export default Person;
