import React from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    return (
        <section className={styles.counter}>
        <h1>Counter</h1>
        <button>-</button>
        <p>0</p>
        <button>+</button>
        </section>
    )
}

export default Counter;