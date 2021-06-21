// Libraries
import React from 'react';

// CSS
import '../../css/Heading.css';

// Images
import TempVideoPlayer from '../../resources/template_video_player.svg';

// Components
import Button from '../general/Button';

export default function Heading() {
  function onClickHandler() {
    console.log('clicked');
  }

  return (
    <section className='heading-section'>
      <div>
        <h1>
          <span>
            Power up
            <hr />
          </span>{' '}
          your web dev workflow!
        </h1>
        <p>
          A <span>free</span> tool to help and guide you through developing a website. Site builder gives you
          suggestions so your site is left polished, categorizing items by priority and linking resources for that item.
        </p>
        <a href='#demo'>
          <Button rounded larger onClick={onClickHandler}>
            Show me a demo
          </Button>
        </a>
      </div>
      <div>
        <img src={TempVideoPlayer} alt='Video player' />
      </div>
    </section>
  );
}
