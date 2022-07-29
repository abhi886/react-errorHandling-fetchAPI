const FetchData = async (url, setLoading, setError) => {
  try {
    setLoading(true);
    const response = await fetch(url, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(response);
    }
    setLoading(false);
    return response.json();
  } catch (error) {
    setError(true);
    setLoading(false);
    if (error.status === 404) {
      console.log("Redirect to 404 page");
    }
    console.error(error);
  }
};

export default FetchData;
