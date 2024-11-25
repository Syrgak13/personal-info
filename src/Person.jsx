import { useState } from 'react';

const Person = () => {
    const [message, setMessage] = useState("");
    const [position, setPosition] = useState("Junior Developer");

    const person = {
        name: "Syrgak Tabyldiev",
        company: "Ala-Too University",
        experience: "2 years",
        location: "Bishkek, Kyrgyzstan",
        hobby: "Graphic Design"
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Position: {position}</p>
            <p>Company: {person.company}</p>
            <p>Experience: {person.experience}</p>
            <p>Location: {person.location}</p>
            <p>Hobby: {person.hobby}</p>
        </div>
    );
};

export default Person;
