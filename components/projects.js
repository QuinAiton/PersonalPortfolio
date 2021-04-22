import React, { useState } from 'react';
import Styles from '../styles/Projects.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Modal from './Modal';
const projects = () => {
  const [modalShow, setModalShow] = useState({
    familyMatterz: false,
    pinnet: false,
    surfSwap: false,
    interview: false,
  });

  // const closeModal = (name) => {
  //   setModalShow({ ...modalShow, name: false });
  // };

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
                onClick={() =>
                  setModalShow({ ...modalShow, familyMatterz: true })
                }
              >
                Show More
              </button>
            </div>
          </div>
          <Modal
            title='Family Matterz'
            description='Built on a 2 week deadline, this web application was designed with the needs of groups and families to stay connected in a safe, familiar and convenient environment. Built as a mobile web app on a stack of React, NodeJs, and MongoDb, Family Matterz takes the guesswork out of organizing and saves time for the things that matter most, family.'
            stack={['MongoDB', 'Express', 'React', 'Node']}
            modalShow={modalShow.familyMatterz}
            modalClose={() =>
              setModalShow({ ...modalShow, familyMatterz: false })
            }
          />
        </div>

        <div className={Styles.card}>
          <div className={`${Styles.item} ${Styles.w2}`}>
            <div className={Styles.image}>
              <Image src='/my-pins.png' alt='Pinnet' layout='fill' />
            </div>
            <div className={Styles.text}>
              <p>Pinnet</p>
              <button>Show More</button>
            </div>
          </div>
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
