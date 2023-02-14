import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>University of Delaware</h2>
            <p>Sneha Nangelimalil</p>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Column #1
                        <div id="rectangle1"></div>
                        <img
                            src="https://images.fineartamerica.com/images-medium-large-5/forest-path-bob-van-den-berg-photography.jpg"
                            alt="path in forest"
                        />
                    </Col>
                    <Col>
                        Column #2
                        <div id="rectangle2"></div>
                        <ul>
                            <li>number 1</li>
                            <li>number 2</li>
                            <li>number 3</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
