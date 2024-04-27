import React from 'react'

function Contact() {
  return (
    <div class="contact-container">
        <form >
            <h1 className='font-bold text-3xl'>In Case You Need It.</h1>
            
            <input type="text" id="firstname" placeholder="First Name" required></input>
            <input type="text" id="lastname" placeholder="Last Name" required></input>
            <input type="email"  id="email" placeholder="E-mail" required></input>
            <input type="text"  id="mobile" placeholder="Mobile" required></input>
            <h4 className='font-bold text-2xl'>Type Your Message Here...</h4>
            <textarea required></textarea>
            <input type="submit" value="Send" id="button"></input>

        </form>
    </div>
  )
}

export default Contact