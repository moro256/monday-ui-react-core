import PropTypes from "prop-types";
import classnames from "classnames";
import "./anchor-list-item-classnames.scss";

export const AnchorListItem = ({ children }) => {
  return <li className={classnames("monday-style-anchor-list-item-classnames")}>{children}</li>;
};
AnchorListItem.propTypes = {
  children: PropTypes.element
};

AnchorListItem.defaultProps = {
  children: null
};