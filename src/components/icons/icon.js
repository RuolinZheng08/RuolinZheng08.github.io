import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
} from '@components/icons';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub, 
  faYoutube, 
  faLinkedin, 
  faMedium, 
  faItchIo, 
  faFreeCodeCamp,
} from '@fortawesome/free-brands-svg-icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      // return <IconGitHub />;
      return <FontAwesomeIcon icon={faGithub} />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      // return <IconLinkedin />;
      return <FontAwesomeIcon icon={faLinkedin} />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    // font awesome brand logos
    case 'FreeCodeCamp':
      return <FontAwesomeIcon icon={faFreeCodeCamp} />;
    case 'ItchIo':
      return <FontAwesomeIcon icon={faItchIo} />;
    case 'YouTube':
      return <FontAwesomeIcon icon={faYoutube} />;
    case 'Medium':
      return <FontAwesomeIcon icon={faMedium} />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
