import axios from "axios";

//find and random word from dictionary
export const getRandomWordWithDictionary = async () => {
  const response = await axios.get(process.env.REACT_APP_BACKEND_API);
  //const response = await axios.get(process.env.REACT_APP_LOCAL);

  if (response.status !== 200) {
    //alert("Error in getting an Random Word! Please referesh the page.");
    console.log("Error in getting an Random Word! Please referesh the page.");
    return null;
  }
  console.log(response);
  if (response.data.message != undefined) {
    //alert("Error in getting an Random Word! Please referesh the page.");
    console.log(
      "Error in getting an Random Word! Please referesh the page. Wrong Word!"
    );
    return null;
  }
  console.log(response.data);
  return response.data;
};
