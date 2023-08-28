import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container services_container">
        <article className='service'>
          <div className='service_head'>
            <h3> UI/UX design </h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
          </ul>
        </article>
        {/* { UI/UX design } */}
        <article className='service'>
          <div className='service_head'>
            <h3> Web Development </h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
          </ul>
        </article>
        {/* { WEB Development } */}

        <article className='service'>
          <div className='service_head'>
            <h3> Social Consultant </h3>
          </div>

          <ul className='service_list'>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
              <li>
                <BiCheck className='service_list-icon' />
                <p> Lorem Ipsum </p>
              </li>
          </ul>
        </article>
        {/* { Social Consultant } */}
      </div>
    </section>
  )
}

export default Services