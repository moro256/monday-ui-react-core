import PropTypes from "prop-types";
import "./anchor-list-item-media.scss";

export const AnchorListItem = ({ children }) => {
  return <li className="monday-style-anchor-list-item-media">{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};