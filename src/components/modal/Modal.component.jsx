import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";

export default function Modal({ showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const handleSubmit = () => {};
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email!")
      .required("email is required!")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email"),
    password: Yup.string()
      .required("password is required")
      .min(8, "Your password should have at least 8 charcter!"),
  });
  return (
    <>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[400px] md:w-[500px] bg-gray-800 text-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-center gap-16 sm:justify-between p-5 border-b border-solid border-yellowGray-200 rounded-t'>
                  <h3 className='text-xl sm:text-2xl font-semibold text-yellow-600'>
                    Get a Free Consultation
                  </h3>
                  <button
                    className=' font-bold text-2xl'
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdClose />
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-4 flex-auto'>
                  <Formik
                    initialValues={{
                      service: "",
                      name: "",
                      email: "",
                      message: "",
                      date: "",
                      time: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form className='flex items-center justify-center flex-col p-3 w-full'>
                        <div className='relative z-0 w-full mb-5  '>
                          <Field
                            as='select'
                            name='service'
                            id='service'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                  border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          >
                            <option value='salesforce' className='bg-gray-900'>
                              Salesforce
                            </option>
                            <option value='aws' className='bg-gray-900'>
                              AWS
                            </option>
                            <option value='azure' className='bg-gray-900'>
                              Azure
                            </option>
                            <option value='react' className='bg-gray-900'>
                              React
                            </option>
                            <option value='nintex' className='bg-gray-900'>
                              Nintex
                            </option>
                            <option
                              value='salesforce industries'
                              className='bg-gray-900'
                            >
                              Salesforce Industries (Vlocity)
                            </option>
                            <option value='mulesoft' className='bg-gray-900'>
                              Mulesoft
                            </option>
                            <option value='ci/cd' className='bg-gray-900'>
                              CI/CD Pipeline
                            </option>
                            <option value='conga' className='bg-gray-900'>
                              Conga
                            </option>
                          </Field>
                          <label
                            htmlFor='service'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Service
                          </label>
                          {errors.service && touched.service ? (
                            <div className='text-red-600 text-xs'>
                              {errors.service}
                            </div>
                          ) : null}
                        </div>
                        <div className='relative z-0 w-full mb-5  '>
                          <Field
                            type='text'
                            name='name'
                            id='name'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                  border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          />
                          <label
                            htmlFor='name'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Name
                          </label>
                          {errors.name && touched.name ? (
                            <div className='text-red-600 text-xs'>
                              {errors.name}
                            </div>
                          ) : null}
                        </div>
                        <div className='relative z-0 w-full mb-5  '>
                          <Field
                            type='email'
                            name='email'
                            id='email'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                            border-gray-300 appearance-none 
                               focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          />
                          <label
                            htmlFor='email'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Email
                          </label>
                          {errors.email && touched.email ? (
                            <div className='text-red-600 text-xs'>
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div className='relative z-0 w-full    mb-5  '>
                          <Field
                            as='textarea'
                            rows='3'
                            name='message'
                            id='message'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                  border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          />
                          <label
                            htmlFor='message'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Message
                          </label>
                          {errors.message && touched.message ? (
                            <div className='text-red-600 text-xs'>
                              {errors.message}
                            </div>
                          ) : null}
                        </div>
                        <div className='relative z-0 w-full mb-5  '>
                          <Field
                            type='date'
                            name='date'
                            id='date'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                  border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          />
                          <label
                            htmlFor='date'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Date
                          </label>
                          {errors.date && touched.date ? (
                            <div className='text-red-600 text-xs'>
                              {errors.date}
                            </div>
                          ) : null}
                        </div>
                        <div className='relative z-0 w-full    mb-5  '>
                          <Field
                            type='time'
                            name='time'
                            id='time'
                            className='block py-2.5 px-0 w-full text-lg md:text-sm text-gray-300 bg-transparent border-0 border-b-2 
                  border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
                            placeholder=' '
                          />
                          <label
                            htmlFor='time'
                            className='peer-focus:font-medium absolute text-lg md:text-sm text-gray-300
                   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                  peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Time
                          </label>
                          {errors.time && touched.time ? (
                            <div className='text-red-600 text-xs'>
                              {errors.time}
                            </div>
                          ) : null}
                        </div>
                        <button
                          type='submit'
                          className='text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg md:text-sm w-full sm:w-auto px-5 py-2.5 text-center  '
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
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
