import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function flipProg(): void {
        setProgress(!progress);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        flipProg();
                        setAttempts(numAttempts - 1);
                    }}
                    disabled={progress || numAttempts <= 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={() => flipProg()} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(numAttempts + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
                to {numAttempts}.
            </div>
        </div>
    );

    return <div>Start Attempt</div>;
}
