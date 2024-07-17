import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ firstName });
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl text-yellow-400">In Case You Need It.</h1>
        <br />
        {user ? (
          <div className="success-message">
            Thank You {user.firstName} !
          </div>
        ) : (
          <h1 className="send-message">Send Message Please</h1>
        )}
        <Input type="text" id="firstname" name="fname" placeholder="First Name" value={firstName} onChange={setFirstName} required />
        <Input type="text" id="lastname" name="lname" placeholder="Last Name" required />
        <Input type="email" id="email" name="email" placeholder="E-mail" required />
        <Input type="text" id="mobile" name="mobile" placeholder="Mobile" required />
        <h4 className="message-label">Type Your Message Here...</h4>
        <textarea name="textbox" required />
        <button type="submit" id="button">
          Send
        </button>
      </form>
    </div>
  );
}

function Input({ type, id, name, placeholder, value, onChange, required }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default Contact;
