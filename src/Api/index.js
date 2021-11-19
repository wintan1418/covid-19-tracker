import axios from 'axios';
import acios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData =  async () => {
  try {
   const { data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(url); 
   
   const modifiedData = {
    confirmed,recovered,deaths,lastUpdate}

    return modifiedData;
  } catch(error){

  }
}