import React from 'react'
import { skill } from '../data';
import { CheckBadgeIcon } from "@heroicons/react/24/solid";


function Skill() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="row skills-content">
                    <div className="section-title" data-aos="fade-up">
                        <h1>My Skills</h1>
                    </div>
                    <div className="my-skills">
                        {skill.map((skills) =>
                            <div className="progress" data-aos="zoom-in" key={skills}>
                                <CheckBadgeIcon className='tick' />
                                <span className="skill-text">{skills}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;