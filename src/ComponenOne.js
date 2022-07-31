import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
const URL = "https://jsonplaceholder.typicode.com/users/1";
function ComponenOne() {
  const [apiResponse, SetApiResponse] = useState({ data: {} });
  const [isLoading, SetIsLoading] = useState(true);
  const [isError, SetIsError] = useState(false);
  const getData = async () => {
    try {
      await fetchData(URL, SetApiResponse, SetIsLoading, SetIsError);
    } catch (ex) {
      console.error(ex);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const {
    data: { name, id },
  } = apiResponse;

  /* {errorMessage && <p>Show Error Boundary Component</p>} */

  if (isLoading) return <p>Loading Spinner</p>;
  if (isError) return <p>Error Component</p>;
  return (
    <div>
      <p>Name:{name}</p>
      <p>Id:{id}</p>
    </div>
  );
}

export default ComponenOne;
