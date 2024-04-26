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
              <div className={section4Styles.content_box1}>
                <div className={section4Styles.rect2} />
              </div>

              <div className={section4Styles.flex_col2}>
                <h1 className={section4Styles.hero_title1}>Entity Name</h1>
                <h3 className={section4Styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum
                  odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam,
                  dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam
                  vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi
                  dictum, aliquam nisl non, vehicula ligula.{' '}
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row1}>
              <img className={section4Styles.image} src={'/assets/black_rounded_square_icon.png'} alt="alt text" />

              <div className={section4Styles.flex_col3}>
                <h1 className={section4Styles.hero_title1}>Entity Name</h1>
                <h3 className={section4Styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum
                  odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam,
                  dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam
                  vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi
                  dictum, aliquam nisl non, vehicula ligula.{' '}
                </h3>
              </div>
            </div>

            <div className={section4Styles.flex_row2}>
              <div className={section4Styles.content_box11}>
                <div className={section4Styles.rect21} />
              </div>

              <div className={section4Styles.flex_col2}>
                <h1 className={section4Styles.hero_title1}>Entity Name</h1>
                <h3 className={section4Styles.subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum
                  odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam,
                  dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam
                  vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi
                  dictum, aliquam nisl non, vehicula ligula.{' '}
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
