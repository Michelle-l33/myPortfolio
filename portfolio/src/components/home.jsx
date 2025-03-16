import React, { use } from "react";
import useScrollToTop from "./scrolltotop";

export default function Home(){
    useScrollToTop("upToTop");

    const jsonData = {
        title: "My Portfolio",
        person: {
          name: "Michelle Lee",
          title: "Computer Science Major",
          bio: "fill in here",
        },
        profileImage: "../images/profilepic.jpg",
        circularButtons: [
          { text: "Resume", href: "/Resume.pdf", className: "yellow", download: true },
          { text: "Projects", href: "/projects", className: "blue" },
          { text: "Contact", href: "/contact", className: "orange" },
        ],
        contactInfo: {
          phone: "(563)-676-2119",
          email: "nhilee2003@gmail.com",
        },
        socialMedia: [
          { href: "https://www.facebook.com/", icon: "../images/facebook.png", alt: "Facebook" },
          { href: "https://x.com/", icon: "../images/twitter-icon.png", alt: "Twitter" },
          { href: "https://www.instagram.com/", icon: "../images/insta.png", alt: "Instagram" },
          { href: "https://www.youtube.com/", icon: "../images/youtube.png", alt: "YouTube" },
        ],
      };
    
      return (
        <>
        <h2>HI</h2>
        </>
      );
}