import { ReactElement } from 'react';
import styles from './submit.module.scss';

const Submit = (): ReactElement => (
  <div className={styles.formContentSubmit}>
    <button className={styles.formContentSubmitBtn} type='submit'>
      Wyślij
    </button>
  </div>
);

export default Submit;
