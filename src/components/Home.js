import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { home } from '../data';

function Home() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-end Developer", "UI/UX Designer"],
            loop: true,
            typeSpeed: 55,
            backSpeed: 50,
            cursorChar: "|",
            showCursor: true,
            smartBackspace: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        AOS.init();

        AOS.init({
            // Settings 
            offset: 170,
            delay: 100,
            duration: 1600,
            easing: 'ease',
            once: true,
            mirror: false,
        });
    }, [])

    useEffect(() => {
        const li = document.querySelectorAll(".nav-item")
        const sec = document.querySelectorAll("section")

        function activeMenu() {
            let len = sec.length;
            while (--len && window.scrollY + 90 < sec[len].offsetTop) { }
            li.forEach(ltx => ltx.classList.remove("active"));
            li[len].classList.add("active");
        }
        activeMenu();
        window.addEventListener("scroll", activeMenu);
    }, [])

    return (
        <section id="home" className="hero-content display-table  align-items-center">
            <div className="table-cell">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                            <h3 data-aos="fade-down">Hello I'm</h3>
                            <h1 className="uyi " data-aos="fade-down">Evans Ewansiha</h1>
                            <h2 className="full " data-aos="fade-down">I'm A <span className="color" ref={el}></span></h2>
                            <p data-aos="fade-up">Front-end developer focused on creating Web &
                                Mobile applications. I really like different projects that solve<br /> real problems.
                            </p>
                            <div className="social" data-aos="fade-up">
                                {home.map((homes) =>
                                    <a href={homes.link} key={homes.id}>
                                        <i className={homes.icon}></i>
                                    </a>
                                )}
                            </div>
                            <div className="button-container" data-aos="fade-up">
                                <a href="https://wa.link/yriu37">
                                    <button className="button-1">
                                        <span>Download CV</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="img/Profile-Picture.jpg" className="img-fluid profile" alt="" draggable="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home;