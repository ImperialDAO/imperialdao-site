import React, { useState } from 'react';
import section2Styles from './section2.module.scss';

function RenderSection2(props) {
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

  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const verticals = [
    {
      title: "1. ImperialDAO",
      content: (
        <>
          <b>ImperialDAO Investment Fund</b><br></br>
          ImperialDAO is home to the largest fund in Imperial’s history by assets under management. Established in September 2024 by President Noor Elsheikh, the fund provides members with hands-on investment experience, helping participants hone their market knowledge, quantitative acument, soft skills, and networks.
          <br /><br />
          <b>Treasury Management</b><br></br>
          ImperialDAO pioneers the use of blockchain technology for democratic and secure management of the society’s treasury, empowering members to allocate resources effectively and transparently.
          <br /><br />
          <b>Community Impact</b><br></br>
          Members gain access to exclusive research, developer projects, and investment opportunities, fostering collaboration and knowledge-sharing across the DAO.
        </>
      ),
    },
    {
      title: "2. IBF Events & Education",
      content: (
        <>
          IBF Events connects Imperial’s blockchain and fintech community with global leaders and innovators.
<br></br><br></br>
<b>Annual Conference</b><br></br>
In March 2024, IBF hosted the Global FinTech and Blockchain Conference, with over 700 attendees. Plans are underway to establish this as an annual flagship event in Imperial’s prestigious Great Hall.
<br /><br />
<b>Bi-Weekly Educational Events</b><br></br>
On-campus educational events include technical workshops, lecture series, and high-profile industry panels, designed to expand members’ knowledge and skill sets.
<br /><br />
<b>Competitions and Networking</b><br></br>
Regular events and competitions provide opportunities for members to apply their skills, connect with industry leaders, and explore emerging trends in blockchain and fintech.
        </>
      ),
    },
    {
      title: "3. IBF Developers",
      content: (
        <>
          Launched in December 2024, the IBF Developer Team is a highly competitive group of blockchain-focused developers and designers.
<br></br><br></br>
<b>Innovation</b><br></br>
The team works on cutting-edge internal projects that push the boundaries of blockchain applications, such as developing decentralized solutions, smart contract tools, and experimental dApps.
<br /><br />
<b>Consulting</b><br></br>
IBF Developers provide professional blockchain consulting services to industry partners, addressing real-world business challenges with technical solutions.
<br /><br />
<b>Competitions</b><br></br>
The team represents Imperial College London at international hackathons and blockchain events, showcasing their expertise and winning recognition on the global stage.
        </>
      ),
    },
  ];

  return (
    <section id="aboutUs" className={section2Styles.section2}>
      <div className={section2Styles.section21}>
        <img className={section2Styles.bottomBorder} src={'/assets/id-border-horizontal.png'} alt="Decorative Border" />
        <div className={section2Styles.flex_col}>
          <div className={section2Styles.flex_col1}>
            <h1 className={section2Styles.hero_title}>About Us</h1>
            <h3 className={section2Styles.subtitle}>
            The Imperial Blockchain & FinTech Society (IBF), originally the Imperial Blockchain Group, was founded in 2021 by alumni Imran Khan and Sean Yu as a small splinter group of blockchain enthusiasts under the wing of Imperial Investment Society. By 2022, IBF had grown to 500 members and became an independent society, reflecting Imperial College London's status as a global hub for innovation (ranked 2nd worldwide).
<br></br><br></br>
In February 2024, under the leadership of President Noor Elsheikh, the society established ImperialDAO, the first university DAO in history. This pioneering initiative introduced blockchain-based democratic governance for managing the society’s treasury and fostering a thriving ecosystem of developer projects, exclusive opportunities, and research initiatives.
<br></br><br></br>
March 2024 saw the society host the Global FinTech and Blockchain Conference, with over 700 attendees, further cementing its reputation as a leader in the field. By September 2024, Noor established the ImperialDAO Investment Fund, the largest in Imperial’s history by assets under management, offering members unparalleled hands-on investment experience.
<br></br><br></br>
In December 2024, the society launched the IBF Developer Team, bringing together a competitive group of blockchain-focused developers and designers to innovate, consult, and compete internationally.
<br></br><br></br>
Today, IBF thrives as a gated community of exceptional staff, students, and alumni, united by a passion for blockchain and fintech.
            </h3>
          </div>
          <div className={section2Styles.flex_col2}>
            {verticals.map((vertical, index) => (
              <div className={section2Styles.fullWidthBox} key={index}>
                <h1 className={section2Styles.boxTitle}>{vertical.title}</h1>
                <p className={section2Styles.boxContent}>{vertical.content}</p>
              </div>
            ))}
          </div>
        </div>
        <h1 id={section2Styles.IBGTitle} className={section2Styles.big_title}>Events and Consulting Project Collaboration</h1>
        <div className={section2Styles.blockchainSociety}>
          <div className={section2Styles.leftColumn}>
            <p className={section2Styles.subtitle}>
              ImperialDAO serves as a key governing body of the Blockchain Society at Imperial College London, currently <b>600 members strong</b>. Our mission is to educate students and connect them with opportunities in the Blockchain Ecosystem.
              <br /><br />
              We hold <b>bi-weekly events</b> hosted on our campus for members to learn and engage with the thriving Blockchain Ecosystem at the university. Topics we have covered have included DeFi, Venture Capital, Blockchain Development, Quant Trading and more.
            </p>
            <br />
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
        <img className={section2Styles.bottomBorder} src={'/assets/id-border-horizontal-bottom.png'} />
      </div>
    </section>
  );
}

export default RenderSection2;
