// Libraries
import React from 'react';
import Navbar from '../components/layout/Navbar';
import FeatureCard from '../components/general/FeatureCard';
import Illustration from '../resources/header illustration.png';
import Hexagon from '../resources/hexagon overlay.svg';
import { useAuth } from '../other/AuthContext';
import { Redirect } from 'react-router-dom';

import '../css/Home-header.css';
import '../css/Home-features.css';
import '../css/Home-start.css';
import '../css/Buttons.css';

export default function Home({ setSignupData }) {
  const { userData, authToken } = useAuth();

  if (authToken.token) {
    return <Redirect to={`/controlpanel/${userData.id}`} />;
  }

  return (
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

      <section className='home-start'>
        <div className='home-start-container'>
          <div className='home-start-box'>
            <img src={Hexagon} className='home-start-box-img' alt='Decoration hexagon overlay' />
          </div>
          <div className='home-start-content'>
            <h3 className='home-start-title'>
              Get started for <span>free</span>
            </h3>
            <p className='home-start-lead'>Answer 3 simple questions and begin to perfect your site!</p>
            <hr className='home-start-seperator' />
            <form>
              <p className='home-start-step'>Step 1/3</p>
              <h3 className='home-start-form-title'>Let's start with the name of your website/brand</h3>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
