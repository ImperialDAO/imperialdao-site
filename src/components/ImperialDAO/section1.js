import React from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import section1Styles from './section1.module.scss';


function RenderSection1(props) {
  const history = useHistory();

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToMint = () => {
    history.push('/signet-mint');
  };

  return (
    <section className={section1Styles.section1}>
      
      <div className={section1Styles.flex_col}>
        <div className={section1Styles.wrapper}>
          
          <h3 onClick={() => handleScroll('aboutUs')} className={cn(section1Styles.subtitle, section1Styles.subtitle2)}>About Us</h3>
          <h3 onClick={() => handleScroll('members')} className={cn(section1Styles.subtitle, section1Styles.subtitle21)}>Members</h3>
          <h3 onClick={() => handleScroll('partners')} className={cn(section1Styles.subtitle, section1Styles.subtitle22)}>Partners</h3>
          <h3 onClick={() => handleScroll('apply')} className={cn(section1Styles.subtitle, section1Styles.subtitle23)}>Apply</h3>
          <h3 onClick={() => handleScroll('contact')} className={cn(section1Styles.subtitle, section1Styles.subtitle24)}>Contact</h3>
        </div>
        
        <div className={section1Styles.box} onClick={navigateToMint}>
        <img className={section1Styles.image2} src={"/assets/signet.png"} alt="alt text" />
        <h4 className={section1Styles.highlight}>Signet Mint (Members Only)</h4>
        
      </div>
        

        <img className={section1Styles.image1} src={'/assets/imperial_dao_crest_motif.png'} alt="alt text" />
      </div>
 

    </section>
  );
}

export default RenderSection1;
