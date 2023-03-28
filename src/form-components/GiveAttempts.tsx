import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function usedAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempt() {
        if (isNaN(requestedAttempts)) {
            setAttemptsLeft(attemptsLeft);
        } else {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: ChangeEvent) =>
                        setRequestedAttempts(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={gainAttempt}>gain</Button>
            <Button onClick={usedAttempt} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <div>Current Attempts: {attemptsLeft}</div>
        </div>
    );
}
