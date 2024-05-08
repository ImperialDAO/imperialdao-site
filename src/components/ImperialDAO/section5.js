import React from 'react';
import cn from 'classnames';

import section5Styles from './section5.module.scss';

function renderSection5(props) {
  return (
    <section id="apply" className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        <div className={section5Styles.flex_col1}>
          <h1 className={section5Styles.hero_title}>Apply to join</h1>
          <h3 className={section5Styles.subtitle}>
            Membership to ImperialDAO is currently exclusive to staff, alumni and students of Imperial College London.
            Applications are reviewed regularly and selection is based on the existing members being able to reach a majority consensus on your admission.
            As a member of a decentralised organisation, you will be able to participate in all governance decisions, make/vote on proposals, and make a real contribution to the direction of the organisation.
            <br></br><br></br>
            Those interested in joining the DAO can <a href="https://forms.gle/3PB7H41CUHBkZpGW8"><b>apply here.</b></a>
            
            <br></br><br></br>
            
          </h3>
        </div>

        <div id="contact" className={section5Styles.flex_col2}>
          <h1 className={section5Styles.hero_title1}>Get in touch</h1>
          <h3 className={section5Styles.subtitle}>
          For inquiries and partnerships, please email <a href="team@imperialdao.org">team@imperialdao.org</a> or send a message to <u>@theimperialdao</u> on X/Twitter
          </h3>
        </div>
      </div>

      <div className={section5Styles.content_box3}>
      <img src={'/assets/id-border-horizontal.png'}/>
        <div className={section5Styles.flex_row}>
          <img className={section5Styles.image5} src={'/assets/white_imperial_dao_crest.png'} alt="alt text" />

          <div className={section5Styles.flex_col3}>
            <img className={section5Styles.image3} src={'/assets/social_media_icon_set.png'} alt="alt text" />
            <h5 className={section5Styles.highlight1}>
           
              <br></br>
              ImperialDAO
              <br></br>AGITE UT UNUM FLOREATE UT MULTI<br></br>Act as one, prosper as many
            </h5>
            <img className={section5Styles.image4} src={'/assets/navy_blue_id_seal.png'} alt="alt text" />
          </div>
        </div>
        <img src={'/assets/id-border-horizontal-bottom.png'}/><br></br>
        
      </div>
      
    </section>
    
  );
}

export default renderSection5;
