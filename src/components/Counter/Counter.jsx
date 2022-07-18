import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <section className={styles.counter}>
        <h1>Counter</h1>
        <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button className={styles.button}  onClick={() => setCount(count + 1)}>+</button>
        </section>
    )
}

export default Counter;