import React from 'react';
import cn from 'classnames';

import section5Styles from './section5.module.scss';

function renderSection5(props) {
  return (
    <section className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        <div className={section5Styles.flex_col1}>
          <h1 className={section5Styles.hero_title}>Apply to join</h1>
          <h3 className={section5Styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio
            feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a
            nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Curabitur nec suscipit urna. Ut consequat urna
            lectus. Nullam velit nisl, lacinia posuere nulla venenatis, pharetra vulputate velit. Curabitur urna metus,
            sollicitudin sed sapien non, iaculis eleifend tellus. Sed ornare libero ut maximus commodo.
            <br />
            Sed volutpat quam sapien, sit amet lacinia felis molestie hendrerit. Sed ut eleifend libero. Aenean
            tincidunt, orci sit amet convallis porttitor, neque odio vehicula est, bibendum tristique ipsum nisi vel
            lacus. Suspendisse ultrices bibendum enim vel fermentum. Suspendisse eu aliquam tellus, at blandit urna.
            Etiam condimentum viverra neque ut rutrum. Cras efficitur sagittis convallis. Ut cursus blandit nisi, ac
            interdum{' '}
          </h3>
        </div>

        <div className={section5Styles.flex_col2}>
          <h1 className={section5Styles.hero_title1}>Get in touch</h1>
          <h3 className={section5Styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur feugiat nunc, in bibendum odio
            feugiat vel. Aliquam vitae consequat elit. Suspendisse nisi justo, accumsan nec auctor aliquam, dapibus a
            nisi. In at mi dictum, aliquam nisl non, vehicula ligula. Curabitur nec suscipit urna. Ut consequat urna
            lectus. Nullam velit nisl, lacinia posuere nulla venenatis, pharetra vulputate velit. Curabitur urna metus,
            sollicitudin sed sapien non, iaculis eleifend tellus. Sed ornare libero ut maximus commodo.
            <br />
            Sed volutpat quam sapien, sit amet lacinia felis molestie hendrerit. Sed ut eleifend libero. Aenean
            tincidunt, orci sit amet convallis porttitor, neque odio vehicula est, bibendum tristique ipsum nisi vel
            lacus. Suspendisse ultrices bibendum enim vel fermentum. Suspendisse eu aliquam tellus, at blandit urna.
            Etiam condimentum viverra neque ut rutrum. Cras efficitur sagittis convallis. Ut cursus blandit nisi, ac
            interdum{' '}
          </h3>
        </div>
      </div>

      <div className={section5Styles.content_box3}>
        <div className={section5Styles.flex_row}>
          <img className={section5Styles.image5} src={'/assets/white_imperial_dao_crest.png'} alt="alt text" />

          <div className={section5Styles.flex_col3}>
            <img className={section5Styles.image3} src={'/assets/social_media_icon_set.png'} alt="alt text" />
            <h5 className={section5Styles.highlight1}>
              Footer Text  porttitor, neque odio vehicula est, bibendum tristique ipsum nisi vel lacus. Suspendisse
              ultrices bibendum enim vel fermentum. Suspendisse eu aliquam tellus, at blandit urna. Etiam condimentum
              viverra neque ut rutrum. Cras efficitur sagittis convallis. Ut cursus blandit nisi, ac interdum{' '}
            </h5>
            <img className={section5Styles.image4} src={'/assets/navy_blue_id_seal.png'} alt="alt text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection5;
