import React from "react";
import PropsTypes from "prop-types";

class Paragraphs extends React.Component {
    render() {
        const children = this.props.children;
        const myStyle = {
            color: "#61dafb",
            fontFamily: "Roboto",
            textTransform: "uppercase",
        };

        return (
            <>
                <p className="paragraphs" style={myStyle}>
                    {children}
                </p>
            </>
        );
    }
}
Paragraphs.propsTypes = {
    children: PropsTypes.element.isRequired,
};
Paragraphs.defaultProps = {
    children: "quest do devemdobro: 'a base do react!' ",
    color: " #61dafb",
};

export default Paragraphs;
