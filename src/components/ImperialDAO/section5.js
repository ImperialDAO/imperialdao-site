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
            Applications are reviewed regularly and selection is based on the current IBF committee reaching a majority consensus on your admission.<br></br><br></br>

            To apply to the ImperialDAO Investment Fund, either as an active trader or an observer for educational benefit, please <a href="https://forms.gle/xVGReTCLZByuczfC9"><b>apply here.</b></a><br></br><br></br>
            
            Those interested in joining the DAO as a general member can <a href="https://forms.gle/bEx2ikFYQNkAZvYQ9"><b>apply here.</b></a>
            <br></br>
            <br></br>To join the committee of the Imperial Blockchain and FinTech Society, please email us and enquire about current openings.
            
            <br></br><br></br>
            
          </h3>
        </div>

        <div id="contact" className={section5Styles.flex_col2}>
          <h1 className={section5Styles.hero_title1}>Get in touch</h1>
          <h3 className={section5Styles.subtitle}>
          For enquiries and partnerships relating to ImperialDAO, please email <a href="team@imperialdao.org">team@imperialdao.org</a> or send a message to <u>@theimperialdao</u> on X/Twitter<br></br><br></br>
          For enquiries relating to the Imperial Blockchain and FinTech Society, please email <a href="team@imperialdao.org">icbcs@ic.ac.uk</a>
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
