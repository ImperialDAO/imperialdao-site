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
              <img className={section4Styles.image} src={'/assets/partners/collab_currency_logo.jpeg'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Collab+Currency</h1>
                <h3 className={section4Styles.subtitle}>
                Collab+Currency is a crypto-focused venture fund backing early-stage projects building the next generation of culture and consumer technology.{' '}
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row}>
              <img className={section4Styles.image} src={'/assets/partners/Solana_logo.png'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Solana Foundation</h1>
                <h3 className={section4Styles.subtitle}>
                SuperteamUK champion the Solana Foundation in the United Kingdom, leading the country's community of best talent learning, earning and building in Crypto.{' '}
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row}>
              <img className={section4Styles.image} src={'/assets/partners/SWC.jpg'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Stand Wth Crypto</h1>
                <h3 className={section4Styles.subtitle}>
                An advocacy organisation led by Coinbase, focused on mobilising the crypto community to directly engage in the nation's legislative process.{' '}
                </h3>
              </div>
            </div>


            <div className={section4Styles.flex_row}>
              <img className={section4Styles.image} src={'/assets/partners/Q42_logo.jpg'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Q42</h1>
                <h3 className={section4Styles.subtitle}>
                Q42 is a community-first ecosystem of active finance products for Web3.{' '}
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
