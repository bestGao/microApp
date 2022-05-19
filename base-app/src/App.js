import { Routes, Route, Link } from "react-router-dom";
import MyPage from "./pages/MyPage.js";
import "./App.css";

function Home() {
  return (
    <>
      <main>
        <h2>基座应用</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/my-page">跳转到子应用</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

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
