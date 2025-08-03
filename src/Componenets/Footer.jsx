import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-8 border-t-1 w-full mt-9 lg:-mt-19 xl:-mt-15">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center text-blue-400 font-semibold text-2xl">
          Eslam
        </h1>
        <div className="flex gap-2 md:gap-8 mt-2">
          <a
            href="https://www.facebook.com/profile.php?id=100022158557363"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/islamm_ahmmed74/?hl=ar"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a href="https://github.com/Ea450" target="_blank">
            <FaGithub />
          </a>
          <a href="https://x.com/eslamAhmed424" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <p className="text-[12px] md:text-[20px]">
          ©2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
