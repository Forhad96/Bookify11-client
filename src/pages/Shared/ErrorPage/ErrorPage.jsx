import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-light-text dark:text-dark-text">
          <h2 className="text-9xl t font-bold mb-5">
            4<span className="text-yellow-400">0</span>4
          </h2>
          <h4 className="mb-3 text-2xl font-semibold text-yellow-400">
            Oops! That page can’t be found
          </h4>
          <p className="mb-8 text-lg">
            The page you are looking for it maybe deleted
          </p>
          <Link to="/">
            <button className="py-3 px-5 rounded text-xl font-bold hover:bg-dark-accent bg-light-primary ">GO Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
