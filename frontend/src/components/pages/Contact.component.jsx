import React, { useState } from "react";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { useChangeTitle } from "../../utills";
import Modal from "../modal/Modal.component";
import Button from "../button/Button.component";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  useChangeTitle("Get in touch - ");
  return (
    <>
      <section className='text-white min-h-screen bg-gray-800'>
        <div className='padding flex flex-col gap-4'>
          <h1 className='text-5xl md:text-6xl font-bold font-robo'>
            Get in touch
          </h1>
          <p className='md:text-lg'>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us..
          </p>
        </div>
        <div className='flex flex-col md:flex-row text-slate-800 p-8 md:p-16 md:pt-0 gap-12 '>
          <article className='bg-gradient-to-b from-gray-500 to-gray-700 text-white flex-1 rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-lg'>
            <div className='p-8 flex flex-col gap-4'>
              <div className='text-8xl'>
                <CiMail className='m-auto' />
              </div>
              <h2 className='text-3xl font-semibold font-robo'>Write Us</h2>
              <p className='text-lg'>
                Have thoughts to share or a specific inquiry? Get in touch with
                us by sending an email to{" "}
                <span>
                  <a
                    href='mailto:contact@cloudempire.tech'
                    className='underline hover:text-yellow-600'
                  >
                    contact@cloudempire.tech
                  </a>
                </span>
                , and we'll respond promptly. Your message is important to us,
                and we look forward to hearing from you.
              </p>
            </div>
          </article>
          <article className='bg-gradient-to-b from-gray-500 to-gray-700 text-white flex-1  rounded-lg shadow-md hover:scale-105 duration-300 hover:shadow-lg'>
            <div className='p-8 flex flex-col gap-6'>
              <div className='text-8xl'>
                <LiaPeopleCarrySolid className='m-auto' />
              </div>
              <h2 className='text-3xl font-semibold font-robo'>
                Want to consult?
              </h2>
              <p className='text-lg'>
                Need guidance or have a question? We're here to help. Reach out
                for a consultation and let's explore the solutions together.
              </p>
              <Button />
            </div>
          </article>
        </div>
      </section>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Contact;
