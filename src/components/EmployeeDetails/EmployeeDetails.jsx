import React from "react";
import styles from "./EmployeeDetails.module.scss"

const EmployeeDetails = (props) => {
    const {
        name,
        role
    } = props.team;
    return (
        <div className={styles.text}>
           <h4>Name: {name}</h4>
           <h4>Role: {role} </h4>
        </div>
    )
}

export default EmployeeDetails;