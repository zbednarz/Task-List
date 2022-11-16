import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">Bact to Home</Link>
    </section>
  );
};

export default Error;
