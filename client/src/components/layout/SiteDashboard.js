// Libraries
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// CSS
import '../../css/SiteDashboard.css';

// Components
import Accordion from '../general/Accordion';

// Other
import { dummy_topic_data } from '../../other/dummy_data';

export default function SiteDashboard({ user, sites }) {
  const [site, setSite] = useState({});

  const { siteid } = useParams();

  useEffect(() => {
    let current_site;
    sites.forEach((site) => {
      if (site.id.toString() === siteid) {
        current_site = site;
      }
    });

    setSite(current_site);
  }, [siteid, sites]);

  function saveHandler() {
    console.log('Save and update users data.');
  }

  return (
    <div className='site-dashboard'>
      {site ? (
        <>
          <div className='site-dashboard-header'>
            <svg
              className='site-dashboard-circle'
              width='66'
              height='65'
              viewBox='0 0 66 65'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='32.5679' cy='32.5' r='32.5' fill={site.colour} />
            </svg>
            <p>For {site.intendedAudience}</p>
            <div className='site-dashboard-header-content'>
              <h2>{site.title}</h2>
              <h3>
                - {site.type} - {site.progress}-{' '}
              </h3>
              <button onClick={saveHandler}>
                <span
                  className='iconify save-progress'
                  data-inline='false'
                  data-icon='ic:outline-save-alt'
                  style={{ color: '#828797', fontSize: '29px' }}
                ></span>
              </button>
            </div>
            <div className='site-dashboard-alt'>
              <h3>Portfolio Site - 27% - </h3>
              <button onClick={saveHandler}>
                <span
                  className='iconify save-progress'
                  data-inline='false'
                  data-icon='ic:outline-save-alt'
                  style={{ color: '#828797', fontSize: '29px' }}
                ></span>
              </button>
            </div>
          </div>
          <div className='site-dashboard-topics-grid-container'>
            {dummy_topic_data.map((topic, index) => {
              return (
                <div className='site-dashboard-topics-container' key={index}>
                  <h2>{topic.name}</h2>
                  {topic.data.map((accordion_data, index) => {
                    return (
                      <Accordion
                        priority={accordion_data.priority}
                        title={accordion_data.heading}
                        key={index}
                        checked={accordion_data.checked}
                      >
                        {accordion_data.resources.map((resource) => {
                          return (
                            <div className='accordion-resource' key={resource.heading}>
                              <img src={resource.img} alt='Resource website logo' />
                              <a href={resource.href} target='_blank' rel='noreferrer'>
                                {resource.heading}
                              </a>
                            </div>
                          );
                        })}
                      </Accordion>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
