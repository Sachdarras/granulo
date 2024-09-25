import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isRobot: false,
  });

  const [captcha, setCaptcha] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCaptchaChange = () => {
    setCaptcha(Math.random().toString(36).substring(2, 7)); // Exemple simple
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const captchaInput = document.getElementById('captchaInput').value;
    if (captchaInput !== captcha) {
      alert('Captcha incorrect, veuillez réessayer.');
      return;
    }

    emailjs.send('service_6io9lgn', 'template_adbxx4j', formData, 'FbmETirF_HLofrreA')
      .then((response) => {
        alert('Votre message a été envoyé avec succès!');
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          isRobot: false,
        });
        handleCaptchaChange();
      })
      .catch((error) => {
        alert('Une erreur est survenue lors de l\'envoi de votre message.');
      });
  };

  return (
    <>
      <div className='introcontact'>
        <h2>Contactez-nous</h2>
        <p>Voici comment nous contacter.</p>
      </div>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Société</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone (optionnel)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Objet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="isRobot"
                checked={formData.isRobot}
                onChange={handleChange}
                required
              />
              Je ne suis pas un robot
            </label>
          </div>
          <div className="form-group captcha">
            <label htmlFor="captcha">Captcha : {captcha}</label>
            <button type="button" onClick={handleCaptchaChange}>
              Regénérer
            </button>
            <label htmlFor="captchaInput">Veuillez entrer le captcha :</label>
            <input
              type="text"
              id="captchaInput"
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
