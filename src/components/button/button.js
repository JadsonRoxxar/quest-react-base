import React from "react";
import Proptypes from "prop-types";
import "./button.css";

class Button extends React.Component {
    render() {
        const label = this.props.label;
        const pressButton = this.props.pressButton;
        return (
            <>
                <button onClick={() => pressButton(label)}>{label}</button>
            </>
        );
    }
}
Button.propTypes = {
    label: Proptypes.string.isRequired,
    pressButton: Proptypes.func.isRequired,
};
Button.defaultProps = {
    label: "Download CV",
};

export default Button;
