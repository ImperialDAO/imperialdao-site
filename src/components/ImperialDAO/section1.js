import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import section1Styles from './section1.module.scss';

function RenderSection1(props) {
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  const navigateToMint = () => {
    history.push('/signet-mint');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={section1Styles.section1}>
      <img className={section1Styles.bottomBorder}  src={'/assets/id-border-horizontal.png'} alt="Decorative Border"/>
      <div className={section1Styles.flex_col}>
        <div className={section1Styles.wrapper}>
          <div className={section1Styles.mobileNavBar} >
          <div className={section1Styles.menuIcon} onClick={toggleMenu}>
            &#9776; {/* Hamburger Icon */}
          </div>
          </div>
          <div className={cn(section1Styles.navbar, { [section1Styles.open]: isMenuOpen })}>
            <h3 onClick={() => handleScroll('aboutUs')} className={section1Styles.subtitle}>About Us</h3>
            <h3 onClick={() => handleScroll('members')} className={section1Styles.subtitle}>Members</h3>
            <h3 onClick={() => handleScroll('partners')} className={section1Styles.subtitle}>Partners</h3>
            <h3 onClick={() => handleScroll('apply')} className={section1Styles.subtitle}>Apply</h3>
            <h3 onClick={() => handleScroll('contact')} className={section1Styles.subtitle}>Contact</h3>
          </div>
        </div>

        <div className={section1Styles.box} onClick={navigateToMint}>
          <img className={section1Styles.image2} src={"/assets/signet.png"} alt="Signet Mint" />
          <h4 className={section1Styles.highlight}>Signet Mint (Members Only)</h4>
        </div>
        <img className={section1Styles.image1} src={'/assets/imperial_dao_crest_motif.png'} alt="Imperial DAO Crest" />
      </div>
    </section>
  );
}

export default RenderSection1;
