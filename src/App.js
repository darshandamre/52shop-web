import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Login, Product, SignUp } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
};

export { App };
