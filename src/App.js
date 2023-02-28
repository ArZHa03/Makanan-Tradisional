import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
