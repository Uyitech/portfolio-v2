import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Service from './components/Service';
import Portfolio from "./components/Portfolio"
import Contact from './components/Contact';
import Footer from './components/Footer';
import BTT from "./components/BTT"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const styles = {
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const getTheme = () => {
        return JSON.parse(localStorage.getItem("theme")) || false
    }

    const [theme, setTheme] = useState(getTheme())

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    useEffect(() => {
        if (theme === true) {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "#040404";
        }
    }, [theme])


    return (
        <div className={theme ? "light" : ""} >
            {
                loading ?
                    <ClimbingBoxLoader
                        size={24}
                        style={styles}
                        color="#344ee5"
                        loading={loading}
                    />
                    :
                    <>
                        <Navbar
                            toggle={() => setTheme(!theme)}
                            checked={theme ? "{true}" : ""}
                        />
                        <Home />
                        <About />
                        <Skill />
                        <Service />
                        <Portfolio />
                        <Contact />
                        <Footer />
                        <BTT />
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme={theme ? "light" : "dark"}
                        />
                    </>
            }
        </div >
    );
}

export default App;
