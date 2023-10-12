import "../styles/CurriculumVitae.css";
import { IoMail, IoCall, IoHomeSharp } from "react-icons/io5";

export default function CurriculumVitae({ personal, education, experience }) {
    return (
        <div className="curriculum-vitae-page">
            <div className="header">
                <h1>{personal.name}</h1>
                <div className="contact-information">
                    <p>
                        <IoMail className="icons" />
                        {personal.email}
                    </p>
                    <p>
                        <IoCall className="icons" />
                        {personal.contact}
                    </p>
                    <p>
                        <IoHomeSharp className="icons" />
                        {personal.address}
                    </p>
                </div>
            </div>
            <div className="content">
                <h3>Education</h3>
                {RenderEducation(education)}
                <h3>Experience</h3>
                {RenderExperience(experience)}
            </div>
        </div>
    );
}

function RenderEducation(education) {
    const entries = Object.entries(education).map((entry) => {
        const [key, value] = entry;
        return (
            <div className="entry" key={key} value={value} id={key}>
                <div className="entry-header">
                    <div>{value.school}</div>
                    <div className="entry-date">
                        {value.startDate}-{value.endDate}
                    </div>
                </div>
                <div>{value.degree}</div>
                <br />
            </div>
        );
    });

    return <div>{entries}</div>;
}

function RenderExperience(experience) {
    const entries = Object.entries(experience).map((entry) => {
        const [key, value] = entry;
        return (
            <div className="entry" key={key} value={value} id={key}>
                <div className="entry-header">
                    <div>{value.position}</div>
                    <div className="entry-date">
                        {value.startDate}-{value.endDate}
                    </div>
                </div>
                <div>{value.company}</div>
                <p>{value.description}</p>
                <br />
            </div>
        );
    });

    return <div>{entries}</div>;
}
