import PropTypes from "prop-types";
import "@styles/reusableComponents.scss";

export default function ReusableInput({
  labelName,
  inputType = "text",
  inputValue = "",
  placeholder = "",
  onChange,
  className = "",
}) {
  return (
    <div className="input-box">
      <label htmlFor={labelName.replace(" ", "-").toLowerCase()}>
        {labelName}
      </label>
      <input
        className={className}
        id={labelName.replace(" ", "-").toLowerCase()}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
}

ReusableInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
