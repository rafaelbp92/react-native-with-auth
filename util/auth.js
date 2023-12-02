import axios from "axios";

const API_KEY = "***REMOVED***";
const URL = "https://identitytoolkit.googleapis.com/v1/accounts";

export async function authenticate(email, password) {
  const response =  await axios.post(`${URL}:signInWithPassword?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}

export async function createUser(email, password) {
  const response =  await axios.post(`${URL}:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data.idToken;
}
