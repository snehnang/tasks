import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

interface members {
    setTeam: (team: string[]) => void;
    team: string[];
}

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

function addMember(newMember: string, { team, setTeam }: members) {
    setTeam(!team.includes(newMember) ? [...team, newMember] : [...team]);
}

export function ChooseTeam(): JSX.Element {
    // const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);
    const clearTeam = () => setTeam([]);
    /*
    function chooseMember() {
        
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        
    }

    function clearTeam() {
        
        team = [];
        
    }
*/
    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    addMember(option, { team, setTeam })
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
