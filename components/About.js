import React from 'react';
import Styles from '../styles/About.module.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className={Styles.container}>
      <div className={Styles.title}>
        <Fade>
          <h1>About Me</h1>
        </Fade>
        <Fade Right>
          <div className={Styles.underline}></div>
        </Fade>
      </div>

      <div className={Styles.content}>
        <Bounce left cascade>
          <div className={Styles.container1}>
            <div className={Styles.interestCard}>
              <Image
                src='/fast.png'
                alt='speed card'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h2>Speed</h2>
                <p>Fast load times, happy users and better SEO scores</p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/responsive.png'
                alt='responsive card'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h2>Responsive</h2>
                <p>
                  Web pages created to provide exceptional user experiences
                  across all devices.
                </p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/intuitive.png'
                alt='intuitive card'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h2>Intuitive</h2>
                <p>Designs that work the way users expect them to.</p>
              </div>
            </div>
            <div className={Styles.interestCard}>
              <Image
                src='/dynamic.png'
                alt='dynamic card'
                height={100}
                width={100}
              />
              <div className={Styles.cardBody}>
                <h2>Dynamic</h2>
                <p>
                  Sites that are database driven giving unique experiences
                  tailored to each user.
                </p>
              </div>
            </div>
          </div>
        </Bounce>
        <div className={Styles.container2}>
          <div className={Styles.bio}>
            <Rotate top>
              <div className={Styles.img}>
                <Image
                  src='/NeahBay.jpg'
                  alt='profile'
                  height={400}
                  width={400}
                />
              </div>
            </Rotate>
            <Bounce left>
              <p>
                My name is Quinten Aiton and I am a full-stack developer,
                currently living in Victoria, BC. I have a Bachelor of Science
                from the University of Victoria where I specialized in
                Geomatics, and a diploma of full stack development from
                Lighthouse Labs. I love creating intuitive interactive
                applications for the web and have a passion for green tech. I am
                both driven and self-motivated, and I am constantly
                experimenting with new technologies and techniques. I am very
                passionate about Web Development, and always looking for
                opportunities to better myself as a developer.
                <br />
                When Im not at my desk, you can find me looking for waves on the
                west coast, exploring the beautiful mountains BC has to offer,
                or in the skate park working on some new tricks.
              </p>
            </Bounce>
          </div>
          <div className={Styles.skills}>
            <Bounce right>
              <p>HTML</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.html}`}>
                  90%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>CSS</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.css}`}>80%</div>
              </div>
            </Bounce>
            <Bounce right>
              <p>JavaScript</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.js}`}>85%</div>
              </div>
            </Bounce>
            <Bounce right>
              <p>React.js</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.react}`}>
                  75%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>Next.js</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.next}`}>
                  70%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>Node.js</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.node}`}>
                  85%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>Mongo DB</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.mongo}`}>
                  85%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>PostGreSQL</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.postgres}`}>
                  70%
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <p>Python</p>
              <div className={Styles.bar}>
                <div className={`${Styles.percentage}, ${Styles.python}`}>
                  60%
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
