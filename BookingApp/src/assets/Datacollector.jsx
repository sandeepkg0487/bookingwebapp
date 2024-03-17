import { useState } from 'react';


function useDatacollector(initialData) {
  const [data, setData] = useState(initialData);


  const updateData = (key, value) => {
    setData(prevData => ({
      ...prevData,
      [key]: value
    }));
  };


  const resetData = () => {
    setData(initialData);
  };

  
  return { data, updateData, resetData };
}

export default useDatacollector;
