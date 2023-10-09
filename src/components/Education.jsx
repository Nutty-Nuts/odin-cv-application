import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Education.css";
import Field from "./Field";

export default function Education({ change, education, submit }) {
    const [add, setAdd] = useState(false);
    const [list, setList] = useState(true);

    const handleToggle = () => {
        setAdd(() => !add);
        setList(() => !list);
    };

    const handleSubmit = () => {
        submit();
        handleToggle();
    };

    return (
        <div className="education">
            <div className="header">
                <h2 className="education-header">Education</h2>
                <button
                    type="button"
                    className="education-toggle"
                    onClick={handleToggle}
                >
                    Add
                </button>
            </div>
            {Add(add, change, handleSubmit)}
            {List(list, education)}
        </div>
    );
}

Education.propTypes = {
    change: PropTypes.func,
    education: PropTypes.object,
    submit: PropTypes.func,
};

function Add(state, change, submit) {
    if (!state) {
        return;
    }
    return (
        <div>
            <Field title="School" change={change} id="school" required={true} />
            <Field title="Degree" change={change} id="degree" required={true} />
            <div className="degree-duration">
                <Field
                    title="Start Date"
                    change={change}
                    id="startDate"
                    required={true}
                />
                <Field
                    title="End Date"
                    change={change}
                    id="endDate"
                    required={true}
                />
            </div>
            <button type="button" onClick={submit}>
                Submit
            </button>
        </div>
    );
}

function List(state, education) {
    if (!state) {
        return;
    }

    const records = Object.entries(education).map((entry) => {
        const [key, value] = entry;
        return (
            <div className="record" key={key} value={value} id={key}>
                {value.school}
            </div>
        );
    });

    return <div>{records}</div>;
}
