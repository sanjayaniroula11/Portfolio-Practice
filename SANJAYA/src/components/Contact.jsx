import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


function Contact() {

  const [firstName, setFirstName] = useState('');



  const {setUser}= useContext(UserContext);

  const {user}= useContext(UserContext);


  const handleSubmit = (e) => {
      e.preventDefault()
      setUser({firstName})
  }

  
  return (
   
    <div className="contact-container">
        <form>
            <h1 className='font-bold text-3xl'>In Case You Need It.</h1>
            <br />

            {user ? <div className='w-full text-center text-2xl font-bold text-purple-400 '>Thank You {user.firstName} ! </div> : <h1 className='font-bold text-2xl'>Send Message Please</h1>}
      
            <input type="text" id="firstname" name='fname' placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required></input>
            <input type="text" id="lastname" name='lname' placeholder="Last Name" required></input>
            <input type="email"  id="email" name='email' placeholder="E-mail" required></input>
            <input type="text"  id="mobile" name='mobile' placeholder="Mobile" required></input>
            <h4 className='font-bold text-2xl'>Type Your Message Here...</h4>
            <textarea name='textbox' required></textarea>
            <input type="submit" value="Send" id="button" onClick={handleSubmit}
            ></input>

        </form>
    </div>
  )
}

export default Contact