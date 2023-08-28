import React from 'react'
import "./testimonials.css"
import av1 from "../../assets/Av1.png"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review From Clients </h5>
      <h2> Testimonials </h2>

      <div className="container testimonials_container">
        <article className='testimonials'>
            <div className="client_avatar">
              <img src={av1} alt="avatar pic one" />
            </div>
            <h5 className='client_name'> Profile One </h5>
            <small className="client_review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials