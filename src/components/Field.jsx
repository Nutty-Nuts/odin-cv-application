import PropTypes from "prop-types";
import "../styles/Field.css";

export default function Field({ title, change, id, value }) {
    return (
        <div className="field">
            <label htmlFor={id}>{title}</label>
            <input type="text" onChange={change} id={id} defaultValue={value} />
        </div>
    );
}

Field.propTypes = {
    title: PropTypes.string,
    change: PropTypes.func,
    id: PropTypes.string,
};
