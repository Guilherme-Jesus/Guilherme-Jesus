import axios from "axios";
import md5 from "md5";
import { useEffect } from "react";
import "./App.css";

function App() {
  const PUBLIC_KEY = "0077f66a58ac1ed9db1b91d16a471101";
  const PRIVATE_KEY = "c76806330b33dabe94516d9d3267033cd18fdbf8";
  const BASE_URL = "https://gateway.marvel.com/v1/public/";
  const timeStamp = new Date().getTime();

  const hash = md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
      )
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  }, [hash, timeStamp]);
}

export default App;
