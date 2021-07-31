import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer spaceX">
      <div className="connect">
        <img src="/assets/brand.svg" alt="LandKit" />
        <div>A better way to build.</div>
        <ul>
          {[
            "/assets/instagram.svg",
            "/assets/instagram.svg",
            "/assets/instagram.svg",
            "/assets/instagram.svg",
          ].map((icon) => {
            return (
              <li key={icon}>
                <img src={icon} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footerMenuItems">
        {footerMenuItems.map(({ heading, items }) => {
          return (
            <ul key={heading}>
              <li>{heading}</li>
              {items.map((item) => {
                return (
                  <li key={item}>
                    <a href={item}>{item}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;

const footerMenuItems = [
  {
    heading: "PRODUCTS",
    items: [
      "Page Builder",
      "UI Kit",
      "Styleguide",
      "Documentation",
      "Changelog",
    ],
  },

  {
    heading: "SERVICES",
    items: [
      "Page Builder",
      "UI Kit",
      "Styleguide",
      "Documentation",
      "Changelog",
    ],
  },

  {
    heading: "Connect",
    items: [
      "Page Builder",
      "UI Kit",
      "Styleguide",
      "Documentation",
      "Changelog",
    ],
  },

  {
    heading: "Legal",
    items: [
      "Page Builder",
      "UI Kit",
      "Styleguide",
      "Documentation",
      "Changelog",
      "Changelog 1",
      "Changelog 2",
      "Changelog 3",
    ],
  },
];
