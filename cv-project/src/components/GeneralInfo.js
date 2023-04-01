import React, { Component } from "react";
import Fields from "./Fields";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            giSection: {
                name: "",
                email: "",
                phone: "",
            },
        };
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState((prevState) => ({
            giSection: {
                ...prevState.giSection,
                [e.target.id]: value,
            },
        }));
        // console.log(this.state.giSection);
    };

    render() {
        return (
            <div onChange={this.props.callback}>
                <fieldset>
                    <legend>General Information</legend>
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Name: "
                        type="text"
                        id="name"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Email: "
                        type="email"
                        id="email"
                    />
                    <Fields
                        change={this.handleChange}
                        value={this.name}
                        title="Phone No. : "
                        type="tel"
                        id="phone"
                    />
                </fieldset>
            </div>
        );
    }
}
export default GeneralInfo;
