import { useState } from "react";
import "./styles/App.css";

function App() {
    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    return (
        <div className="app">
            <div className="fields"></div>
            <div className="curriculum-vitae"></div>
        </div>
    );
}

export default App;
