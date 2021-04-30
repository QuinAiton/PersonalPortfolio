import React from 'react';
import Styles from '../styles/Modal.module.scss';
import { MdClose } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Modal = ({
  modalClose,
  modalShow,
  title,
  description,
  stack,
  images,
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
