import { Routes, Route, Link } from "react-router-dom";
import './About.css'

function About() {
  return (
    <section>
    <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      </section>
  );
}

export default About;
