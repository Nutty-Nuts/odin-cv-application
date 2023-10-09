import PropTypes from "prop-types";
import "../styles/Field.css";

export default function Field({ title, change, id }) {
    return (
        <div className="field">
            <label htmlFor={id}>{title}</label>
            <input type="text" onChange={change} id={id} />
        </div>
    );
}

Field.propTypes = {
    title: PropTypes.string,
    change: PropTypes.func,
    id: PropTypes.string,
};
