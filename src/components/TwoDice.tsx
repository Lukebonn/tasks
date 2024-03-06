import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1Value, setD1Value] = useState<number>(2);
    const [d2Value, setD2Value] = useState<number>(1);

    const outcome = () => {
        if (d1Value === d2Value && d1Value === 1) {
            return <span>You Lose</span>;
        } else if (d1Value === d2Value && d1Value !== 1) {
            return <span>You Win</span>;
        }
    };

    return (
        <span>
            <Button
                onClick={() => {
                    setD1Value(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setD2Value(d6());
                }}
            >
                Roll Right
            </Button>
            <div>
                <span data-testid="left-die">{d1Value}</span>
                <span data-testid="right-die">{d2Value}</span>
            </div>
            <div>{outcome()}</div>
        </span>
    );
}
