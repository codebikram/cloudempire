import React from "react";
// import ContactCard from "../contact/ContactCard.component";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { useChangeTitle } from "../../utills";
const Contact = () => {
  useChangeTitle("Get in touch - ");
  return (
    <section className='text-white bg-gradient-to-r from-yellow-600 to-yellow-700'>
      <div className=' p-8 pt-28 md:p-16 md:pt-28 flex flex-col gap-4'>
        <h1 className='text-5xl font-bold'>Get in touch</h1>
        <p className=''>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us..
        </p>
      </div>
      <div className='flex flex-col md:flex-row text-slate-800 p-8 md:p-16 md:pt-0 gap-12 '>
        <article className='bg-white flex-1 rounded-lg shadow-md'>
          <div className='p-8 flex flex-col gap-4'>
            <div className='text-8xl'>
              <CiMail className='m-auto' />
            </div>
            <h2 className='text-3xl font-semibold'>Write Us</h2>
            <p className='text-lg'>
              Have thoughts to share or a specific inquiry? Get in touch with us
              by sending an email to{" "}
              <span>
                <a
                  href='mailto:contact@cloudempire.tech'
                  className='underline hover:text-yellow-600'
                >
                  contact@cloudempire.tech
                </a>
              </span>
              , and we'll respond promptly. Your message is important to us, and
              we look forward to hearing from you.
            </p>
          </div>
        </article>
        <article className='bg-white flex-1  rounded-lg shadow-md'>
          <div className='p-8 flex flex-col gap-6'>
            <div className='text-8xl'>
              <LiaPeopleCarrySolid className='m-auto' />
            </div>
            <h2 className='text-3xl font-semibold'>Want to consult?</h2>
            <p className='text-lg'>
              Need guidance or have a question? We're here to help. Reach out
              for a consultation and let's explore the solutions together.
            </p>
            <button className='bg-yellow-600  text-white font-bold rounded-md p-4 hover:from-yellow-700 hover:bg-yellow-700'>
              Get a Free Consultation
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
