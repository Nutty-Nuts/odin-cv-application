import React, { Component } from "react";
import Fields from "./Fields";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eduSection: {
                school: "",
                course: "",
                grad: "",
            },
        };
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState((prevState) => ({
            eduSection: {
                ...prevState.eduSection,
                [e.target.id]: value,
            },
        }));
        // console.log(this.state.giSection);
    };

    render() {
        return (
            <div onChange={this.props.callback}>
                <fieldset>
                    <legend>Education</legend>
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="School: "
                        type="text"
                        id="school"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Course: "
                        type="text"
                        id="course"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Date Graduated. : "
                        type="date"
                        id="grad"
                    />
                </fieldset>
            </div>
        );
    }
}
export default Education;
