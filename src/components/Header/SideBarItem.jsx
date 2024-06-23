import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarItem = ({ item }) => {
  return (
    <NavLink
      to={item.link}
      className="py-2 flex items-center text-2xl dark:text-content"
    >
      {item.image && (
        <item.image className="size-10 mr-4" sx={{ fontSize: 40 }} />
      )}
      {item.title}
    </NavLink>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    image: PropTypes.elementType,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideBarItem;
