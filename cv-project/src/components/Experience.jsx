import React, { Component } from "react";
import Fields from "./Fields";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expSection: {
                company: "",
                position: "",
                employed: "",
                resign: "",
            },
        };
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState((prevState) => ({
            expSection: {
                ...prevState.expSection,
                [e.target.id]: value,
            },
        }));
        // console.log(this.state.giSection);
    };

    render() {
        return (
            <div onChange={this.props.callback}>
                <fieldset>
                    <legend>Experience</legend>
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Company Name: "
                        type="text"
                        id="company"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Position: "
                        type="text"
                        id="position"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Date Employed : "
                        type="date"
                        id="employed"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Date Resigned : "
                        type="date"
                        id="resign"
                    />
                </fieldset>
            </div>
        );
    }
}
export default Experience;
