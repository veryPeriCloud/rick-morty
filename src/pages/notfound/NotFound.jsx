import { Link } from "react-router-dom";
import './style.css';

function NotFound() {

  return (
    <div className="notfound-page">
      <div className="main-container pt-[72px] flex flex-col items-center justify-center gap-5 h-screen">
        <h1 className="text-9xl text-rm-lime text-bold text-center">
          404
        </h1>
        <p className="text-4xl text-white text-bold text-center">Sorry, the page not found</p>
        <Link to="/" className="text-center py-2 px-5 bg-rm-lime rounded-lg hover:opacity-80">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFound;
  