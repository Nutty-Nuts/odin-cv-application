import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./styles/App.css";

import Personal from "./components/Personal";
import Education from "./components/Education";

function App() {
    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [educationList, setEducationList] = useState({
        [uuid()]: {
            school: "Xavier University Ateneo de Cagayan",
            degree: "BSCS",
            startDate: "2022",
            endDate: "2026",
        },
        [uuid()]: {
            school: "Xavier University Senior Highschool",
            degree: "N/A",
            startDate: "2020",
            endDate: "2022",
        },
    });
    const [experience, setExperience] = useState([]);

    const [education, setEducation] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
    });

    const handlePersonalChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        setPersonal((prev) => ({ ...prev, [id]: value }));
    };

    const handleEducationChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        setEducation((prev) => ({ ...prev, [id]: value }));
        console.log(education);
    };

    const handleEducationSubmit = () => {
        setEducationList((prev) => ({ ...prev, [uuid()]: education }));
        setEducation(() => ({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
        }));
        console.log(educationList);
    };

    return (
        <div className="app">
            <div className="fields">
                <Personal change={handlePersonalChange} />
                <Education
                    change={handleEducationChange}
                    education={educationList}
                    submit={handleEducationSubmit}
                />
            </div>
            <div className="curriculum-vitae"></div>
        </div>
    );
}

export default App;
