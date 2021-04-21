import React, { useState, useEffect } from 'react';
import Styles from '../styles/Projects.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: ' #131e29',
    width: '80%',
    height: '80%',
  },
};

const projects = () => {
  const [isOpen, setOpen] = useState({
    familyMatterz: false,
    pinnet: false,
    surfSwap: false,
  });

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <Fade top>
          <h1>Projects</h1>
        </Fade>
        <Fade bottom>
          <div className={Styles.underline}></div>
        </Fade>
      </div>

      <div className={Styles.projects}>
        <div className={Styles.card}>
          <div className={Styles.item}>
            <div className={Styles.image}>
              <Image
                src='/familyMatters.png'
                alt='familiy matters'
                layout='fill'
              />
            </div>
            <div className={Styles.text}>
              <p>Family Matterz</p>
              <button
                onClick={() => setOpen({ ...isOpen, familyMatterz: true })}
              >
                Show More
              </button>
            </div>
          </div>
          <Modal
            isOpen={isOpen.familyMatterz}
            onRequestClose={() => setOpen({ ...isOpen, familyMatterz: false })}
            style={customStyles}
          >
            <button
              onClick={() => setOpen({ ...isOpen, familyMatterz: false })}
            >
              +
            </button>
            <p>Family Matterz</p>
          </Modal>
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.item} ${Styles.w2}`}>
            <div className={Styles.image}>
              <Image src='/my-pins.png' alt='Pinnet' layout='fill' />
            </div>
            <div className={Styles.text}>
              <p>Pinnet</p>
              <button onClick={() => setOpen({ ...isOpen, pinnet: true })}>
                Show More
              </button>
            </div>
          </div>
          <Modal
            isOpen={isOpen.pinnet}
            onRequestClose={() => setOpen({ ...isOpen, pinnet: false })}
            style={customStyles}
          >
            <button onClick={() => setOpen({ ...isOpen, pinnet: false })}>
              +
            </button>
            <p>Pinnet</p>
          </Modal>
        </div>

        <div className={Styles.card}>
          <div className={Styles.item}>
            <div className={Styles.image}>
              <Image src='/SurfShareHome.png' alt='SurfShare' layout='fill' />
            </div>
            <div className={Styles.text}>
              <p>Surf Swap</p>
              <button>Show More</button>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div className={Styles.item}>
            <div className={Styles.image}>
              <Image src='/Interview-Home.png' alt='SurfShare' layout='fill' />
            </div>
            <div className={Styles.text}>
              <p>Interview Schedular</p>
              <button>Show More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
