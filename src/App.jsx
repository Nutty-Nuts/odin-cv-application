import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./styles/App.css";

import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";

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

    const [experienceList, setExperienceList] = useState({
        [uuid()]: {
            company: "XYZ Company",
            position: "Junior Developer",
            startDate: "2030",
            endDate: "2031",
            description:
                "Performed basic front-end development as a junior developer",
        },
    });

    const [experience, setExperience] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
    });

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
    };

    const handleExperienceChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        setExperience((prev) => ({ ...prev, [id]: value }));
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

    const handleExperienceSubmit = () => {
        setExperienceList((prev) => ({ ...prev, [uuid()]: experience }));
        setExperience(() => ({
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
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
                <Experience
                    change={handleExperienceChange}
                    experience={experienceList}
                    submit={handleExperienceSubmit}
                />
            </div>
            <div className="curriculum-vitae"></div>
        </div>
    );
}

export default App;
