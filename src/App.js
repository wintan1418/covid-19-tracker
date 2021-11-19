import React from "react";
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './Api';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

      this.setState({data: fetchData});
    
  }
  
  
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