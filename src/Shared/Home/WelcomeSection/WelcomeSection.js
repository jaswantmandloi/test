import { Link } from "react-router-dom";
import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <section className="welcomeSectionContainer spaceX">
      <section>
        <h1>
          Welcome to <span>Landkit</span>. Develop anything.
        </h1>
        <p>
          Build a beautiful, modern website with flexible Bootstrap components
          built from scratch.
        </p>
        <div className="buttons">
          <button>View all pages</button>
          <button>Documentation</button>
        </div>
      </section>
      <section>
        <img src="/assets/illustration-2.png" alt="illustration" />
      </section>
    </section>
  );
}

export default WelcomeSection;
