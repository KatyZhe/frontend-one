import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/Rectangle 11.jpg';
import icon_photo from '../../images/worker icon_photo.svg';
import icon_video from '../../images/worker icon_video.svg';
import icon_telephone from '../../images/contact icons_telephone.svg';
import icon_telegram from '../../images/contact icons _telegram.svg';
import icon_email from '../../images/contact icons_email.svg';

export const AboutMe = () => {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const handleContactOpen = () => {
    setIsContactOpen(!isContactOpen);
  };
  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen);
  };

const contactMenuClassName = `about-me__contact-container ${isContactOpen ? 'about-me__contact-container_visible' : ''}`

  return (
    <article className="about-me">
      <button
        className="about-me__button"
        onClick={() => navigate(-1)}
      />
      <div className="about-me__container about-me__container_aling_spbet">
        <div className=" about-me__container about-me__container_column about-me__container_small">
          <div className=" about-me__container about-me__container_aling_start">
            <h1 className="about-me__title">Алена Коновалова</h1>
            <span>
              <img
                src={icon_photo}
                alt=""
              />
            </span>
            <span>
              <img
                src={icon_video}
                alt=""
              />
            </span>
          </div>
          <p className="about-me__subtitle">Москва</p>
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Обо мне</h2>
            <p className="about-me__text">
              Меня зовут Алена и я профессионально снимаю фото и видео🤍 Буду рада познакомиться
              лично!
            </p>
          </div>
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Оборудование</h2>
            <p className="about-me__text">
              Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка Canon Speedlite
              430EX III-RT, свет Raylab Axio III 400 Basic Kit
            </p>
          </div>
          <div className="about-me__container about-me__container_aling_start">
            <article className="about-me__article">
              <button
                className="about-me__button-contact"
                onClick={handleContactOpen}
              >
                Показать контакты
              </button>
              <div className={contactMenuClassName}>
                <span className="about-me__contact-span">
                  <img
                    className="about-me__contact-icon"
                    src={icon_telephone}
                    alt=""
                  />
                  <p className="about-me__contact">+7 800 555 35 35</p>
                </span>
                <span className="about-me__contact-span">
                  <img
                    className="about-me__contact-icon"
                    src={icon_telegram}
                    alt=""
                  />
                  <p className="about-me__contact">@photo_grapher</p>
                </span>
                <span className="about-me__contact-span">
                  <img
                    className="about-me__contact-icon"
                    src={icon_email}
                    alt=""
                  />
                  <p className="about-me__contact">photo@example.com</p>
                </span>
              </div>
            </article>
            <button
              className="about-me__button-share"
              onClick={handleShareOpen}
            />
          </div>
        </div>
        <figure className="about-me__avatar">
          <img
            src={photo}
            className="about-me__avatar-image"
            alt=""
          />
        </figure>
      </div>
    </article>
  );
};
