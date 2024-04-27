import axios from "axios";

//find and random word from dictionary
export const getRandomWordWithDictionary = async () => {
  const response = await axios.get(process.env.REACT_APP_BACKEND_API);

  if (response.status !== 200) {
    alert("Error in getting an Random Word! Please referesh the page.");
    return;
  }
  if (
    response.data[0].message !== undefined ||
    response.data.message !== undefined
  ) {
    alert("Error in getting an Random Word! Please referesh the page.");
    return;
  }
  console.log(response.data);
  return response.data;
};
