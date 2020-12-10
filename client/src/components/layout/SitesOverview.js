// Libraries
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../../css/SitesOverview.css";

// Components
import SiteCard from "../general/SiteCard";

export default function SitesOverview({ sites, user }) {
  return (
    <div className="sites-overview">
      <h3>{user.email}</h3>
      <h2>{user.username}</h2>
      <div className="sites-overview-cards-container">
        {sites.map((site) => {
          return (
            <Link to={`/controlpanel/${user.id}/site/${site.id}`} key={site.id}>
              <SiteCard site={site} key={site.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
