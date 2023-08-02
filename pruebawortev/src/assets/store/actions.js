import md5 from "md5";

const publicKey = "TU_CLAVE_PUBLICA_DE_MARVEL";
const privateKey = "TU_CLAVE_PRIVADA_DE_MARVEL";

const generateHash = (timestamp) => {
  const hash = md5(timestamp + privateKey + publicKey);
  return hash;
};

export const fetchCharacters = () => {
  return async (dispatch) => {
    const baseUrl = "https://gateway.marvel.com/v1/public/";
    const endpoint = "characters";
    const timestamp = Date.now();
    const hash = generateHash(timestamp);

    try {
      const response = await fetch(
        `${baseUrl}${endpoint}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      dispatch(setCharacters(data.data.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const setCharacters = (characters) => {
  return {
    type: "SET_CHARACTERS",
    payload: characters,
  };
};
