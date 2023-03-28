import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function checkCorrect(event: ChangeEvent) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Type answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={checkCorrect} />
            </Form.Group>
            <div>
                Your answer is {givenAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
