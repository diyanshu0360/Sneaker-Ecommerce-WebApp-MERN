import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQwMWM1NjMyZDFiNjhiN2JlOGVjMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTgzNDkwNywiZXhwIjoxNjk2MDk0MTA3fQ.ryjxaXYRepVnajMoprhWtR_yNFjPlAzBQ1MAWefOkIc"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});