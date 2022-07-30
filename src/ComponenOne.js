import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
const URL = "https://sjsonplaceholder.typicode.com/users/1";
function ComponenOne() {
  const [apiResponse, SetApiResponse] = useState({ data: {} });
  const [isLoading, SetIsLoading] = useState(false);
  //   const [errorMessage, SetErrorMessage] = useState(false);
  const getData = async () => {
    try {
      await fetchData(URL, SetApiResponse, SetIsLoading);
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
  return (
    <>
      {!isLoading ? (
        <div>
          <p>Name:{name}</p>
          <p>Id:{id}</p>
        </div>
      ) : (
        <p>Loading Spinner</p>
      )}
    </>
  );

  //   if (isLoading) return <p>Loading Spinner</p>;
  //   return (
  //     <div>
  //       <p>Name:{name}</p>
  //       <p>Id:{id}</p>
  //     </div>
  //   );
}

export default ComponenOne;
