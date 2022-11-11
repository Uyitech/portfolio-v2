import { useEffect } from 'react'
import mixitup from "mixitup"
import { portfolio } from '../data';

function Portfolio() {

    useEffect(() => {
        mixitup('.portfolio-container', {
            selectors: {
                target: '.portfolio-item'
            },
            animation: {
                duration: 300
            }
        });
    }, [])

    useEffect(() => {
        const linkWork = document.querySelectorAll('.filter')

        function activeWork() {
            linkWork.forEach(l => l.classList.remove('active-work'))
            this.classList.add('active-work')
        }
        linkWork.forEach(l => l.addEventListener("click", activeWork))
    }, [])

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h1>Portfolio</h1>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li className="filter active-work" data-filter="all">All</li>
                            <li className="filter" data-filter=".filter-design">Design</li>
                            <li className="filter" data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="zoom-in">
                    {portfolio.map((portfolios) =>
                        <div className={portfolios.divClass} key={portfolios.id}>
                            <div className="portfolio-wrap">
                                <img src={portfolios.image} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>{portfolios.title}</h4>
                                    <p>{portfolios.subTitle}</p>
                                    <div className="portfolio-links">
                                        <a href={portfolios.portfolioLink.imageLink}
                                            data-gallery="portfolioGallery"
                                            className="portfolio-lightbox">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                        <a href={portfolios.portfolioLink.website}
                                            className="portfolio-details-lightbox">
                                            <i className="bx bx-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;