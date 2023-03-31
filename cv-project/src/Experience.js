import React from "react";
import Fields from "./Fields";

function Experience() {
    return (
        <div>
            <Fields title="Company" type="text" />
            <Fields title="Position" type="text" />
            <Fields title="Tasks" type="text" />
            <Fields title="Date Hired" type="date" />
            <Fields title="Date Resigned" type="date" />
        </div>
    );
}
export default Experience;
