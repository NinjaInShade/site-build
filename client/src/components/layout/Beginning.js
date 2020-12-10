// Libraries
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CSS
import "../../css/Beginning.css";

// Components
import Button from "../general/Button";
import InputBox from "../general/InputBox";
import Dropdown from "../general/Dropdown";

// Other
import { min_length } from "../../other/Algorithms";
import { types_of_site_options, intended_audience_options, age_group_options } from "../../other/BeginningQuestions";

export default function Beginning({ setSignupData }) {
  const history = useHistory();

  const [siteName, setSiteName] = useState("");
  const [typeOfSite, setTypeOfSite] = useState("");
  const [intendedAudience, setIntendedAudience] = useState("");

  const [ageGroup, setAgeGroup] = useState("");

  const [errors, setErrors] = useState({
    sitename: [],
    typeofsite: [],
    intendedaudience: [],
    agegroup: [],
  });

  function onClickHandler() {
    let errors = false;
    let temp_errors = { sitename: [], typeofsite: [], intendedaudience: [], agegroup: [] };

    if (!min_length(siteName, 1)) {
      temp_errors.sitename.push("Don't leave empty.");
    }

    if (!min_length(typeOfSite, 1)) {
      temp_errors.typeofsite.push("Don't leave empty");
    }

    if (!min_length(intendedAudience, 1)) {
      temp_errors.intendedaudience.push("Don't leave empty");
    } else {
      if (intendedAudience === "AgeGroup" && !min_length(ageGroup, 1)) {
        temp_errors.agegroup.push("Specify an age group");
      }
    }

    setErrors(temp_errors);

    Object.values(temp_errors).forEach((error) => {
      if (error.length !== 0) {
        errors = true;
      }
    });

    if (!errors) {
      setSignupData({
        sitename: siteName,
        typeofsite: typeOfSite,
        intendedaudience: intendedAudience,
        agegroup: ageGroup,
      });

      history.push(`/authenticate`);
    }
  }

  return (
    <section className="beginning-section" id="beginning">
      <p>Beginning</p>
      <div className="beginning-section-container">
        <div>
          <div className="beginning-section-getting-started">
            <h1>Getting started</h1>
            <p>To first start answer a few introductory questions so site builder can gain some insight of what you want your website to achieve. </p>
          </div>
          <div className="beginning-section-save">
            <h2>How to save</h2>
            <p>After the initial setup process, you can save any suggestions that you integrated into your site so you can keep track of progress.</p>
          </div>
          <Button onClick={onClickHandler} larger rounded className="beginning-btn-one">
            Kickstart the proccess
          </Button>
        </div>
        <div>
          <InputBox
            label="Brand/Site name?"
            placeholder="Enter your brand/site name..."
            value={siteName}
            onChange={setSiteName}
            errors={errors.sitename}
            maxLength="25"
          />
          <Dropdown
            label="Type of website?"
            heading="Choose type"
            callback={setTypeOfSite}
            options={types_of_site_options}
            AutoClose
            errors={errors.typeofsite}
          />
          <Dropdown
            label="Intended Audience?"
            heading="Choose intended audience"
            callback={setIntendedAudience}
            options={intended_audience_options}
            AutoClose
            errors={errors.intendedaudience}
          />
          <Dropdown
            style={intendedAudience === "AgeGroup" ? {} : { display: "none" }}
            label="Age group"
            heading="Pick the age group"
            callback={setAgeGroup}
            options={age_group_options}
            AutoClose
            errors={errors.agegroup}
          />
          <Button onClick={onClickHandler} larger rounded className="beginning-btn-two">
            Kickstart the proccess
          </Button>
        </div>
      </div>
    </section>
  );
}
