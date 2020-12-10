// Libraries
import React from "react";

// CSS
import "../../css/SiteCard.css";

export default function SiteCard({ site }) {
  const site_colour = site.colour || "#00CEAF";

  return (
    <div className="site-card">
      <div className="site-card-top">
        <svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32.5679" cy="32.5" r="32.5" fill={site_colour} />
        </svg>
        <p>{site.progress}</p>
      </div>
      <div className="site-card-bottom">
        <p>For {site.intendedAudience}</p>
        <h2>{site.title}</h2>
        <h3>{site.type}</h3>
      </div>
    </div>
  );
}
