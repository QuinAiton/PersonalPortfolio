import React from 'react';
import Styles from '../styles/Projects.module.scss';
import Image from 'next/image';
const projects = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.project}>
        {/* <Image /> */}
        <P>Description</P>
        <p>Tech Stack</p>
      </div>
    </div>
  );
};

export default projects;
