import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing:"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
            </div>
            <div>
                {isEditMode ? (
                    <Form.Group controlId="formEditMode">
                        <Form.Control value={name} onChange={updateName} />
                        <Form.Check
                            type="checkbox"
                            id="check-isStudent"
                            label="Is Student?"
                            name="student"
                            checked={isStudent}
                            onChange={(event: ChangeEvent) =>
                                setIsStudent(event.target.checked)
                            }
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {name + " "}
                        {isStudent ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
