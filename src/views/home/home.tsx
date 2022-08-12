import axios from "axios";
import { useEffect } from "react";

interface HomeProps {}

function Home() {
  useEffect(() => {
    axios.get("https://frontend-test.getsandbox.com/applications", {
      headers: {
        crossorigin: true,
        "Access-Control-Allow-Credentials": true,
      },
    });
  });
  return <div>Home</div>;
}

export default Home;
