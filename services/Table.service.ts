import { config } from "config";

const url = `${config.env.API_URL}/api`;

export const getOne = async (
  text: string,
  pattern: string,
  algorithm: String
) => {
  const fetchURL = `${url}/${algorithm}?text=${text}&pattern=${pattern}`;

  console.log(fetchURL);
  try {
    const response = await fetch(fetchURL);
    const data = await response.json();
    
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};

