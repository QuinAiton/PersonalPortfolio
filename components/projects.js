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
          <div className={Styles.outer}>
            <div className={Styles.inner}>
              <Image
                src='/familyMatters.png'
                alt='Pinnet'
                height={600}
                width={800}
              />
            </div>
          </div>
          <div className={Styles.description}>
            <div>
              <h2>Family Matterz</h2>
              <p>
                Built on a 2 week deadline, this web application was designed
                with the needs of groups and families to stay connected in a
                safe, familiar and convenient environment. Built as a mobile web
                app, Family Matterz takes the guesswork out of organizing and
                saves time for the things that matter most, family.
              </p>
            </div>
            <div>
              <ul className={Styles.tech}>
                <li>React</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>Socket IO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
