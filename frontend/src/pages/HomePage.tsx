import React from 'react';
import "./HomePage.css";
import {Container, Row} from "react-bootstrap";

type HomePageProps = {

}

function HomePage(props: HomePageProps) {
    return (
        <Container>
            <Row className="fields hero-section-desc">
                <h2>Riders</h2>
                <h2>Teams</h2>
                <h2>Tracks</h2>
                <h2>Forum</h2>
            </Row>
        </Container>
    );
}

export default HomePage;