import React, { useEffect } from 'react';
import sendForm from './Functions/sendForm';

const Request = () => (
  <section className="request">
    <div className="container">
      <form action="server.php" method="POST" className="form request__form" onSubmit={useEffect(sendForm, [])}>
        <label htmlFor="first-name" className="form__label">
          <input type="text" id="first-name" name="first-name" placeholder="First name" className="form__input" />
        </label>
        <label htmlFor="last-name" className="form__label">
          <input type="text" id="last-name" name="last-name" placeholder="Last name" className="form__input" />
        </label>
        <label htmlFor="email" className="form__label">
          <input type="text" id="email" name="email" placeholder="Email" className="form__input" />
        </label>
        <label htmlFor="mobile" className="form__label">
          <input type="text" id="mobile" name="mobile" placeholder="Mobile" className="form__input" />
        </label>
        <label htmlFor="location" className="form__label">
          <select id="location" name="location" className="form__input form__select">
            <option>Location</option>
            <option value="moscow">Moscow</option>
            <option value="new-york">New York</option>
          </select>
        </label>
        <button className="button form__button">Request</button>
      </form>
    </div>
  </section>
);

export default Request;
