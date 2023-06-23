import type { Component } from 'solid-js';

import pe from './assets/pe.jpg';
import styles from './App.module.css';

const App: Component = () => (
    <div class={styles.App}>
        <header class={styles.header}>
            <h2>pechuga</h2>
            <img src={pe} class={styles.logo} alt="logo" />
        </header>
    </div>
);

export default App;
