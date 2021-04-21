import React from 'react';
import Styles from '../styles/Projects.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
const projects = () => {
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
              <button>Show More</button>
            </div>
          </div>
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
