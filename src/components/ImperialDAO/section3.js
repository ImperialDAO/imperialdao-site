import React from 'react';
import cn from 'classnames';

import section3Styles from './section3.module.scss';

function renderSection3(props) {
  return (
    <section id="members" className={section3Styles.section3}>
      
      <div className={section3Styles.flex_col}>
      <img src={'/assets/navy_blue_id_seal.png'}/>
      
        <h1 className={section3Styles.hero_title}>Members</h1>

        <div className={section3Styles.grid}>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
              <img className ={section3Styles.memberImg} src="/assets/members/noorgme.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Noor Elsheikh</h3>
            <div className={section3Styles.text}>DAO Founder, Society Chair</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/imran.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Imran Khan</h3>
            <div className={section3Styles.text}>Society Founder & Chair 2022/23, Degen</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Sean.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Sean Yu</h3>
            <div className={section3Styles.text}>Infomon.ai Founder, Society Chair 2022/23</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/greninja.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>greninja.eth</h3>
            <div className={section3Styles.text}>KOL, Imperial Computer Scientist, Degen</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Ferda.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Dr. Ferda Ozdemir Sonmez, Ph.D.</h3>
            <div className={section3Styles.text}>Imperial Researcher, Computer Scientist</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Michael.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Dr. Michael Suarez</h3>
            <div className={section3Styles.text}>Quantitative Researcher</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Julien.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Julien Pelegri @thatismyquant</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Merov Club Founder, Q42 Founder, Quant</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg}  src="/assets/members/arkhamapollo.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Apollo</h3>
            <div className={section3Styles.text}>VP at Arkham Intelligence</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Shafi.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Shafi Maahe</h3>
            <div className={section3Styles.text}>Imperial Mechanical Engineer, Society Vice Chair</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Saran.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Saran (Tee) Punpipatpaiboon</h3>
            <div className={section3Styles.text}>TSIN Co-Founder, Imperial Design Engineer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Weitong.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Weitong Zhang</h3>
            <div className={section3Styles.text}>AI/ML PhD Candidate, CuraWell Co-Founder</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Zion.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Zion</h3>
            <div className={section3Styles.text}>Inventor, Onairos Founder</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Minghan.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Minghan Xiao</h3>
            <div className={section3Styles.text}>Imperial Biological Engineer, Society Head of Research and Marketing</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Jacob.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Jacob Walker</h3>
            <div className={section3Styles.text}>VC Scout, Imperial BioEngineer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Ridhi.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ridhi Maheswari</h3>
            <div className={section3Styles.text}>Society Co-Chair, Student Developer</div>
          </div>

          

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Yuvan.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Yuvan Chikka</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Imperial Mathematician & Computer Scientist, AI/ML Expert, Web3 Developer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Jaiditya.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Jaiditya Khemani</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Imperial Computer Science, Web3 Dev, Entrepreneur</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Lolezio.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Lolézio Viora Marquet</h3>
            <div className={section3Styles.text}>Imperial Engineer, AI/ML Expert</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} id={section3Styles.img80} src="/assets/members/zz.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>ZZ</h3>
            <div className={section3Styles.text}>Bitcoin Maxi, Imperial Chemical Engineer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/angela.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Angela Meilan Farese</h3>
            <div className={section3Styles.text}>Imperial Biological Scientist</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Dylan.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Dylan Chua</h3>
            <div className={section3Styles.text}>Imperial Mechanical Engineer, Full-Stack Developer</div>
          </div>

          

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/strangers/stranger (7).png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Guanzhong Hu</h3>
            <div className={section3Styles.text}>Market Analyst, Imperial Chemist</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Ali.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ali Kilic</h3>
            <div className={section3Styles.text}>Imperial Mathematician & Computer Scientist, Quant Developer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/ibrahim.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ibrahim</h3>
            <div className={section3Styles.text}>Imperial Civil Engineer, DeSci Researcher</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Dariyan.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Dariyan Khan</h3>
            <div className={section3Styles.text}>Imperial & MIT Mathematician</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Eren.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Eren Geridonmez</h3>
            <div className={section3Styles.text}>Imperial Computer Scientist</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/strangers/stranger (11).png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Yukeng Zhang</h3>
            <div className={section3Styles.text}>Imperial Chemist, Quant</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Szonja.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Szonja Skenderovic</h3>
            <div className={section3Styles.text}>Entrepreneur, Imperial BioTech</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Mehmet.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Mehmet Kaan Nur</h3>
            <div className={section3Styles.text}>Imperial Computer Scientist, Ex-Goldman Sachs</div>
          </div>
          
          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Quham.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Quham Adefila</h3>
            <div className={section3Styles.text}>Inspire Maths Founder, AI/ML MEng, Ex-JP Morgan/G-Research</div>
          </div>
        

        <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} id={section3Styles.img120} src="/assets/members/splitzz.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Mohamad Ghassan Alhalabi</h3>
              <div className={section3Styles.text}>Imperial Aeronautical Engineer</div>
            </div>
        

        <div className={section3Styles.item}>
        <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Nicholas.jpeg"/>
            </div>
        <h3 className={section3Styles.subtitle1}>Nicholas Gerard</h3>
        <div className={section3Styles.text}>Imperial Chemical Engineer, Developer</div>
        </div>
        </div>
        </div>
        

    </section>
  );
}

export default renderSection3;
