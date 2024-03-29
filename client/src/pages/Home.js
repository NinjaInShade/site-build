// Libraries
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import FeatureCard from '../components/general/FeatureCard';
import Input from '../components/general/Input';
import Dropdown from '../components/general/Dropdown';
import Illustration from '../resources/header illustration.png';
import Hexagon from '../resources/hexagon overlay.svg';
import { min_length } from '../other/Algorithms';
import { types_of_site_options, intended_audience_options } from '../other/BeginningQuestions';
import { useAuth } from '../other/AuthContext';
import { Redirect, useHistory } from 'react-router-dom';

import '../css/Home-header.css';
import '../css/Home-features.css';
import '../css/Home-start.css';
import '../css/Home-footer.css';
import '../css/Buttons.css';

export default function Home({ setSignupData }) {
  const history = useHistory();
  const { currentUser } = useAuth();

  const [formStep, setFormStep] = useState(1);

  const [siteName, setSiteName] = useState('');
  const [typeOfSite, setTypeOfSite] = useState('');
  const [intendedAudience, setIntendedAudience] = useState('');

  const [errors, setErrors] = useState({
    sitename: [],
    typeofsite: [],
    intendedaudience: [],
  });

  function decreaseStep(e) {
    e.preventDefault();

    setFormStep((prevState) => prevState - 1);
  }

  function formHandler(e, type) {
    e.preventDefault();

    let errors = false;
    let temp_errors = { sitename: [], typeofsite: [], intendedaudience: [] };

    if (formStep === 1) {
      if (!min_length(siteName, 1)) {
        temp_errors.sitename.push("Don't leave empty.");
        return setErrors(temp_errors);
      }

      setFormStep((prevState) => prevState + 1);
    }

    if (formStep === 2) {
      if (!min_length(typeOfSite, 1)) {
        temp_errors.typeofsite.push("Don't leave empty");
        return setErrors(temp_errors);
      }

      setFormStep((prevState) => prevState + 1);
    }

    if (formStep === 3) {
      if (!min_length(intendedAudience, 1)) {
        temp_errors.intendedaudience.push("Don't leave empty");
        return setErrors(temp_errors);
      }
    }

    // Sets errors to default(empty) to clear error messages if there was any
    setErrors(temp_errors);

    Object.values(temp_errors).forEach((error) => {
      if (error.length !== 0) {
        errors = true;
      }
    });

    if (!errors && formStep === 3) {
      setSignupData({
        sitename: siteName,
        typeofsite: typeOfSite,
        intendedaudience: intendedAudience,
      });

      history.push(`/authenticate/signup`);
    }
  }

  return currentUser ? (
    <Redirect to={`/dashboard/${currentUser.uid}`} />
  ) : (
    <>
      <Navbar />

      <header className='home-header'>
        <div className='home-header-container'>
          <div>
            <h1 className='home-header-title'>
              <span>Power up</span> your web dev workflow!
            </h1>
            <p className='home-header-lead'>
              A <span>free</span> tool to help and guide you through developing a website. Site builder gives you
              suggestions so your site is left polished, categorizing items by priority and linking resources for that
              item.
            </p>
            <a href='/#start' className='btn btn-primary'>
              Get started <span>- it's free</span>
            </a>
          </div>
          <img src={Illustration} alt='Illustration of phone with checklists' className='home-header-img' />
        </div>
      </header>

      <section className='home-features'>
        <div className='home-features-container'>
          <h2 className='home-features-title'>
            <span>Brief overview</span> of what SiteBuild helps with
          </h2>
          <div className='home-features-list'>
            <FeatureCard
              title='Planning'
              description='To maximize user experience, SiteBuild will suggest how to make plan appropriately and ensure rich content.'
              icon={
                <svg width='53' height='61' viewBox='0 0 53 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M51.4031 14.0414L28.5463 0.45611L28.5133 0.438318L28.7113 0.323942H28.2899C27.813 0.0935321 27.2873 -0.016941 26.7581 0.00210422C26.229 0.0211494 25.7125 0.169138 25.2535 0.433234L23.4788 1.45753L1.63499 14.049C1.13828 14.3352 0.725645 14.7474 0.438622 15.244C0.151599 15.7406 0.000315513 16.3042 0 16.8779V44.1197C0 45.2888 0.622006 46.3665 1.63499 46.9486L25.256 60.5643C26.2766 61.154 27.5358 61.1438 28.5488 60.5415L51.4031 46.9562C52.3932 46.369 53 45.3015 53 44.1476V16.8474C53 15.696 52.3932 14.6285 51.4031 14.0414ZM2.44994 15.4622L26.1014 1.82862C26.35 1.69283 26.6296 1.62424 26.9128 1.62958C27.1959 1.63493 27.4728 1.71404 27.7161 1.85912L50.5704 15.4444C50.7828 15.5737 50.9626 15.7503 51.0959 15.9604L39.5621 22.4544L28.1426 15.5918C27.7726 15.3692 27.3503 15.2486 26.9186 15.2424C26.487 15.2361 26.0613 15.3444 25.685 15.5562L13.3744 22.4899L1.84063 16.0875C1.98341 15.8276 2.19401 15.6115 2.44994 15.4622V15.4622ZM38.3232 36.5404L26.9087 30.2065V16.8805C27.0475 16.8843 27.183 16.9237 27.3023 16.9948L38.3232 23.6159V36.5404V36.5404ZM26.2309 31.6959L38.1429 38.3068L26.8935 45.0652L15.0932 38.4187C14.9731 38.3504 14.8725 38.2524 14.8012 38.134L26.2309 31.6959V31.6959ZM26.0684 59.1512L2.4474 45.5354C2.19895 45.3921 1.99258 45.1858 1.84907 44.9372C1.70556 44.6887 1.62997 44.4067 1.62991 44.1197V17.8387L13.0444 24.1725V37.7045C13.0444 38.589 13.5217 39.4048 14.2909 39.8395L26.5051 46.7173L26.9037 46.9409V59.3621C26.6113 59.3687 26.3227 59.2958 26.0684 59.1512V59.1512Z'
                    fill='black'
                  />
                </svg>
              }
            />
            <FeatureCard
              odd={true}
              title='UI/UX'
              description='We will suggest how to effectively design a clean, user friendly and good looking site catered to the type of site you’re making.'
              icon={
                <svg width='61' height='61' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M30.5 0C13.6665 0 0 13.6665 0 30.5C0 47.3335 13.6665 61 30.5 61C47.3335 61 61 47.3335 61 30.5C61 13.6665 47.3335 0 30.5 0ZM30.5 1.90625C37.7971 1.90625 44.4334 4.65633 49.4837 9.15H11.5138C16.7354 4.48118 23.4955 1.90204 30.5 1.90625ZM12.2356 11.0563H48.7644L30.5 47.5876L12.2356 11.0563ZM9.15 11.5138V49.4862C4.48118 44.2646 1.90204 37.5045 1.90625 30.5C1.90625 23.2054 4.65633 16.5691 9.15 11.5188V11.5138ZM51.85 11.5138C56.5188 16.7354 59.098 23.4955 59.0938 30.5C59.0938 37.7971 56.3437 44.4334 51.85 49.4837V11.5138ZM11.0563 12.9625L29.5469 49.9438H11.0563V12.9625ZM49.9438 12.9625V49.9438H31.4531L49.9463 12.9625H49.9438ZM11.5214 51.85H49.4837C44.2627 56.5182 37.5037 59.0973 30.5 59.0938C23.4972 59.0967 16.7392 56.5177 11.5188 51.85H11.5214Z'
                    fill='black'
                  />
                </svg>
              }
            />
            <FeatureCard
              title='Security'
              description='You’ll be provided with top solutions for a secure site with clean explanations, leaving your users’ stress free.'
              icon={
                <svg width='45' height='60' viewBox='0 0 45 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M22.5 0L0 11.1934V37.5309C8.89208e-08 43.4901 2.37053 49.2052 6.5901 53.419C10.8097 57.6327 16.5326 60 22.5 60C28.4674 60 34.1903 57.6327 38.4099 53.419C42.6295 49.2052 45 43.4901 45 37.5309V11.1934L22.5 0ZM35.3063 51.1434L22.5 44.7734V48.9452L31.9425 53.6431C29.0978 55.2977 25.8671 56.1754 22.5751 56.188C19.2831 56.2005 16.0458 55.3474 13.1885 53.7145C10.3313 52.0816 7.95487 49.7263 6.29805 46.8855C4.64124 44.0447 3.76244 40.8184 3.75 37.5309V13.5002L22.5 4.17176L41.25 13.5002V20.5218L22.5 11.1934V15.3651L41.25 24.6935V31.7151L22.5 22.3867V26.5585L41.25 35.8869V37.5309C41.2509 39.2318 41.0174 40.9247 40.5562 42.5621L22.5 33.5801V37.7518L39.1781 46.0486C38.1889 47.9555 36.8792 49.6788 35.3063 51.1434Z'
                    fill='black'
                  />
                </svg>
              }
            />
            <FeatureCard
              odd={true}
              title='SEO'
              description='You’ll be provided with top solutions for a secure site with clean explanations, leaving your users’ stress free.'
              icon={
                <svg width='36' height='59' viewBox='0 0 36 59' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M35.6223 14.4447C35.3829 13.977 35.0011 13.5966 34.5315 13.3581L12.4337 0.419817C11.6217 -0.135772 10.3532 -0.135772 9.46476 0.395233L1.09109 5.27261C0.968007 5.36788 0.84942 5.46879 0.735711 5.57499C0.28819 6.05776 0.0351223 6.68798 0.0249489 7.34501L0.0496275 23.494L0.000269099 24.0225L0.153281 24.3249C0.258561 24.5383 0.426365 24.7149 0.634525 24.8313C0.836746 24.965 1.07311 25.0383 1.31577 25.0427C1.55844 25.047 1.7973 24.9822 2.00422 24.8559L10.2496 20.158C10.4233 20.0476 10.5707 19.9008 10.6814 19.7278L10.8838 19.3221V11.4136L16.4391 14.6734L25.1657 19.7794C25.3441 19.8862 25.4853 20.045 25.5704 20.2342C25.6707 20.4023 25.7235 20.5942 25.7234 20.7898V38.1261C25.7204 38.3485 25.6592 38.5663 25.5457 38.7579C25.4446 38.9349 25.3434 39.0603 25.1657 39.1365L14.7387 45.2529L10.8567 47.5269V39.5913L15.6765 36.7101L18.2654 35.1687L18.7219 34.7385L18.7738 34.6131C18.8725 34.4257 18.9249 34.2175 18.9268 34.0059V24.5805C18.9247 24.3271 18.8455 24.0803 18.6997 23.8725L18.5467 23.5702L18.1913 23.3932C17.9618 23.2924 17.7594 23.2924 17.5818 23.2924L17.1499 23.317L1.44647 32.8185C0.980244 33.0851 0.601409 33.4804 0.35565 33.9567C0.115552 34.4174 -0.00652848 34.93 0.000269099 35.4489V51.5733C0.000269099 52.2051 0.254465 52.8369 0.812216 53.4171C1.01459 53.5695 1.19228 53.6949 1.39465 53.8202L9.63998 58.5968C10.099 58.8746 10.5803 59 11.1133 59C11.6464 59 12.1548 58.8746 12.5842 58.5968L34.5043 45.7839C34.9856 45.5307 35.3928 45.1275 35.5951 44.7219C35.874 44.2671 35.9999 43.7361 35.9999 43.2051V15.937C36.0046 15.4155 35.8746 14.9016 35.6223 14.4447ZM9.0847 18.742L1.829 22.9113V7.34501C1.829 7.16801 1.90551 6.96642 2.05605 6.814L2.58912 6.51162L9.0847 10.354V18.742ZM1.80185 35.4465C1.80185 35.2179 1.85368 34.9917 1.95487 34.7631C2.05077 34.5787 2.20164 34.4284 2.38675 34.3328L17.1277 25.4115V33.7502L14.7683 35.1662L9.06002 38.5784L1.80432 42.9494V35.4465H1.80185ZM1.80185 51.5709V45.0242L9.05755 40.6779V48.5889L2.56197 52.4042L2.30778 52.2518C2.18191 52.1756 2.07826 52.1264 2.05358 52.0994C1.90304 51.9249 1.80185 51.7479 1.80185 51.5709ZM34.2008 43.2051C34.1979 43.4275 34.1367 43.6453 34.0231 43.8369C33.9343 44.0053 33.7907 44.1388 33.6159 44.2154L11.6711 57.053C11.5062 57.1634 11.312 57.2224 11.1133 57.2224C10.9146 57.2224 10.7205 57.1634 10.5556 57.053L4.36603 53.4392L15.6568 46.8188V46.7943L26.0591 40.7024C26.5209 40.4618 26.8942 40.0813 27.1252 39.6159C27.4082 39.1702 27.558 38.6535 27.5571 38.1261V20.7898C27.5571 20.2588 27.4041 19.7548 27.1499 19.3246C26.8969 18.8751 26.5291 18.5002 26.0838 18.238L17.3572 13.132L9.0847 8.27918L4.33888 5.4742L10.3779 1.93662C10.547 1.83763 10.7395 1.78543 10.9356 1.78543C11.1318 1.78543 11.3243 1.83763 11.4934 1.93662L33.6677 14.9512C33.835 15.029 33.9696 15.1631 34.0477 15.3298C34.1488 15.5163 34.2014 15.725 34.2008 15.937V43.2051Z'
                    fill='black'
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section className='home-start' id='start'>
        <div className='home-start-container'>
          <div className='home-start-box'>
            <img src={Hexagon} className='home-start-box-img' alt='Decoration hexagon overlay' />
          </div>
          <div className='home-start-content'>
            <h3 className='home-start-title'>
              Get started for <span>free!</span>
            </h3>
            <p className='home-start-lead'>Answer 3 simple questions and begin to perfect your site!</p>
            <hr className='home-start-seperator' />
            <form>
              <p className='home-start-step'>Step {formStep}/3</p>
              {formStep === 1 && (
                <h3 className='home-start-form-title'>Let's start with the name of your brand/website</h3>
              )}
              {formStep === 2 && (
                <h3 className='home-start-form-title'>Tell us about the type of website you are trying to perfect</h3>
              )}
              {formStep === 3 && <h3 className='home-start-form-title'>What is the website's intended audience?</h3>}
              <Input
                label='Brand/Website name'
                placeholder='Enter your brand/website name...'
                value={siteName}
                onChange={setSiteName}
                maxLength='75'
                errors={errors.sitename}
                className={formStep !== 1 && 'display-none'}
              />
              <Dropdown
                label='Type of site'
                options={types_of_site_options}
                heading='Select type of website...'
                callback={setTypeOfSite}
                errors={errors.typeofsite}
                AutoClose
                className={formStep !== 2 && 'display-none'}
              />
              <Dropdown
                label='Intended audience'
                options={intended_audience_options}
                heading='Select intended audience...'
                callback={setIntendedAudience}
                errors={errors.intendedaudience}
                AutoClose
                className={formStep !== 3 && 'display-none'}
              />
              <div className='home-start-buttons'>
                {formStep !== 1 && (
                  <button className='btn btn-secondary' onClick={(e) => decreaseStep(e)}>
                    Previous step
                  </button>
                )}
                {formStep !== 3 && (
                  <button className='btn btn-primary' onClick={(e) => formHandler(e)}>
                    Next step
                  </button>
                )}
                {formStep === 3 && (
                  <button className='btn btn-primary' onClick={(e) => formHandler(e)}>
                    Complete setup
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer-container'>
          <p className='footer-text'>© 2021 Leon Michalak. All Rights Reserved</p>
          <ul className='footer-socials'>
            <li className='footer-social'>
              <a
                href='https://github.com/NinjaInShade'
                target='_blank'
                rel='noreferrer'
                aria-label='Github social media link'
              >
                <svg width='32' height='31' viewBox='0 0 32 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M16 0C7.16 0 0 7.11169 0 15.8921C0 22.9243 4.58 28.8639 10.94 30.9696C11.74 31.1087 12.04 30.6319 12.04 30.2148C12.04 29.8373 12.02 28.5858 12.02 27.2549C8 27.9899 6.96 26.2815 6.64 25.3876C6.46 24.9307 5.68 23.5202 5 23.1428C4.44 22.8448 3.64 22.1098 4.98 22.09C6.24 22.0701 7.14 23.2421 7.44 23.7189C8.88 26.1226 11.18 25.4472 12.1 25.03C12.24 23.997 12.66 23.3017 13.12 22.9044C9.56 22.5071 5.84 21.1364 5.84 15.0577C5.84 13.3295 6.46 11.8992 7.48 10.7867C7.32 10.3894 6.76 8.7605 7.64 6.57534C7.64 6.57534 8.98 6.15817 12.04 8.20427C13.32 7.8467 14.68 7.66792 16.04 7.66792C17.4 7.66792 18.76 7.8467 20.04 8.20427C23.1 6.13831 24.44 6.57534 24.44 6.57534C25.32 8.7605 24.76 10.3894 24.6 10.7867C25.62 11.8992 26.24 13.3096 26.24 15.0577C26.24 21.1563 22.5 22.5071 18.94 22.9044C19.52 23.4011 20.02 24.3546 20.02 25.8445C20.02 27.97 20 29.6784 20 30.2148C20 30.6319 20.3 31.1286 21.1 30.9696C24.2762 29.9045 27.0362 27.8769 28.9916 25.1722C30.9469 22.4675 31.999 19.2218 32 15.8921C32 7.11169 24.84 0 16 0Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
            <li className='footer-social'>
              <a
                href='https://www.instagram.com/lmdeveloper/'
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram social media link'
              >
                <svg width='32' height='31' viewBox='0 0 32 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15.9957 10.3311C13.0578 10.3311 10.6602 12.6538 10.6602 15.5C10.6602 18.3462 13.0578 20.6689 15.9957 20.6689C18.9336 20.6689 21.3312 18.3462 21.3312 15.5C21.3312 12.6538 18.9336 10.3311 15.9957 10.3311ZM31.9982 15.5C31.9982 13.3596 32.0182 11.2385 31.8941 9.10193C31.7701 6.62025 31.1857 4.41776 29.3125 2.60304C27.4352 0.784432 25.1657 0.222178 22.604 0.101971C20.3946 -0.0182348 18.2052 0.00115338 15.9997 0.00115338C13.7902 0.00115338 11.6008 -0.0182348 9.39536 0.101971C6.83368 0.222178 4.56019 0.78831 2.68696 2.60304C0.809722 4.42164 0.22934 6.62025 0.105259 9.10193C-0.0188226 11.2424 0.00119056 13.3634 0.00119056 15.5C0.00119056 17.6366 -0.0188226 19.7615 0.105259 21.8981C0.22934 24.3797 0.813725 26.5822 2.68696 28.397C4.56419 30.2156 6.83368 30.7778 9.39536 30.898C11.6048 31.0182 13.7943 30.9988 15.9997 30.9988C18.2092 30.9988 20.3986 31.0182 22.604 30.898C25.1657 30.7778 27.4392 30.2117 29.3125 28.397C31.1897 26.5784 31.7701 24.3797 31.8941 21.8981C32.0222 19.7615 31.9982 17.6404 31.9982 15.5ZM15.9957 23.453C11.4527 23.453 7.78631 19.9011 7.78631 15.5C7.78631 11.0989 11.4527 7.547 15.9957 7.547C20.5387 7.547 24.2051 11.0989 24.2051 15.5C24.2051 19.9011 20.5387 23.453 15.9957 23.453ZM24.5413 9.07866C23.4806 9.07866 22.6241 8.24885 22.6241 7.22128C22.6241 6.19371 23.4806 5.3639 24.5413 5.3639C25.602 5.3639 26.4586 6.19371 26.4586 7.22128C26.4589 7.46528 26.4095 7.70695 26.3133 7.93243C26.217 8.15792 26.0758 8.3628 25.8977 8.53533C25.7196 8.70787 25.5082 8.84467 25.2754 8.9379C25.0426 9.03113 24.7932 9.07897 24.5413 9.07866Z'
                    fill='white'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
