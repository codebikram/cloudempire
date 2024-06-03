import React from "react";
import FeatureCard from "./FeatureCard.component";

import salesforce from "../../assets/feature-images/saleforce360.png";
import cicd from "../../assets/feature-images/cicd.jpeg";
import conga from "../../assets/feature-images/conga.png";
import docusign from "../../assets/feature-images/docusign.jpg";
import mulesoft from "../../assets/feature-images/mulesoft.jpg";
import tableau from "../../assets/feature-images/tableau.jpg";

const Feature = () => {
  const featuredWorkData = [
    {
      imageUrl: salesforce,
      title: "Salesforce 360",
      description:
        "Elevate your business to new heights with our showcased proficiency in Salesforce 360",
    },
    {
      imageUrl: conga,
      title: "End to End Conga Solution",
      description:
        "Experience the power of precision in document generation with our featured work using Conga Composer.",
    },
    {
      imageUrl: docusign,
      title: "E-Sign Using DocuSign",
      description:
        "Transform your signature processes with our showcased expertise in DocuSign integration.",
    },
    {
      imageUrl: mulesoft,
      title: "Mulesoft",
      description:
        "Discover the pinnacle of integration excellence with our showcased expertise in MuleSoft.",
    },
    {
      imageUrl: cicd,
      title: "CI/CD",
      description:
        "Experience the future of smooth software delivery through our showcased expertise in CI/CD.",
    },
    {
      imageUrl: tableau,
      title: "Tableau",
      description:
        "Dive into the world of data visualization excellence with our featured work in Tableau.",
    },
  ];

  return (
    <>
      <h1 className='font-semibold text-4xl md:text-5xl mt-16 text-center'>
        Featured Work
      </h1>
      <section className='pt-16 pb-16 md:p-16 sm:bg-gray-700 rounded-full'>
        <article className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredWorkData.map((item, i) => (
            <FeatureCard key={i} data={item} />
          ))}
        </article>
      </section>
    </>
  );
};

export default Feature;
