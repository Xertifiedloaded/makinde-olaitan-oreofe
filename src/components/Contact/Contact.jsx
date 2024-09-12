import React, { useState } from 'react';
import axios from 'axios';
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from 'react-icons/fa';



const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://sheet.best/api/sheets/1fc49a2f-4c2a-48a0-80dc-e3f6173d0e43',
        form
      )
      .then((response) => {
        console.log(response);
        // clear forms value
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      });
  };

  return (
    <section
      className='pb-[180px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[2%] 2xl:px-[17%]'
      id='contact'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Contact Me
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        Let's
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Talk about ideas
        </span>
      </p>

      <div className='lg:grid-cols-[5fr_7fr] grid '>
        <div className='contact__content'>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegMap className=' text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark '>
              Address
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
             Tipper Garage, Ibadan
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegUser className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Freelance
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              Available Right Now
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegEnvelope className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Email
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              makindeolaitan01@gmail.com
            </p>
          </div>
          <div className='contact__card'>
            <span className='contact__card-icon bg-white dark:bg-containerColorDark'>
              <FaRegAddressBook className='text-titleColor dark:text-titleColorDark' />
            </span>
            <h3 className='contact__card-title font-[700] text-titleColor dark:text-titleColorDark'>
              Phone
            </h3>
            <p className='contact__card-data text-textColor dark:text-textColorDark'>
              +2348168043011
            </p>
          </div>
        </div>

        <form className='space-y-8' onSubmit={handleSubmit}>
  <div className='grid gap-6 sm:grid-cols-2'>
    <div className='flex flex-col'>
      <label className='text-sm font-bold text-titleColor dark:text-titleColorDark mb-2'>
        Your Full Name <b>*</b>
      </label>
      <input
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}
        className='bg-bgColorAlt dark:bg-containerColorDark border-2 border-hsl(210, 2%, 65%) text-titleColor dark:text-titleColorDark rounded-full py-3 px-6'
        placeholder='Enter your full name'
      />
    </div>

    <div className='flex flex-col'>
      <label className='text-sm font-bold text-titleColor dark:text-titleColorDark mb-2'>
        Your Email Address <b>*</b>
      </label>
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        className='bg-bgColorAlt dark:bg-containerColorDark border-2 border-hsl(210, 2%, 65%) text-titleColor dark:text-titleColorDark rounded-full py-3 px-6'
        placeholder='Enter your email address'
      />
    </div>
  </div>

  <div className='flex flex-col'>
    <label className='text-sm font-bold text-titleColor dark:text-titleColorDark mb-2'>
      Your Subject <b>*</b>
    </label>
    <input
      type='text'
      name='subject'
      value={form.subject}
      onChange={handleChange}
      className='bg-bgColorAlt dark:bg-containerColorDark border-2 border-hsl(210, 2%, 65%) text-titleColor dark:text-titleColorDark rounded-full py-3 px-6'
      placeholder='Enter your subject'
    />
  </div>

  <div className='flex flex-col'>
    <label className='text-sm font-bold text-titleColor dark:text-titleColorDark mb-2'>
      Your Message <b>*</b>
    </label>
    <textarea
      name='message'
      value={form.message}
      onChange={handleChange}
      className='bg-bgColorAlt dark:bg-containerColorDark border-2 border-hsl(210, 2%, 65%) text-titleColor dark:text-titleColorDark rounded-lg py-4 px-6 resize-none'
      placeholder='Enter your message'
    ></textarea>
  </div>

  <div className='flex flex-col sm:flex-row items-center justify-between text-titleColor dark:text-titleColorDark'>
    <p className='font-[Comfortaa]'>
      *Accept the terms and conditions.
    </p>
    <button
      type='submit'
      className='relative bg-white dark:bg-titleColor text-titleColor dark:text-titleColorDark text-lg font-semibold flex items-center justify-center gap-2 border-2 border-borderColor dark:border-borderColorDark py-4 px-6 rounded-full shadow-md dark:shadow-[5px_5px_rgba(255,255,255,0.1)] hover:bg-primaryColor hover:text-white transition-all duration-300'
    >
      <span className='z-10'>Send Message</span>
    </button>
  </div>
</form>

      </div>
    </section>
  );
};

export default Contact;
