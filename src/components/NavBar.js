import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Tasks!</Link>
      </h1>
      <button>
        <Link to="/transactions/new">Task Form</Link>
      </button>
    </nav>
  );
}
