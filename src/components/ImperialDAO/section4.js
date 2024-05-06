import React from 'react';
import cn from 'classnames';

import section4Styles from './section4.module.scss';

function renderSection4(props) {
  return (
    <section id="partners" className={section4Styles.section4}>
      
      <div className={section4Styles.section41}>
      <img className={section4Styles.bottomBorder} src={'/assets/id-border-horizontal.png'}/>
        <div className={section4Styles.flex_col}>
          <h1 className={section4Styles.hero_title}>Partners</h1>

          <div className={section4Styles.flex_col1}>
            <div className={section4Styles.flex_row}>
            <img className={section4Styles.image} src={'/assets/partners/nethermind_logo.jpg'} alt="alt text" />

              <div className={section4Styles.flex_col2}>
                <h1 className={section4Styles.hero_title1}>Nethermind</h1>
                <h3 className={section4Styles.subtitle}>
                Nethermind is a leading infrastructure builder, researcher and core development team in the blockchain space. We empower enterprises and developers worldwide to access and build on the decentralized web.
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row}>
              <img className={section4Styles.image} src={'/assets/partners/Q42_logo.jpg'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Q42 Ventures</h1>
                <h3 className={section4Styles.subtitle}>
                Q42 is a new category of exchange in the making. Building a community first ecosystem of active finance products for Web3.{' '}
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row}>
            <img className={section4Styles.image} src={'/assets/partners/daobase_logo.jpg'} alt="alt text" />

              <div className={section4Styles.flex_col2}>
                <h1 className={section4Styles.hero_title1}>DAOBase.ai</h1>
                <h3 className={section4Styles.subtitle}>
                  DAOBase.ai is the largest DAO Search Engine and Aggregator in the world, providing valuable insight metrics about hundreds of thousands of DAOs across the globe.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <img className={section4Styles.bottomBorder} src={'/assets/id-border-horizontal-bottom.png'}/>
      </div>
      
    </section>
  );
}

export default renderSection4;
