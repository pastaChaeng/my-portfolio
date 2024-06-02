import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arlene-joy-nacion-690137276/?originalSubdomain=ph",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/are__lean___/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rlenesEy.7/",
    Icon: RiFacebookLine,
  },
  {
    name: "Github",
    link: "https://github.com/pastaChaeng",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-[#3c005a] rounded-full p-[5px] hover:text-white"
              : "hover:text-[#3c005a]"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
