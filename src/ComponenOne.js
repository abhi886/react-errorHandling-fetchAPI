import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
const URL = "https://jsonplaceholder.typicode.com/users/1";
function ComponenOne() {
  const [name, SetName] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(false);

  const getData = async () => {
    try {
      const res = await fetchData(URL, SetIsLoading, SetErrorMessage);
      console.log(res);
      if (res) {
        SetName(res.name);
      }
    } catch (ex) {
      console.error(ex);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (errorMessage) {
    return <p>Something Went Wrong</p>;
  } else {
    return (
      <div>
        {!isLoading ? name && <p> Name:{name}</p> : <p>Show Loading Spinner</p>}
      </div>
    );
  }
}

export default ComponenOne;
