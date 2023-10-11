import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/Experience.css";
import Field from "./Field";

export default function Experience({ change, experience, submit }) {
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
        <div className="experience">
            <div className="header">
                <h2 className="experience-header">Experience</h2>
                <button
                    type="button"
                    className="experience-toggle"
                    onClick={handleToggle}
                >
                    Add
                </button>
            </div>
            {Add(add, change, handleSubmit)}
            {List(list, experience)}
        </div>
    );
}

Experience.propTypes = {
    change: PropTypes.func,
    experience: PropTypes.object,
    submit: PropTypes.func,
};

function Add(state, change, submit) {
    if (!state) {
        return;
    }
    return (
        <div>
            <Field
                title="Company"
                change={change}
                id="company"
                required={true}
            />
            <Field
                title="Position"
                change={change}
                id="position"
                required={true}
            />
            <div className="position-duration">
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
            <Field
                title="Description"
                change={change}
                id="description"
                required={true}
            />
            <button type="button" onClick={submit}>
                Submit
            </button>
        </div>
    );
}

function List(state, experience) {
    if (!state) {
        return;
    }

    const records = Object.entries(experience).map((entry) => {
        const [key, value] = entry;
        return (
            <div className="record" key={key} value={value} id={key}>
                {value.company}
            </div>
        );
    });

    return <div>{records}</div>;
}
