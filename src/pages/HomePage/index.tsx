import React from "react";
import "./styles.scss";
import { Container } from "../../shared/components";

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="home-page">
        <h1>Welcome to the Corsearch Assignment</h1>
        <p>Navigate to the User Dashboard using the link in the header.</p>
        <div className="cta-container">
          <a href="/users" className="cta-button">
            Go to User Dashboard
          </a>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
