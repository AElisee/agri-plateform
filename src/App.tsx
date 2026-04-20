import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import ProductDetail from "./pages/ProductDetail";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
