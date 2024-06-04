import React from "react";
import { useChangeTitle } from "../../utills";
import awsLogo from "../../assets/logos/aws_logo.png";
import azureLogo from "../../assets/logos/azure_logo.png";
import salesforce_logo from "../../assets/logos/salesforce-logo.png";
import mobileWebLogo from "../../assets/logos/mobile_web.jpg";
import Card from "../card/Card.component";
import Slider from "../slider/Slider.component";
import TextSection from "../text-section/TextSection.component";
import Feature from "../feature/Feature.component";
const cardData = [
  {
    title: "Everything About Salesforce",
    description:
      "Transforming Customer Experiences with Tailored Salesforce Solutions.",
    imgUrl: salesforce_logo,
  },
  {
    title: "Mobile & WebApp",
    description:
      "Streamlining Business Connectivity with Advanced MuleSoft Integration Solutions.",
    imgUrl: mobileWebLogo,
  },
  {
    title: "AWS Cloud Apps",
    description:
      "Driving Business Growth with Robust, Secure AWS Cloud Services.",
    imgUrl: awsLogo,
  },
  {
    title: "Everything in Azure",
    description:
      "Leveraging Azure for Innovative, Scalable Cloud Architectures.",
    imgUrl: azureLogo,
  },
];

const Home = () => {
  useChangeTitle("");

  return (
    <>
      <Slider />
      <div className='padding min-h-screen bg-gray-800 text-white'>
        <article className='pb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cardData.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </article>
        <Feature />
        <TextSection />
      </div>
    </>
  );
};

export default Home;
