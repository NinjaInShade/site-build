// Libraries
import React from "react";

// CSS
import "../../css/Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <h1>
          <span>
            Brief
            <hr />
          </span>{" "}
          overview of what site builder helps with
        </h1>
        <div className="features-grid">
          <div className="features-card">
            <div>
              <span className="iconify" data-inline="false" data-icon="ic:baseline-content-copy"></span>
            </div>
            <div>
              <h2>Content & Planning</h2>
              <p>To maximize the user experience, site builder will suggest how to make the content of your site most appropriate to the user.</p>
            </div>
          </div>
          <div className="features-card">
            <div>
              <span className="iconify" data-inline="false" data-icon="clarity:design-solid"></span>
            </div>
            <div>
              <h2>Design - UI/UX</h2>
              <p>We will suggest how to effectively design a clean, user friendly and good looking site catered to the type of site you’re making.</p>
            </div>
          </div>
          <div className="features-card">
            <div>
              <span className="iconify" data-inline="false" data-icon="ic:sharp-security"></span>
            </div>
            <div>
              <h2>Security</h2>
              <p>You’ll be provided with top solutions for a highly secure site with clear explanations, leaving your users’ stress free.</p>
            </div>
          </div>
          <div className="features-card">
            <div>
              <span className="iconify" data-inline="false" data-icon="ls:web"></span>
            </div>
            <div>
              <h2>SEO</h2>
              <p>Site builder shows you the best ways to highly rank your website in search engines so you can easily be found.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
