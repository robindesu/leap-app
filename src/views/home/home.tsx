import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

import styles from "./home.module.css";

interface HomeProps {}

interface Application {
  id: number;
  name: string;
  secret: string;
  lang: string;
  version: string;
}

function Home() {
  const [applications, setApplications] = useState<Application[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://frontend-test.getsandbox.com/applications", {
        withCredentials: true,
        headers: {
          crossorigin: true,
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((data) => {
        setApplications(data.data);
      });
  }, []);

  return (
    <>
      <Header text="Applications List" />

      <div className={styles.home}>
        <Button
          label={"Add New Application"}
          onClick={() => navigate("/application")}
        />

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr>
                <td>{app.name}</td>
                <td>{app.lang}</td>
                <td>{app.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
