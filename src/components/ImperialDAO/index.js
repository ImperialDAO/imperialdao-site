import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from './section1.js';
import renderSection2 from './section2.js';
import renderSection3 from './section3.js';
import renderSection4 from './section4.js';
import renderSection5 from './section5.js';

import styles from './index.module.scss';

function ImperialDAO(props) {
  return (
    <main className={cn(styles.main, props.className, 'imperial-dao')}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
    </main>
  );
}

ImperialDAO.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string.isRequired
};

export default ImperialDAO;
