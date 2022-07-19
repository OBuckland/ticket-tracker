import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <section className={styles.counter}>
        <h1>Counter</h1>
        <p>{count}</p>
        <div className={styles.buttons}>
            <button className={styles.button} onClick={() => setCount(count - 1)}>-</button>
            <button className={styles.button}  onClick={() => setCount(count + 1)}>+</button>
        </div>
        </section>
    )
}

export default Counter;