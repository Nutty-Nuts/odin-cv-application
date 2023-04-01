import React from "react";

function Summary(props) {
    const { data } = props;

    return (
        <ul>
            {data.map((datum) => {
                return <li>{datum.text}</li>;
            })}
        </ul>
    );
}
export default Summary;
