import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './countryPicker.module.css';
import {countries} from '../../Api';

const CountryPicker = () => {

  const [fetchedCountries, setFetchedCountries] = useState([]);
  
  useEffect(()=> {
    const fetchCountries = async () => {
      setFetchedCountries(await countries);
    }

    fetchedCountries();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;