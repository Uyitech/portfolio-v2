import React from 'react'
import { service } from '../data';

function Service() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h1>My Services</h1>
                </div>

                <div className="row" id="row1">
                    {service.map((services) =>
                        <div className={services.divClass} key={services.id} data-aos="zoom-in" data-aos-delay={services.aosDelay}>
                            <div className="icon-box">
                                <i className={services.icon}></i>
                                <h4 className="text-tit">{services.title}</h4>
                                <p>{services.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Service;