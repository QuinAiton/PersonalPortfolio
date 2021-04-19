import React from 'react';
import Styles from '../../styles/About.module.scss';
import Image from 'next/image';

const FocusCards = (props) => {
  return (
    <div className={Styles.interestCard}>
      <div className={Styles.hex}>
        <Image src={props.image} alt='focus cards' height={100} width={100} />
      </div>
      <div className={Styles.cardBody}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default FocusCards;
