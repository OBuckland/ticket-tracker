import React from "react";
import styles from "./EmployeeCard.module.scss"
import EmployeeDetails from "../EmployeeDetails";
import Counter from "../Counter";


const EmployeeCard = (props) => {

    const {team} = props;

    return (
        <div className={styles.card}>

            <div className={styles.employeeDetails}>
                <EmployeeDetails team={team}  />
            </div>

            <div className={styles.counterContainer}>
                <Counter team={team}/>
            </div>

        </div>
        
        
    )
}

export default EmployeeCard;