import React, { useState } from 'react';
import cn from 'classnames';

import section2Styles from './section2.module.scss';

function RenderSection2(props) {
  
  const [currentImage, setCurrentImage] = useState(0);
  const slideshowImages = [
    '/assets/IBG/5.png',
    '/assets/IBG/10.png',
    '/assets/IBG/11.png',
    '/assets/IBG/3.png',
    '/assets/IBG/7.png',
    '/assets/IBG/9.png',
    '/assets/IBG/13.png',
    '/assets/IBG/8.png',
    '/assets/IBG/6.png',
    '/assets/IBG/1.png',
    '/assets/IBG/2.png',
    '/assets/IBG/12.png',
  ];
  const goToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length); 
  };
  

  const [expandedVertical, setExpandedVertical] = useState(null);

  const toggleVertical = (index) => {
    setExpandedVertical(expandedVertical === index ? null : index);
  };

  const verticals = [
    {
      title: "Angel Syndicate",
      content: (
      <>
      We collaboratively leverage our capital, intellectual rigor, and collective academic and industry expertise to strategically invest in promising ventures with robust growth prospects.<br></br><br></br>
      Each investment is more than financial; it's an endorsement by the esteemed alumni and faculty of Imperial College London. Beyond capital, we equip invested companies with the vast expertise, network, and advisory capabilities our collective provides.</>
      )
    },
    {
      title: "Developer Hub",
      content: 
      <>
      Imperial College London is home to countless exceptionally talented engineers and developers who are always seeking innovative projects to engage with.
      <br></br><br></br>
      We invite companies seeking to attract new talented student builders into their ecosystem to get in touch. Hackathon invitations, project sponsorships, graduate/internship opportunities and project ideas are welcomed.
      </>
    },
    {
      title: "Research",
      content: <>
      ImperialDAO members propose their innovative and impactful projects for our research teams to pursue. These can be in collaboration with other ecosystems and research teams, as well as internally run. Projects also have the potential of receiving grants/funding from the DAO's treausury. <br></br><br></br>.
      </>
    },
    {
      title: "Alpha, Events, Networking",
      content: <>
      This vertical is the keystone of our DAO. We seek to converge the intellectually rigorous minds of Imperial College with the practical demands 
      of the rapidly evolving blockchain ecosystem. 
      
      <br></br><br></br>We share our market and investment insights all the way from macroeconomic analysis to memecoin trading, host networking events, workshops and conferences,
      and collaborative projects that connect our members with career opportunities, industry vanguards, co-founders and academics.
      </>
    }
  ];

  return (
    <section id="aboutUs" className={section2Styles.section2}>
      <div className={section2Styles.section21}>
        <img className={section2Styles.bottomBorder} src={'/assets/id-border-horizontal.png'} alt="Decorative Border"/>
        <div className={section2Styles.flex_col}>
          <div className={section2Styles.flex_col1}>
            <h1 className={section2Styles.hero_title}>About Us</h1>
            <h3 className={section2Styles.subtitle}>
             ImperialDAO pioneers as the first university DAO in the United Kingdom and the official DAO of Imperial College London, ranked the 2nd best university in the world.
             <br></br><br></br>
             Our activities consist of several verticals, and we serve as the governing body of the thriving Blockchain Society at Imperial College London which currently unites over 600 members.
             <br></br><br></br>
             Our bi-weekly events connect our ambitious pool of students, researchers, and professionals—from venture capitalists 
             and quantitative researchers to entrepreneurs, talented engineers, STEM undergraduates, market analysts, entrepreneurs, and post-doctoral researchers.
            <br></br><br></br>
             We regularly invite companies to connect with our thriving community, whether to raise funding, attract developers, share career opportunities, spread knowledge, or incite educational discussion.
             
             <br></br><br></br>
            We value radical generosity, intellectual rigor, critical thinking, delusional ambition, collaboration and honesty.
            </h3>
          </div>
          <div className={section2Styles.flex_col2}>
            <h1 className={section2Styles.big_title}>What we do</h1>
            <div className={section2Styles.flex_row}>
              {verticals.map((vertical, index) => (
                <div className={section2Styles.content_box} onClick={() => toggleVertical(index)} key={index}>
                  <div onClick={() => toggleVertical(index)} className={section2Styles.flex_col3}>
                    <h1 className={section2Styles.big_title1}>{vertical.title}</h1>
                    <button className={section2Styles.expandButton}>{expandedVertical === index ? '▲' : '▼'}</button>
                  </div>
                  {expandedVertical === index && (
                    <p className={section2Styles.subtitle1}>{vertical.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        
<h1 id={section2Styles.IBGTitle} className={section2Styles.big_title} >Imperial College Blockchain Society</h1>
      <div className={section2Styles.blockchainSociety}>
      
        <div className={section2Styles.leftColumn}>
        
          <p className={section2Styles.subtitle}>
          ImperialDAO serves as a key governing body of the Blockchain Society at Imperial College London, currently <b>600 members strong</b>. Our mission is to educate students and connect them with opportunities in the Blockchain Ecosystem. <br></br><br></br>We hold <b>bi-weekly events</b> hosted on our campus for
          members to learn and engage with the thriving Blockchain Ecosystem at the university. Our recent Global Blockchain and FinTech conference featured almost 700 attendees and a vast array of
          knowledgeable speakers and industry experts.
          </p><br></br>

          <p className={section2Styles.subtitle}>
          Projects seeking to connect and/or present to the Imperial Blockchain Society can get in touch at <a href="mailto:team@imperialdao.org">team@imperialdao.org</a> or at <a href="mailto:imperialblockchainsociety@imperial.ac.uk">imperialblockchainsociety@imperial.ac.uk.</a>
          </p>
        </div>
        <div className={section2Styles.rightColumn}>
          
        <img className={section2Styles.IBGPhoto} src={slideshowImages[currentImage]} alt="Blockchain Event" />

        <button className={section2Styles.arrowLeft} onClick={goToPrevImage}>‹</button>
        <button className={section2Styles.arrowRight} onClick={goToNextImage}>›</button>
        
        </div>
      </div>
      
      <img className={section2Styles.bottomBorder} src={'/assets/id-border-horizontal-bottom.png'}/>
      </div>
      
    </section>
  );
}

export default RenderSection2;

