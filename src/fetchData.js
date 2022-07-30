const FetchData = async (url, SetApiResponse, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch(url, {
      credentials: "include",
    });
    console.log(response);
    if (!response.ok) {
      //   throw new Error(response);
      console.error(response.error);
    }
    const rawData = await response.json();
    const resData = { data: rawData };
    console.log(resData);
    SetApiResponse(resData);
    setLoading(false);
  } catch (error) {
    // setError(true);
    // setLoading(false);
    // if (error.status === 404) {
    //   console.log("Redirect to 404 page");
    // }
    console.error(error);
  }
};

export default FetchData;
