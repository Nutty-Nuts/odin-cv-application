import React from "react";
import Fields from "./Fields";

function Education() {
    return (
        <div>
            <Fields title="School" type="text" />
            <Fields title="Course" type="text" />
            <Fields title="Graduation Date" type="date" />
        </div>
    );
}
export default Education;
