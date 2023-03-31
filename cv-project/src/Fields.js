import React from "react";

function Fields(props) {
    const { title, type } = props;

    return (
        <div>
            <label>{title}</label>
            <br />
            <input type={type} />
            <br />
            <br />
        </div>
    );
}

export default Fields;
