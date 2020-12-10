// Libraries
import React from "react";
import { Redirect } from "react-router-dom";

// CSS
import "../css/SiteBuilder.css";

// Components
import Navbar from "../components/layout/Navbar";
import Heading from "../components/layout/Heading";
import Seperator from "../components/layout/Seperator";
import Demo from "../components/layout/Demo";
import Beginning from "../components/layout/Beginning";
import Features from "../components/layout/Features";
import Footer from "../components/layout/Footer";

// Context
import { useAuth } from "../other/AuthContext";

export default function SiteBuilder({ setSignupData }) {
  const { userData, authToken } = useAuth();

  if (authToken.token) {
    return <Redirect to={`/controlpanel/${userData.id}`} />;
  }

  return (
    <>
      <Navbar />
      <Heading />
      <Seperator />
      <Demo />
      <Beginning setSignupData={setSignupData} />
      <Features />
      <Footer />
    </>
  );
}
