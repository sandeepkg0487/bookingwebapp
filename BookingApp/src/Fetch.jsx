import axios from 'axios';
import React, { useState, useEffect } from 'react';
import api from './Services/api';
import { useData } from './Context/Context';

function DataFetcher(WrappedComponent, url) {

  return function DataFetcher(props) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { today, tomorrowString, dates, searchParam ,count } = useData()

    let param = {
      start_date: today,
      end_date: tomorrowString,
      searchparam: "uganda",
      numberOfRooms:1
    }
    if (props.searchParam) {
      param = {
        searchparam: searchParam,
        start_date: dates.startDate,
        end_date: dates.endDate,
        numberOfRooms:count
      }

    }

    useEffect(() => {

      const fetchData = async () => {

        try {
          const response = await api.post(url,

            {
              ...param
            }
          );

          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [url, props.searchParam]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (data.data == 'faild') {
      return <div>somting went wrong</div>
    }

    return <WrappedComponent data={data} />;
  };
}
export default DataFetcher;