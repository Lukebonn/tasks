import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group as={Row} controlId="in-edit-mode">
                <Form.Label column sm="2">
                    EditMode
                </Form.Label>
                <Col sm="10">
                    <Form.Switch
                        type="switch"
                        id="editModeSwitch"
                        name="student"
                        label=""
                        checked={inEditMode}
                        onChange={updateEditMode}
                    />
                </Col>
            </Form.Group>
            {inEditMode && (
                <Form.Group as={Row} controlId="edit-name">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="student"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Col>
                </Form.Group>
            )}
            <div>
                {name} is {isStudent ? "a student" : "not a student"}.
            </div>
            {inEditMode && (
                <Form.Group as={Row} controlId="is-student-check">
                    <Form.Label column sm="2">
                        Is Student
                    </Form.Label>
                    <Col sm="10">
                        <Form.Check
                            type="checkbox"
                            id="isStudentCheckbox"
                            name="student"
                            label="Student"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Col>
                </Form.Group>
            )}
        </div>
    );
}
