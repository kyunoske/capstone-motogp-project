import React from 'react';
import "./LandingPage.css";
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import {EffectCoverflow, Pagination, Navigation} from "swiper";

type LandingPageProps = {}

function LandingPage(props: LandingPageProps) {

    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate(`/homepage`)
    }
    const apriliaDemo = () => {
        document.body.setAttribute("data-theme", "light-theme")
    }

    const apriliaConfirm = () => {
        document.body.setAttribute("data-theme", "light-theme")
        navigateToHomePage()
    }

    const ducatiDemo = () => {
        document.body.setAttribute("data-theme", "ducati-theme")
    }

    const ducatiConfirm = () => {
        document.body.setAttribute("data-theme", "ducati-theme")
        navigateToHomePage()
    }

    const gresiniDemo = () => {
        document.body.setAttribute("data-theme", "gresini-theme")
    }

    const gresiniConfirm = () => {
        document.body.setAttribute("data-theme", "gresini-theme")
        navigateToHomePage()
    }

    const lcrDemo = () => {
        document.body.setAttribute("data-theme", "lcr-theme")
    }

    const lcrConfirm = () => {
        document.body.setAttribute("data-theme", "lcr-theme")
        navigateToHomePage()
    }

    const monsterYamahaDemo = () => {
        document.body.setAttribute("data-theme", "yamaha-theme")
    }

    const monsterYamahaConfirm = () => {
        document.body.setAttribute("data-theme", "yamaha-theme")
        navigateToHomePage()
    }

    const vR46Demo = () => {
        document.body.setAttribute("data-theme", "vr46-theme")
    }

    const vR46Confirm = () => {
        document.body.setAttribute("data-theme", "vr46-theme")
        navigateToHomePage()
    }

    const pramacDemo = () => {
        document.body.setAttribute("data-theme", "pramac-theme")
    }

    const pramacConfirm = () => {
        document.body.setAttribute("data-theme", "pramac-theme")
        navigateToHomePage()
    }

    const ktmDemo = () => {
        document.body.setAttribute("data-theme", "ktm-theme")
    }

    const ktmConfirm = () => {
        document.body.setAttribute("data-theme", "ktm-theme")
        navigateToHomePage()
    }

    const repsolDemo = () => {
        document.body.setAttribute("data-theme", "repsol-theme")
    }

    const repsolConfirm = () => {
        document.body.setAttribute("data-theme", "repsol-theme")
        navigateToHomePage()
    }

    const tech3Demo = () => {
        document.body.setAttribute("data-theme", "tech3-theme")
    }

    const tech3Confirm = () => {
        document.body.setAttribute("data-theme", "tech3-theme")
        navigateToHomePage()
    }

    const suzukiDemo = () => {
        document.body.setAttribute("data-theme", "suzuki-theme")
    }

    const suzukiConfirm = () => {
        document.body.setAttribute("data-theme", "suzuki-theme")
        navigateToHomePage()
    }

    const withuDemo = () => {
        document.body.setAttribute("data-theme", "withu-theme")
    }

    const withuConfirm = () => {
        document.body.setAttribute("data-theme", "withu-theme")
        navigateToHomePage()
    }

    return (
        <div className="content-container">
            <div className="justify-content-center">
                <div className="theme-section-headings">
                    <div className="theme-section-title upside-down">MotoGP World</div>
                    <p className="theme-section-desc">
                        The place for MotoGP enthusiasts
                    </p>
                    <div className="justify-content-center theme-buttons">
                        <h4 className="select-theme-heading">Select a Theme from below</h4>
                        <p className="select-theme-heading">Click on demo to see a theme you like</p>
                        <p className="select-theme-heading">Click on Confirm to choose this theme and continue</p>
                        <div className="select-theme-div">
                            <Swiper
                                navigation
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={4}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{clickable: true}}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <Card className="aprilia-card-container">
                                        <Card.Img variant="top" className="card-logo"
                                                  src={process.env.PUBLIC_URL + "/images/aprilia-logo-removebg.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Aprilia"
                                                    variant="outline-warning"
                                                    onClick={apriliaDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Aprilia"
                                                    variant="outline-warning"
                                                    onClick={apriliaConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="ducati-card-container">
                                        <Card.Img variant="top" className="card-logo-ducati"
                                                  src={process.env.PUBLIC_URL + "/images/ducati_motogp.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Ducati-Lenovo"
                                                    variant="outline-warning"
                                                    onClick={ducatiDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Ducati-Lenovo"
                                                    variant="outline-warning"
                                                    onClick={ducatiConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="gresini-card-container">
                                        <Card.Img variant="top" className="card-logo-gresini"
                                                  src={process.env.PUBLIC_URL + "/images/logo_gresini.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Gresini"
                                                    variant="outline-warning"
                                                    onClick={gresiniDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Gresini"
                                                    variant="outline-warning"
                                                    onClick={gresiniConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="lcr-card-container">
                                        <Card.Img variant="top" className="card-logo-aprilia"
                                                  src={process.env.PUBLIC_URL + "/images/lcr_honda.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="LCR"
                                                    variant="outline-warning"
                                                    onClick={lcrDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="LCR"
                                                    variant="outline-warning"
                                                    onClick={lcrConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="monster-yamaha-card-container">
                                        <Card.Img variant="top" className="card-logo-monster-yamaha"
                                                  src={process.env.PUBLIC_URL + "/images/monster-yamaha-logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Monster-Yamaha"
                                                    variant="outline-warning"
                                                    onClick={monsterYamahaDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Monster-Yamaha"
                                                    variant="outline-warning"
                                                    onClick={monsterYamahaConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="vr46-card-container">
                                        <Card.Img variant="top" className="card-logo-vr46"
                                                  src={process.env.PUBLIC_URL + "/images/Mooney-VR46-2022-Logo.jpg"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="VR46"
                                                    variant="outline-warning"
                                                    onClick={vR46Demo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="VR46"
                                                    variant="outline-warning"
                                                    onClick={vR46Confirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="ktm-card-container">
                                        <Card.Img variant="top" className="card-logo-ktm"
                                                  src={process.env.PUBLIC_URL + "/images/red_bull_ktm-logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="KTM"
                                                    variant="outline-warning"
                                                    onClick={ktmDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="KTM"
                                                    variant="outline-warning"
                                                    onClick={ktmConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="pramac-card-container">
                                        <Card.Img variant="top" className="card-logo-pramac"
                                                  src={process.env.PUBLIC_URL + "/images/pramac_racing_logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Pramac"
                                                    variant="outline-warning"
                                                    onClick={pramacDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Pramac"
                                                    variant="outline-warning"
                                                    onClick={pramacConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="repsol-card-container">
                                        <Card.Img variant="top" className="card-logo-repsol"
                                                  src={process.env.PUBLIC_URL + "/images/Repsol-Honda-Team-logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Repsol"
                                                    variant="outline-warning"
                                                    onClick={repsolDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Repsol"
                                                    variant="outline-warning"
                                                    onClick={repsolConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="tech3-card-container">
                                        <Card.Img variant="top" className="card-logo-ktm"
                                                  src={process.env.PUBLIC_URL + "/images/tech3-logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Tech3"
                                                    variant="outline-warning"
                                                    onClick={tech3Demo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Tech3"
                                                    variant="outline-warning"
                                                    onClick={tech3Confirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="suzuki-card-container">
                                        <Card.Img variant="top" className="card-logo-suzuki"
                                                  src={process.env.PUBLIC_URL + "/images/team_suzuki_ecstar_logo.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="Suzuki"
                                                    variant="outline-warning"
                                                    onClick={suzukiDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="Suzuki"
                                                    variant="outline-warning"
                                                    onClick={suzukiConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="withu-card-container">
                                        <Card.Img variant="top" className="card-logo-withu"
                                                  src={process.env.PUBLIC_URL + "/images/logo_withu.png"}/>
                                        <Card.Body className="card-body">
                                            <div className="card-button-container">
                                                <Button
                                                    id="WithU"
                                                    variant="outline-warning"
                                                    onClick={withuDemo}
                                                >
                                                    Demo
                                                </Button>
                                                <Button
                                                    id="WithU"
                                                    variant="outline-warning"
                                                    onClick={withuConfirm}
                                                >
                                                    Confirm
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;