import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App" style={{ border: "#880808", padding: "4px" }}>
            <header className="App-header">
                UD CISC275 with Hello World by Luke Bonniwell
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ol>
                <li>Hi</li>
                <li>Hello</li>
                <li>Goodbye</li>
            </ol>
            <img
                src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
                alt="A picture of my dog Jelly Meatloaf"
            />
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
