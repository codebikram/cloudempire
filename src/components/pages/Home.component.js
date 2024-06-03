import React from "react";
import { useChangeTitle } from "../../utills";
import awsLogo from "../../assets/logos/aws_logo.png";
import azureLogo from "../../assets/logos/azure_logo.png";
import salesforce_logo from "../../assets/logos/salesforce-logo.png";
import mobileWebLogo from "../../assets/logos/mobile_web.jpg";
import Card from "../card/Card.component";
import Feature from "../feature/Feature.component";
import Slider from "../slider/Slider.component";

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
      <div className='padding pt-20 min-h-screen bg-gray-800 text-white'>
        <article className='pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cardData.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </article>
        <Feature />
        <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap '>
          <h1 className='font-robo text-4xl md:text-6xl text-center font-semibold'>
            Let's work together on your{" "}
            <span className='opacity-60'>next project</span>
          </h1>
          <p className='text-sm md:text-base text-center '>
            Your Vision, Our Expertise Unleashing Potential with Customized
            Cutting-Edge Solutions
          </p>
        </article>
        <hr className=' md:mt-16 md:mb-16' />
        <article className='pt-16 pb-16 text-white flex flex-col gap-6 flex-wrap'>
          <h2 className='font-robo text-4xl md:text-5xl font-semibold'>
            Welcome to Cloudempire
          </h2>
          <p className='text-sm md:text-base '>
            CloudEmpire stands out in cloud computing with a focus on
            personalized,expert-driven solutions in Salesforce,Azure,and AWS.Our
            approach combines innovative,tailored strategies with seamless
            integration, ensuring scalable and secure cloud implementations.
            We're committed to driving digital transformation as a trusted,
            forward-thinking partner
          </p>
        </article>
      </div>
    </>
  );
};

export default Home;
