import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer>
      <ul className="socialList">
        {/*Github*/}
        <SocialIcon url="https://github.com/petepeepee" />

        {/*Linkedin*/}

        <SocialIcon url="https://www.linkedin.com/in/petri-paasila-5a0a441ba" />

        {/*Instagram*/}

        <SocialIcon url="https://www.instagram.com/petripaasila" />

        {/*Facebook*/}

        <SocialIcon url="https://www.facebook.com/petri.paasila.1" />
      </ul>
    </footer>
  );
}
