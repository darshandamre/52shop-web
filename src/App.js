import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export { App };
