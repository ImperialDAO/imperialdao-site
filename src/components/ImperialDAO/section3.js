import React from 'react';
import cn from 'classnames';

import section3Styles from './section3.module.scss';

function renderSection3(props) {
  return (
    <section id="members" className={section3Styles.section3}>
      
      <div className={section3Styles.flex_col}>
      <img src={'/assets/navy_blue_id_seal.png'}/>
      
        <h1 className={section3Styles.hero_title}>Notable Members</h1>

        <div className={section3Styles.grid}>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
              <img className ={section3Styles.memberImg} src="/assets/members/Noor.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Noor Elsheikh</h3>
            <div className={section3Styles.text}>DAO Founder <br></br>IBF Chair (2023-2025)<br></br>Chief Investment Officer</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Sean.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Sean Yu</h3>
            <div className={section3Styles.text}>Infomon.ai Founder <br></br>IBF Co-founder & Chair 2022/23</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/imran.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Imran Khan</h3>
            <div className={section3Styles.text}>IBF Co-founder & Chair 2022/23</div>
          </div>

          
          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Shafi.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Shafi Maahe</h3>
            <div className={section3Styles.text}>IBF Vice Chair 2023/24</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Minghan.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Minghan Xiao</h3>
            <div className={section3Styles.text}>IBF Head of Research <br></br>(2023-25)</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg}  src="/assets/members/Danesh.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ahmad Danesh</h3>
            <div className={section3Styles.text}>IBF Quant Lead (2023-25)</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} id={section3Styles.img120} src="/assets/members/splitzz.png"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ghassan Alhalabi</h3>
              <div className={section3Styles.text}>Treasurer (2024/25)</div>
            </div>
        

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Eren.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Eren Geridonmez</h3>
            <div className={section3Styles.text}>IBF Head of Technology (2024/25)</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Jaiditya.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Jaiditya Khemani</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Web3 Developer <br></br>IBF Committee (2023/24)</div>
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
            <img className ={section3Styles.memberImg} src="/assets/members/Victoria.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Victoria Gong</h3>
            <div className={section3Styles.text}>Head of Trading<br></br>Head of Quantitative Strategy, Fyde</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/sacha.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Dr. Sacha Ghebali</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>SVP of Strategy, The TIE</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Julien.jpg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Julien Pelegri</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Merov Club Founder<br></br>Q42 Founder<br></br>IBF Committee 22/23</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg}  src="/assets/members/Rohan.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Rohan Khanna</h3>
            <div className={section3Styles.text}>VP at Arkham Intelligence</div>
          </div>

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg}  src="/assets/members/AngelaSun.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Angela Sun</h3>
            <div className={section3Styles.text}>StarkNet Foundation<br></br>Encode Club</div>
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
            <div className={section3Styles.text}>Onairos Founder</div>
          </div>



          

          

          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Yuvan.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Yuvan Chikka</h3>
            <div id={section3Styles.smallertext} className={section3Styles.text}>Web3 Developer</div>
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
            <img className ={section3Styles.memberImg} src="/assets/members/Ibrahim.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Ibrahim Qayyum</h3>
            <div className={section3Styles.text}>DeSci Researcher</div>
          </div>


          
      
          <div className={section3Styles.item}>
            <div className={section3Styles.rect3}>
            <img className ={section3Styles.memberImg} src="/assets/members/Szonja.jpeg"/>
            </div>
            <h3 className={section3Styles.subtitle1}>Szonja Skenderovic</h3>
            <div className={section3Styles.text}>Entrepreneur, Imperial BioTech</div>
          </div>

         
        

        

      
        </div>
        </div>
        

    </section>
  );
}

export default renderSection3;
