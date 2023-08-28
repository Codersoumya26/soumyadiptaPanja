import React from 'react'
import "./testimonials.css"
import av1 from "../../assets/Av1.png"
import av2 from "../../assets/av2.jpeg"
import av3 from "../../assets/av3.jpg"
import av4 from "../../assets/av4.jpg"
import av5 from "../../assets/av5.jpg"

const data = [
  {
    avatar: av1,
    name: 'Anindita Roy',
    review: ' Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.'
  },
  {
    avatar: av2,
    name: 'Soumalya Sen',
    review: 'Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum'
  },
  {
    avatar: av3,
    name: 'Swarnavo Saha',
    review: 'Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque.'
  },
  {
    avatar: av4,
    name: 'Prangan Pal',
    review: 'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.'
  },
  {
    avatar: av5,
    name: 'Nijhum Bose',
    review: 'Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis!'
  }
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5> Review From Clients </h5>
      <h2> Testimonials </h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review}) => {
            return (
              <article className='testimonials'>
                  <div className="client_avatar">
                    <img src={avatar} alt="avatar pic" />
                  </div>
                  <h5 className='client_name'> {name} </h5>
                  <small className="client_review">
                    {review}
                  </small>
              </article>              
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials