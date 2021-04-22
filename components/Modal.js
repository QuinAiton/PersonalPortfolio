import React from 'react';
import Image from 'next/image';
import Styles from '../styles/Modal.module.scss';
import { MdClose } from 'react-icons/md';

const Modal = ({ modalClose, modalShow, title, description, stack }) => {
  const stackItem = stack.map((item) => {
    return <li className={Styles.stack}>{item}</li>;
  });

  return (
    <>
      {modalShow ? (
        <div className={Styles.background}>
          <div className={Styles.modalWrapper}>
            <div className={Styles.modalImg}>
              <Image
                src='/familyMatters.png'
                alt='FamilyMatters Modal'
                height={700}
                width={800}
                // layout='fill'
              />
            </div>
            <div className={Styles.modalContent}>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul>{stackItem}</ul>
            </div>
            <div className={Styles.closeModalButton} aria-label='Close Modal'>
              <MdClose onClick={modalClose} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
