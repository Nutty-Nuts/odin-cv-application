import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
    constructor() {
        super();

        this.state = {
            giSection: {
                name: "",
                email: "",
                phone: "",
            },
            eduSection: {
                school: "",
                course: "",
                grad: "",
            },
            expSection: {
                company: "",
                position: "",
                employed: "",
                resign: "",
            },
        };
    }

    handleCallback = (e) => {
        this.setState((prev) => ({
            giSection: {
                ...prev.giSection,
                [e.target.id]: e.target.value,
            },
            eduSection: {
                ...prev.eduSection,
                [e.target.id]: e.target.value,
            },
            expSection: {
                ...prev.expSection,
                [e.target.id]: e.target.value,
            },
        }));
    };

    render() {
        return (
            <div>
                <GeneralInfo callback={this.handleCallback} />
                <Education callback={this.handleCallback} />
                <Experience callback={this.handleCallback} />
                <h1>{this.state.giSection.name}</h1>
                <p>{this.state.giSection.email}</p>
                <p>{this.state.giSection.phone}</p>
                <hr />
                <p>{this.state.eduSection.school}</p>
                <p>{this.state.eduSection.course}</p>
                <p>{this.state.eduSection.grad}</p>
                <hr />
                <p>{this.state.expSection.company}</p>
                <p>{this.state.expSection.position}</p>
                <p>{this.state.expSection.employed}</p>
                <p>{this.state.expSection.resign}</p>
            </div>
        );
    }
}
export default App;
