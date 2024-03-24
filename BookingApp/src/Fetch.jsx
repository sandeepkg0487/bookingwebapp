import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DataFetcher(WrappedComponent, url) {
  return function DataFetcher(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    let param = {
      "searchparam": "",
      "pagenumber": 1
    }
    if (props.searchParam) {
      param = {
        searchparam: 'atlas',
        pagenumber: 1
      }

    }

    useEffect(() => {

      const fetchData = async () => {

        try {
          const response = await axios.get(url,
            {
              params: {
                searchparam: props.searchParam,
                pagenumber: 1
              }
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
    if(data.data =='faild'){
      return <div>somting went wrong</div>
    }
   
    return <WrappedComponent data={data} />;
  };
}
export default DataFetcher;