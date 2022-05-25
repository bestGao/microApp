import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage.js";
import Home from './pages/Home/Home.tsx'
import About from './pages/About/About.tsx'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="my-page" element={<MyPage />} />
    </Routes>
  );
}

export default App;
