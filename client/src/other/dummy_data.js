import mdn_logo from '../resources/mdn.png';
import { colours_array } from '../other/colours';

export const dummy_topic_data = [
  {
    name: 'Design',
    data: [
      {
        heading: 'White space',
        priority: 'high',
        checked: false,
        resources: [
          { img: mdn_logo, heading: 'White space', href: 'https://developer.mozilla.org/en-US/' },
          { img: mdn_logo, heading: 'Colours', href: 'https://developer.mozilla.org/en-US/' },
          { img: mdn_logo, heading: 'Alignment', href: 'https://developer.mozilla.org/en-US/' },
          { img: mdn_logo, heading: 'Visual hierachy', href: 'https://developer.mozilla.org/en-US/' },
          { img: mdn_logo, heading: 'Typography', href: 'https://developer.mozilla.org/en-US/' },
        ],
      },
      {
        heading: 'Colours',
        priority: 'medium',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Alignment',
        priority: 'low',
        checked: false,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Visual hierachy',
        priority: 'low',
        checked: false,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
    ],
  },
  {
    name: 'Security',
    data: [
      {
        heading: 'Prevent XSS attacks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
    ],
  },
  {
    name: 'User experience',
    data: [
      {
        heading: 'Limit clicks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Limit clicks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Limit clicks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Limit clicks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Limit clicks',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
    ],
  },
  {
    name: 'SEO',
    data: [
      {
        heading: 'Increase web rank',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Increase web rank',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
      {
        heading: 'Increase web rank',
        priority: 'high',
        checked: true,
        resources: [{ img: mdn_logo, heading: 'Test heading', href: 'https://developer.mozilla.org/en-US/' }],
      },
    ],
  },
];

export const sites = [
  {
    id: 1,
    title: 'PortfoliosCorp',
    type: 'Portfolio site',
    intendedAudience: 'adults',
    progress: '27%',
    colour: colours_array[0].s500,
    data: dummy_topic_data,
  },
  {
    id: 2,
    title: 'DevBlog',
    type: 'Blog site',
    intendedAudience: 'adults',
    progress: '39%',
    colour: colours_array[2].s500,
    data: dummy_topic_data,
  },
  {
    id: 3,
    title: 'TeslaBlog',
    type: 'Blog site',
    intendedAudience: 'adults',
    progress: '75%',
    colour: colours_array[4].s500,
    data: dummy_topic_data,
  },
  {
    id: 4,
    title: 'Redbull',
    type: 'Product site',
    intendedAudience: 'all',
    progress: '52%',
    colour: colours_array[8].s500,
    data: dummy_topic_data,
  },
];
