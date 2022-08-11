import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./views/signup/signup";
import Login from "./views/login/login";
import Home from "./views/home/home";
import store from "./store";

import "./styles/colors.css";
import "./App.css";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("auth");

  if (!token) {
    return <Navigate to="login" />;
  }
  return children;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
