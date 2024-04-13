import logo from "./logo.svg";
import "./App.css";
import Paragraphs from "./components/paragraphs/paragraphs";
import Buttons from "./components/buttons/buttons";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Paragraphs />
                    <Buttons />

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    );
}

export default App;
