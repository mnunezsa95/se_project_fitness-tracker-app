import PropTypes from "prop-types";

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const CalendarButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <CalendarDaysIcon className="text-content size-10" />
    </button>
  );
};

CalendarButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that onClick is a required function
};

export default CalendarButton;
