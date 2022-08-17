import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { fetchApplications } from "../../store/applications";
import { AppDispatch, RootState } from "../../store/store";
import { ApplicationT } from "../application/application";

import styles from "./home.module.css";

function Home() {
  const { entities, loading } = useSelector(
    (state: RootState) => state.applications
  );
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

  const openAppicationPage = (id: string) => {
    navigate(`/application/${id}`);
  };

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
            {loading && <span>Loading...</span>}
            {!loading &&
              entities.map((app: ApplicationT) => (
                <tr onClick={() => openAppicationPage(app.id)} key={app.id}>
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
