import React from "react";
import styles from "./EmployeeCard.module.scss"
import EmployeeDetails from "../EmployeeDetails";
import Counter from "../Counter";
import team from "../../data/team";

const EmployeeCard = (props) => {

    const {team} = props;

    return (
        <div className={styles.card}>
            <h4 >Employee Card</h4>
            <EmployeeDetails team={team} />
            <div className={styles.counterContainer}>
                <Counter team={team}/>
            </div>
        </div>
        
        
    )
}

export default EmployeeCard;