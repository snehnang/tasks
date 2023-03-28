import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>("");

    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoice">
                <Form.Label>Choose Answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option}>{option}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Your answer is {choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
