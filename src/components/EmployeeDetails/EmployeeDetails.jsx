import React from "react";

const EmployeeDetails = (props) => {
    const {
        name,
        role
    } = props.team;
    return (
        <div>
           <h4>Name {name}</h4>
           <h4>{role} </h4>
        </div>
    )
}

export default EmployeeDetails;