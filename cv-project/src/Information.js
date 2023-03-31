import React from "react";
import Fields from "./Fields";

function Information() {
    return (
        <div>
            <Fields title="First Name" type="text" />
            <Fields title="Middle Name" type="text" />
            <Fields title="Last Name" type="text" />
            <Fields title="Email" type="email" />
            <Fields title="Phone" type="tel" />
            <Fields title="Birthday" type="date" />
        </div>
    );
}
export default Information;
