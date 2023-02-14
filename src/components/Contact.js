import {Link, Outlet} from 'react-router-dom'
import React from 'react'

function Contact() {
  return (
    <div>      <br />
      <br />
      ,<br />
      <div className='container'>
        <h3>Welcome to Contact page </h3>
        <p className='w-50'>
          <b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus voluptates, officia exercitationem hic officiis quis vel quam nesciunt doloribus, nisi sint delectus inventore similique sequi quisquam, molestias adipisci atque. </b></p>
      <Link to="channel">Through-Channel</Link>
      <br/>
      <Link to="facebook">Through-Facebook</Link>
    <Outlet/>

      </div>



    </div>
  )
}

export default Contact