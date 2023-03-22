import React from "react";
import "./footer.scss";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/118232727?v=4"}
          alt="Founder"
        />

        <h2>Akash Vishwakarma</h2>
        <p>विद्यां ददाति विनयं,
विनयाद् याति पात्रताम् ।<br/>
पात्रत्वात् धनमाप्नोति,
धनात् धर्मं ततः सुखम् ॥.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/savin8305" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <ExpandLessIcon/>
      </a>
    </footer>
  );
};

export default Footer;
