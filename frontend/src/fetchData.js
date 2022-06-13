import { useState, useEffect } from 'react';
import axios from 'axios';
import { wiborChartURL } from './global';

export const useWiborHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    axios
      .get(wiborChartURL)
      .then((response) => {
        const tempData = response.data;
        setHistoryData(tempData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return [historyData];
};
