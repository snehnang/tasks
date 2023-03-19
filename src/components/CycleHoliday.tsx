import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year's ❄️"
    | "Valentine's Day 💖"
    | "Easter 🐇"
    | "Thanksgiving 🦃"
    | "Christmas 🎄";

const chronological: Record<Holiday, Holiday> = {
    "New Year's ❄️": "Valentine's Day 💖",
    "Valentine's Day 💖": "Easter 🐇",
    "Easter 🐇": "Thanksgiving 🦃",
    "Thanksgiving 🦃": "Christmas 🎄",
    "Christmas 🎄": "New Year's ❄️"
};

const alphabetical: Record<Holiday, Holiday> = {
    "Christmas 🎄": "Easter 🐇",
    "Easter 🐇": "New Year's ❄️",
    "New Year's ❄️": "Thanksgiving 🦃",
    "Thanksgiving 🦃": "Valentine's Day 💖",
    "Valentine's Day 💖": "Christmas 🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas 🎄");

    function changeByYear(): void {
        const nextHoliday = chronological[holiday];
        setHoliday(nextHoliday);
    }

    function changeByAlphabet(): void {
        const nextHoliday = alphabetical[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeByYear}>Advance by Year</Button>
                {<div>{holiday}</div>}
            </div>
            <div>
                <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
                {<div>{holiday}</div>}
            </div>
        </>
    );
}
