import React from 'react';
import cn from 'classnames';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.section21}>
        <div className={section2Styles.flex_col}>
          <div className={section2Styles.flex_col1}>
            <h1 className={section2Styles.hero_title}>About Us</h1>
            <h3 className={section2Styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio
              feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a
              nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Curabitur nec suscipit urna. Ut consequat urna
              lectus. Nullam velit nisl, lacinia posuere nulla venenatis, pharetra vulputate velit. Curabitur urna
              metus, sollicitudin sed sapien non, iaculis eleifend tellus. Sed ornare libero ut maximus commodo.
              <br />
              Sed volutpat quam sapien, sit amet lacinia felis molestie hendrerit. Sed ut eleifend libero. Aenean
              tincidunt, orci sit amet convallis porttitor, neque odio vehicula est, bibendum tristique ipsum nisi vel
              lacus. Suspendisse ultrices bibendum enim vel fermentum. Suspendisse eu aliquam tellus, at blandit urna.
              Etiam condimentum viverra neque ut rutrum. Cras efficitur sagittis convallis. Ut cursus blandit nisi, ac
              interdum{' '}
            </h3>
          </div>

          <div className={section2Styles.flex_col2}>
            <h1 className={section2Styles.big_title}>Our Operations</h1>

            <div className={section2Styles.flex_row}>
              {[
                {
                  big_title1: `Vertical 1`,
                  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. `
                },
                {
                  big_title1: `Vertical 2`,
                  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. `
                },
                {
                  big_title1: `Vertical 3`,
                  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. `
                },
                {
                  big_title1: `Vertical 4`,
                  subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a nisi. In at mi dictum, aliquam nisl non, vehicula ligula. `
                }
              ].map((data) => (
                <div className={section2Styles.content_box}>
                  <div className={section2Styles.flex_col3}>
                    <h1 className={section2Styles.big_title1}>{data.big_title1}</h1>
                    <h3 className={section2Styles.subtitle1}>{data.subtitle}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;
