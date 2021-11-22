import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./navigation.css').default

const Navigation = () => <nav>
  <ul className={styles.navList}>
    <li><Link to="/butterflies">Butterflies</Link></li>
    <li><Link to="/create">Create Butterfly</Link></li>
  </ul>
</nav>

export default Navigation
