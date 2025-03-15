import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";


{/* Footer Content*/} 

const sections = [
  {
    title: "Travel Planner",
    items: [{ 
      name: "AI-powered solution can assist in creating the best travel itineraries based on duration, group, size, and budget. ❤️ to travel ✈️"
    }]
  },
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about"},
      { name: "Contact Us", link: "/contact"},
      { name: "Culture", link: "/culture"},
      { name: "Blog", link: "/blog"} 
    ]
  },
  {
    title: "Support",
    items: [
      { name: "Help Center", link: "/help" },
      { name: "FAQ", link: "/faq" },
      { name: "Email", link: "mailto:support@travelplanner.com" }
    ]
  },
  {
    title: "Terms & Conditions",
    items: [{ name: "Privacy Policy", link: "/privacy" }]
  }
  
];

{/* Social Icons */}

const socialIcons = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/'
  },
  {
    name: 'Twitch',
    icon: FaTwitch,
    link: 'https://twitch.com/'
  },
  {
    name: 'Github',
    icon: FaGithub,
    link: 'https://Github.com/'
  }

 ];

 const Footer = () => {
  return (
    <footer className="w-full bg-[#002D62] text-white p-10 text-base">
      {/* Maping Sections */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
            {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-400">
                  {item.link ? (
                    <a 
                    href={item.link} 
                    target="_blank" rel="noopener noreferrer" 
                    className="hover:text-white cursor-pointer">
                    {item.name}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons & Rights */}
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-evenly sm:flex-row text-center text-gray-500">
       
        <p className="py-4">&copy; 2025 Travel Planner. All rights reserved.</p>
        
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {socialIcons.map((x, index) => (
            <a 
            key={index} 
            href={x.link} 
            target="_blank" rel="noopener noreferrer" 
            className="hover:text-white">
            <x.icon className="cursor-pointer" />
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;
