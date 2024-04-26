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
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula."
    },
    {
      title: "Developer House",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula."
    },
    {
      title: "Start-Up Launchpad",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula."
    },
    {
      title: "Alpha, Knowledge, Networking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula."
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio
              feugiat vel. Aliquam vitae consequat elit. 
              <br />
              Sed volutpat quam sapien, sit amet lacinia felis molestie hendrerit. Sed ut eleifend libero.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit ligula.
          </p><br></br>

          <p className={section2Styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel.
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

