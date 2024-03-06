import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeTheType(): QuestionType {
        console.log("Current type: " + type);
        return type === "multiple_choice_question"
            ? "short_answer_question"
            : "multiple_choice_question";
    }
    return (
        <span>
            <Button onClick={() => setType(changeTheType())}>
                Change Type
            </Button>
            {type === "short_answer_question" ? (
                <div data-testid="multiple-choice-text">Multiple Choice</div>
            ) : (
                <div data-testid="short-answer-text">Short Answer</div>
            )}
        </span>
    );
}
