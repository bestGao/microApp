import { Link } from "react-router-dom";
import './Home.css'

const str: string = '前端知识体系'

function Home() {
  return (
    <section className="section">
      <main>
        <h2>{str}</h2>
        <p></p>
      </main>
      <nav>
        <Link to="/my-page">跳转到子应用</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
    </section>
  );
}

export default Home;
