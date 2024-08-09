"use client";
// @flow strictS
import './index.scss'
import { useRef } from 'react'
import { RiContactsFill } from "react-icons/ri";

import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
    .sendForm('service_zjjlqwk', 'template_rt4xu2g', form.current, {
        publicKey: 'U3zFXoMvOFz99zf_C',
      })
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <br />
          <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2" 
                  placeholder="Name" type="text" name="name" required />
                </li>
                <br />
                <li className="half">
                  <input
                    className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <br />
                <li>
                  <textarea
                    placeholder="Message"
                    className="bg-[#10172d] h-full w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                    name="message"
                    required
                  ></textarea>
                </li>
                <br />
                <li>
                <button type='submit' className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>SEND</span>
                <RiContactsFill size={16} />
              </button>
                </li>
              </ul>
            </form>
      </div>
    </div>
  );
};

export default Contact;