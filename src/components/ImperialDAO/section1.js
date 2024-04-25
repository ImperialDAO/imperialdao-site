import React from 'react';
import cn from 'classnames';

import section1Styles from './section1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.flex_col}>
        <div className={section1Styles.wrapper}>
          <h3 className={section1Styles.subtitle2}>About Us</h3>
          <h3 className={section1Styles.subtitle21}>Members</h3>
          <h3 className={section1Styles.subtitle22}>Partners</h3>
          <h3 className={section1Styles.subtitle23}>Apply</h3>
          <h3 className={section1Styles.subtitle24}>Contact</h3>
        </div>

        <img className={section1Styles.image1} src={'/assets/imperial_dao_crest_motif.png'} alt="alt text" />
      </div>

      <div className={section1Styles.box}>
        <img className={section1Styles.image2} src={"/assets/signet.png"} alt="alt text" />
        <h4 className={section1Styles.highlight}>Signet Mint (For Members)</h4>
      </div>
    </section>
  );
}

export default renderSection1;
