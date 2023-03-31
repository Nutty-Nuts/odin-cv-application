import React, { Component } from "react";
import Information from "./Information";
import Education from "./Education";
import Experience from "./Experience";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Information />
                <Education />
                <Experience />
            </div>
        );
    }
}
export default App;
