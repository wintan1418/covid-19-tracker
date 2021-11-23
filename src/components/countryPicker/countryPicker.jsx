import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './countryPicker.module.css';
import {fetchCountries} from '../../Api';

const CountryPicker = () => {

  const [fetchedCountries, setFetchedCountries] = useState([]);
  
  useEffect(()=> {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchApi();  
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      {fetchedCountries.map((country, i) => <optio key={i} value={country}>{country}</optio>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;