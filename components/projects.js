import React, { useState, useEffect } from 'react';
import Styles from '../styles/Projects.module.scss';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Modal from './Modal';

const projects = () => {
  const [modalShow, setModalShow] = useState({
    familyMatterz: false,
    pinnet: false,
    surfSwap: false,
    interview: false,
    tinyApp: false,
    travellersHandbook: false,
  });

  return (
    <Roll right top>
      <div id='projects' className={Styles.container}>
        <div className={Styles.title}>
          <Fade top>
            <h1>My Projects</h1>
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
              images={[
                '/familyMatters.png',
                '/FamilyMatterz2.png',
                '/FamilyMatterz3.png',
              ]}
              modalShow={modalShow.familyMatterz}
              modalClose={() =>
                setModalShow({ ...modalShow, familyMatterz: false })
              }
              link={'https://github.com/Sirrom84/Family-Matterz.git'}
            />
          </div>

          <div className={Styles.card}>
            <div className={`${Styles.item} ${Styles.w2}`}>
              <div className={Styles.image}>
                <Image src='/my-pins.png' alt='Pinnet' layout='fill' />
              </div>
              <div className={Styles.text}>
                <p>Pinnet</p>
                <button
                  onClick={() => setModalShow({ ...modalShow, pinnet: true })}
                >
                  Show More
                </button>
              </div>
            </div>
            <Modal
              title='Pinnet'
              description='Pinterest-inspired resource wall app. Users can explore, save, and organize links to their favorite resources and like, comment or rate those of others.'
              stack={['PostgreSQL', 'Express', 'EJS', 'Node']}
              images={['/my-pins.png', '/new-pin-form.png']}
              modalShow={modalShow.pinnet}
              modalClose={() => setModalShow({ ...modalShow, pinnet: false })}
              link={'https://github.com/ericos-bennett/pinnet.git'}
            />
          </div>

          <div className={Styles.card}>
            <div className={Styles.item}>
              <div className={Styles.image}>
                <Image src='/SurfShareHome.png' alt='SurfShare' layout='fill' />
              </div>
              <div className={Styles.text}>
                <p>Surf Swap</p>
                <button
                  onClick={() => setModalShow({ ...modalShow, surfSwap: true })}
                >
                  Show More
                </button>
              </div>
            </div>
            <Modal
              title='Surf Swap'
              description='Surfing community hub that lets users create a profile, browse and purchase surf equipment, interact with fellow surfers through forums and ride shares and check the latest surf reports.'
              stack={['MongoDB', 'Express', 'EJS', 'Node']}
              images={[
                '/SurfShareHome.png',
                '/SurfShareBargin.png',
                '/SurfShareShow.png',
                'SurfShareForum.png',
              ]}
              modalShow={modalShow.surfSwap}
              modalClose={() => setModalShow({ ...modalShow, surfSwap: false })}
              link={'https://github.com/QuinAiton/SurfShare.git'}
            />
          </div>
          <div className={Styles.card}>
            <div className={Styles.item}>
              <div className={Styles.image}>
                <Image
                  src='/Interview-Home.png'
                  alt='Interview Scheduler'
                  layout='fill'
                />
              </div>
              <div className={Styles.text}>
                <p>Interview Schedular</p>
                <button
                  onClick={() =>
                    setModalShow({ ...modalShow, interview: true })
                  }
                >
                  Show More
                </button>
              </div>
            </div>
            <Modal
              title='Interview Schedular'
              description='Interview Scheduler is a full stack web application that allows for users to create, manage and organize their interviews in an effort to help stream line the hiring process.'
              stack={['PostgreSQL', 'React', 'Express', 'Node']}
              images={[
                '/Interview-Home.png',
                '/Interview-Add.png',
                '/Interview-delete.png',
              ]}
              modalShow={modalShow.interview}
              modalClose={() =>
                setModalShow({ ...modalShow, interview: false })
              }
              link={'https://github.com/QuinAiton/Interview-Scheduler.git'}
            />
          </div>

          <div className={Styles.card}>
            <div className={Styles.item}>
              <div className={Styles.image}>
                <Image src='/Login.png' alt='TinyApp' layout='fill' />
              </div>
              <div className={Styles.text}>
                <p>Tiny App</p>
                <button
                  onClick={() => setModalShow({ ...modalShow, tinyApp: true })}
                >
                  Show More
                </button>
              </div>
            </div>
            <Modal
              title='TinyApp'
              description='TinyApp is a full stack web application built with Node and Express that allows users to create an account and keep a list of their favourite URLs in a shortend form (à la bit.ly).'
              stack={['MongoDB', 'Express', 'EJS', 'Node']}
              images={['/Login.png', '/URLs_home.png', '/Create_URL.png']}
              modalShow={modalShow.tinyApp}
              modalClose={() => setModalShow({ ...modalShow, tinyApp: false })}
              link={'https://github.com/QuinAiton/tinyApp.git'}
            />
          </div>

          <div className={Styles.card}>
            <div className={Styles.item}>
              <div className={Styles.image}>
                <Image
                  src='/travellersHandbook.png'
                  alt='travellersHandbook'
                  layout='fill'
                />
              </div>
              <div className={Styles.text}>
                <p>Travellers Handbook</p>
                <button
                  onClick={() =>
                    setModalShow({ ...modalShow, travellersHandbook: true })
                  }
                >
                  Show More
                </button>
              </div>
            </div>
            <Modal
              title='Travellers Handbook'
              description='Travellers Handbook is a campsite database that allows users to add, rate and comment on campsites.'
              stack={['MongoDB', 'Express', 'EJS', 'Node']}
              images={[
                '/travellersHandbook.png',
                '/travellersHandbook2.png',
                '/TravellersHandbook3.png',
              ]}
              modalShow={modalShow.travellersHandbook}
              modalClose={() =>
                setModalShow({ ...modalShow, travellersHandbook: false })
              }
              link={'https://github.com/QuinAiton/TravellersHandbook.git'}
            />
          </div>
        </div>
      </div>
    </Roll>
  );
};

export default projects;
