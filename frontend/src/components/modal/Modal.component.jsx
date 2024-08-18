import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Modal({ showModal, setShowModal }) {
  const [message, setMessage] = useState(
    'We got your message, We will contact you shortly!'
  );
  const [error, setError] = useState(
    'Something went wrong, Please enter all the details correctly'
  );
  const options = [
    {
      label: 'salesforce',
      value: 'salesforce',
    },
    {
      label: 'aws',
      value: 'aws',
    },
    {
      label: 'azure',
      value: 'azure',
    },
    {
      label: 'react',
      value: 'react',
    },
    {
      label: 'nintex',
      value: 'nintex',
    },
    {
      label: 'salesforce industries (Vlocity)',
      value: 'salesforce industries',
    },
    {
      label: 'mulesoft',
      value: 'mulesoft',
    },
    {
      label: 'ci/cd pipeline',
      value: 'ci/cd',
    },
    {
      label: 'conga',
      value: 'conga',
    },
  ];

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setMessage(null);
      setError(null);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/messages/add`,
        values
      );
      if (res.data.success) {
        setMessage(res.data.message);
        resetForm();
      }
    } catch (error) {
      setError('Please enter all the details correctly!');
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email!')
      .required('Email is required!')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email'),
    name: Yup.string()
      .required('Name is required!')
      .min(2, 'Your name should have at least 2 charcters!'),
    message: Yup.string()
      .required('Message is required!')
      .min(5, 'Your message should have at least 5 charcters!'),
    date: Yup.date().min(new Date(Date.now())).required('Date is required!'),
  });
  return ReactDOM.createPortal(
    <Fragment>
      {showModal ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
            className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 w-screen h-screen z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-gray-800 text-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center gap-14 sm:justify-between p-5 border-b border-solid border-yellowGray-200 rounded-t">
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600">
                    Get a Free Consultation
                  </h3>
                  <button
                    className=" font-bold text-2xl"
                    onClick={() => {
                      setShowModal(false);
                      setMessage(null);
                      setError(null);
                    }}
                  >
                    <IoMdClose />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  {message && (
                    <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2 mb-3">
                      <p className="text-xs text-green-500 flex items-center gap-2">
                        <span>
                          <FaRegCheckCircle />
                        </span>
                        <span>{message}</span>
                      </p>
                      <button
                        className="font-bold text-2xl text-white"
                        onClick={() => {
                          setMessage(null);
                        }}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  )}
                  {error && (
                    <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2 mb-3">
                      <p className="text-xs text-red-500 flex items-center gap-2">
                        <span>
                          <MdErrorOutline />
                        </span>
                        <span>{error}</span>
                      </p>
                      <button
                        className="font-bold text-2xl text-white"
                        onClick={() => {
                          setError(null);
                        }}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  )}

                  <Formik
                    initialValues={{
                      service: 'salesforce',
                      name: '',
                      email: '',
                      message: '',
                      date: '',
                      time: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form className="flex items-center justify-center flex-col p-3 w-full">
                        <div className="relative z-0 w-full  mb-8    ">
                          <Field
                            as="select"
                            name="service"
                            id="service"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none capitalize 
                 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          >
                            {options.map((option, index) => (
                              <option
                                key={index}
                                value={option.value}
                                className="bg-gray-900 capitalize"
                              >
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          <label
                            htmlFor="service"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Service
                          </label>
                          {errors.service && touched.service ? (
                            <div className="text-red-600 text-xs">
                              {errors.service}
                            </div>
                          ) : null}
                        </div>
                        <div className="relative z-0 w-full mb-8">
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none 
                 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Name
                          </label>
                          {errors.name && touched.name ? (
                            <div className="text-red-600 text-xs">
                              {errors.name}
                            </div>
                          ) : null}
                        </div>
                        <div className="relative z-0 w-full  mb-8    ">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                        border-gray-300 appearance-none 
                           focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email
                          </label>
                          {errors.email && touched.email ? (
                            <div className="text-red-600 text-xs">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className="relative z-0 w-full     mb-8    ">
                          <Field
                            as="textarea"
                            rows="3"
                            name="message"
                            id="message"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none 
                 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="message"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Message
                          </label>
                          {errors.message && touched.message ? (
                            <div className="text-red-600 text-xs">
                              {errors.message}
                            </div>
                          ) : null}
                        </div>
                        <div className="relative z-0 w-full  mb-8    ">
                          <Field
                            type="date"
                            name="date"
                            id="date"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none 
                 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="date"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Date
                          </label>
                          {errors.date && touched.date ? (
                            <div className="text-red-600 text-xs">
                              {errors.date}
                            </div>
                          ) : null}
                        </div>
                        <div className="relative z-0 w-full     mb-8    ">
                          <Field
                            type="time"
                            name="time"
                            id="time"
                            className="block py-2.5 px-0 w-full text-base md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
              border-gray-300 appearance-none 
                 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=" "
                            autoComplete="off"
                          />
                          <label
                            htmlFor="time"
                            className="peer-focus:font-medium absolute text-base md:text-sm text-gray-300
               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Time
                          </label>
                          {errors.time && touched.time ? (
                            <div className="text-red-600 text-xs">
                              {errors.time}
                            </div>
                          ) : null}
                        </div>
                        <button
                          type="submit"
                          className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-base md:text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
                        >
                          Submit
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
                {/*footer*/}
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Fragment>,
    document.getElementById('portal')
  );
}
