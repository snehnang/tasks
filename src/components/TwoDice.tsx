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
    const [leftDie, setLeft] = useState<number>(1);
    const [rightDie, setRight] = useState<number>(2);

    return (
        <div>
            <span>
                <Button onClick={() => setLeft(d6)}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setRight(d6)}>Roll Right</Button>
            </span>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {leftDie === rightDie && leftDie === 1 ? (
                    <span> Lose </span>
                ) : (
                    <span> </span>
                )}
                {leftDie === rightDie && leftDie !== 1 ? (
                    <span> Win </span>
                ) : (
                    <span> </span>
                )}
            </div>
        </div>
    );

    return <div>Two Dice</div>;
}
