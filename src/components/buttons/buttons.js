import Button from "../button/button";

const pressButton = (label) => {
    alert(`A label desse botão é ${label} `);
};
const Buttons = () => {
    return (
        <>
            <Button pressButton={pressButton}></Button>
        </>
    );
};

export default Buttons;
