const FetchData = async (url, SetApiResponse, SetIsLoading, SetIsError) => {
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const rawData = await response.json();
    const resData = { data: rawData };
    SetIsLoading(false);
    SetApiResponse(resData);
  } catch (ex) {
    SetIsError(true);
    SetIsLoading(false);
    if (ex.message === "404") {
      console.log("Redirect to 404 page");
    }
    console.error(ex);
  }
};

export default FetchData;
