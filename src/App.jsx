import { useState } from "react";
import "./styles/App.css";

import Personal from "./components/Personal";

function App() {
    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const handlePersonalChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        setPersonal((prev) => ({ ...prev, [id]: value }));
        console.log(personal);
    };

    return (
        <div className="app">
            <div className="fields">
                <Personal change={handlePersonalChange} />
            </div>
            <div className="curriculum-vitae"></div>
        </div>
    );
}

export default App;
