import React from "react";

function Fields(props) {
    const { change, value, title, type, id } = props;

    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <input
                onChange={change}
                value={value}
                type={type}
                id={id}
                required={true}
            />
            <br /> <br />
        </div>
    );
}
export default Fields;
