import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/bilalsaddique09/?hl=en",
      icon: <Instagram />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/muhammad-bilal-9b6b9a1b3/",
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: "https://github.com/muhammadbilal10",
      icon: <Github />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <Twitter />,
    },
    {
      name: "Youtube",
      link: "",
      icon: <Youtube />,
    },
  ];

  const footerData = [
    {
      header: "Products",
      items: [
        "Builder",
        "Products",
        "Guides",
        "Completed Builds",
        "Trends",
        "Forums",
      ],
    },
    {
      header: "Information",
      items: [
        "About us",
        "Contact us",
        "Terms & Conditions",
        "Returns & Exchanges",
        "Shipping & Delivery",
        "Privacy Policy",
      ],
    },
    {
      header: "Useful Links",
      items: ["Latest News", "My Account", "Size Guide", "FAQs", "FAQs 2"],
    },
    {
      header: "Legal",
      items: ["Privacy Policy", "Terms & Conditions", "Refund Policy"],
    },
  ];

  return (
    <footer className=" bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex  font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="text-3xl font-bold">CPCB</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            184 Main Rd E, St Albans VIC 3021, Australia
          </p>
          <div className="mt-4 lg:w-1/2 w-full">
            <Link href="mailto:contact@company.com" className="text-gray-500">
              contact@company.com
            </Link>
            <p className="leading-relaxed mt-2">
              <Link href="tel:+001223456" className="text-gray-500">
                +001 2233 456
              </Link>
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className="text-gray-500 hover:text-[#56cfe1] text-sm transform transition-transform hover:-translate-y-1"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerData.map((data, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" font-semibold text-gray-900 tracking-widest text-md mb-3">
                {data.header}
              </h2>
              <nav className="list-none mb-10">
                {data.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="/"
                      className="text-gray-500 hover:text-[#56cfe1] text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 CustomPCBuilding - ALL rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
