import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const Colors = [
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
const default_color = Colors[0];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(default_color);

    function updateColor(event: ChangeEvent) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {Colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="colors"
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
                <div>
                    You chose{""}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </span>
                    .
                </div>
            </div>
        </div>
    );
}
