import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
`;

export default function Button({
  name = "button",
  className = "reusable-button",
  width,
  onClick,
}) {
  return (
    <StyledButton className={className} width={width} onClick={onClick}>
      {name}
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  onClick: PropTypes.func,
};
