import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid blue", padding: "4px" }}
        >
            <header className="App-header">
                UD CISC275 with Hello World by Luke Bonniwell
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
                alt="A picture of my dog Jelly Meatloaf"
            />
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
        </div>
    );
}

export default App;
