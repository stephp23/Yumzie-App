import Axios from 'axios';

//this function is to access the API using a query
const getDataFromAPI = async (query) => {
  console.log(query)
  const url = `https://api.edamam.com/search?q=${query}&to=100&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`;
  const result = await Axios.get(url);
  console.log("This is the result",result)
  return result;
};

  export default getDataFromAPI;