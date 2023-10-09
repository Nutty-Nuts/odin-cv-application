import PropTypes from "prop-types";
import Field from "./Field";
import "../styles/Personal.css";

export default function Personal({ change }) {
    return (
        <div className="personal">
            <h2>Personal Information</h2>
            <Field
                title="Full Name"
                change={change}
                id="name"
                required={true}
            />
            <Field title="Email" change={change} id="email" required={true} />
            <Field
                title="Phone Number"
                change={change}
                id="contact"
                required={true}
            />
            <Field
                title="Address"
                change={change}
                id="address"
                required={true}
            />
        </div>
    );
}

Personal.propTypes = {
    change: PropTypes.func,
};
