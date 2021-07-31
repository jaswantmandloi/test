import "./DeveloperItems.css";

function DeveloperItems() {
  return (
    <section className="developerItemsContainer spaceX">
      {items.map(({ heading, details }) => {
        return (
          <div className="item">
            <div className="icon">{icon}</div>
            <h3>{heading}</h3>
            <p>{details}</p>
          </div>
        );
      })}
    </section>
  );
}

export default DeveloperItems;

const items = [
  {
    heading: "Built for developers",
    details:
      "Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
  },
  {
    heading: "Designed to be modern",
    details:
      "Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.",
  },
  {
    heading: "Built for developers",
    details:
      "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
  },
];

const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path d="M0 0h24v24H0z"></path>
      <path
        d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
        fill="#335EEA"
      ></path>
      <path
        d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
        fill="#335EEA"
        opacity=".3"
      ></path>
    </g>
  </svg>
);
