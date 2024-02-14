import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    const MyComponent = () => {
  const handleButtonClick = () => {
    // Redirect to the desired URL
    window.location.href = 'https://www.dominos.com/en/?utm_campaign=12899946141|c|GG&utm_source=Google&utm_medium=p_search&utm_content=kwd-24470291|12899946141|122001614375&utm_term=dominos&matchtype=e&gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RV0h6rlkr9piccHbSYknd5QXuZGLQKHY37K6y5YS_NEz14wqbWQ9MMaAjxZEALw_wcB';
  };
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
            <Button onClick={(handleButtonClick) => console.log("I am logged")}>Click Me</Button>
        </div>
    );
}

export default App;
export default MyComponent;
