import React from "react";
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <CountryPicker/>
        <Cards/>
        <Charts/>
      </div>
    )
  }
}

export default App;