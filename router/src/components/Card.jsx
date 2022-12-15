import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({src, url, title}) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${url}`)
    }
  return (
    <div className='box' onClick={handleClick}>

        <img src={src} alt="" />
        <h3>{title}</h3>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere molestiae maxime rerum sint 
            quaerat dolore et ipsam consequatur eum, repudiandae voluptatibus, nobis ab saepe nesciunt officiis quo ratione!
        </p>


    </div>
  )
}

export default Card