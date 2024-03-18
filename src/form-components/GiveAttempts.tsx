import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const handleGainButtonClick = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts)) {
            setAttempts(attempts + parsedAttempts);
        }
    };
    return (
        <div>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button onClick={handleGainButtonClick}>gain</Button>
            <Form.Group controlId="forCheckAnswer">
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                Attempts # is:
                {attempts}
                Requested # is:
                {requestedAttempts}
            </div>
        </div>
    );
}
