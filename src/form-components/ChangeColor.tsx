import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [chosenColor, setChosenColor] = useState(colors[0]);
    function updateColor(color: string) {
        setChosenColor(color);
    }
    return (
        <div>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        type="radio"
                        key={color}
                        id={color}
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                        onChange={() => updateColor(color)}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                Currently selected color: {chosenColor}
            </div>
        </div>
    );
}
