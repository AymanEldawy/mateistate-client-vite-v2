import { Link } from "react-router-dom";

const BottomNavigationMessage = ({ message, link, linkText }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 w-fit mx-auto">
      <p className="">{message}</p>{" "}
      <Link to={link}>
        {linkText}
      </Link>
    </div>
  );
};

export default BottomNavigationMessage;
