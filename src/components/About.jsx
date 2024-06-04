// src/components/About.jsx
import React from 'react';
import { aboutSections } from '../constants';

import Clients from './Clients';

const About = () => {
    return (
        <>
            <div className="py-15">
                {aboutSections.map((section, index) => (
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <img src={section.img} alt={section.title} className="w-full md:w-1/2 object-cover" />
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                            <p>{section.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Clients />
        </>
    );
};

export default About;
