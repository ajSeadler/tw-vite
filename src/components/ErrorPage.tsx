import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-neutral-900 text-center px-6">
      <div className="max-w-xl">
        <h1 className="text-white text-6xl font-bold mb-6">
          Under Construction.
        </h1>
        <p className="text-gray-400 mb-6 text-lg max-w-lg mx-auto">
          He's trying his best. Please check back soon.
        </p>
        <div className="mb-10">
          <img
            src="https://www.dignited.com/wp-content/uploads/2014/05/I-heard-hes-good-at-coding-l.jpg"
            alt="corgi with a bug"
            className="rounded-lg shadow-xl max-w-xl mx-auto"
          />
        </div>
        <Link
          to={"/"}
          className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
