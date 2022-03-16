import { useLocation } from 'react-router-dom';

import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleShowAddTask, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' &&
        <Button
          color={!showAddTask ? "green" : "red"}
          text={!showAddTask ? "Add" : "Close"}
          onClick={toggleShowAddTask}
        />
      }
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleShowAddTask: PropTypes.func.isRequired,
  showAddTask: PropTypes.bool.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
