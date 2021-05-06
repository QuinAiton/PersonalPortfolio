import React from 'react';
import Styles from '../styles/Modal.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdClose } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import { FiGithub } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Modal = ({
  modalClose,
  modalShow,
  title,
  description,
  stack,
  images,
  link,
}) => {
  const stackItem = stack.map((item, index) => {
    return (
      <li key={index} className={Styles.stack}>
        {item}
      </li>
    );
  });

  const imageItems = images.map((item, index) => {
    return (
      <div key={index}>
        <img src={item} alt='FamilyMatters Modal' height='auto' width='800px' />
      </div>
    );
  });

  return (
    <>
      {modalShow && (
        <div className={Styles.background}>
          <Fade bottom>
            <div className={Styles.modalWrapper}>
              <Carousel className={Styles.modalImg}>{imageItems}</Carousel>
              <div className={Styles.modalContent}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                  <h4>Tech Stack</h4>
                  <ul>{stackItem}</ul>
                  <a href={link} target='_blank'>
                    <button className={Styles.code}>
                      <p>CODE</p>
                      <FiGithub />
                    </button>
                  </a>
                </div>
              </div>
              <div className={Styles.closeModalButton} aria-label='Close Modal'>
                <MdClose onClick={modalClose} />
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Modal;
