import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
