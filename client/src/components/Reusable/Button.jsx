import PropTypes from "prop-types";

export default function Button({
  name = "button",
  className = "reusable-button",
  onClick,
}) {
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
