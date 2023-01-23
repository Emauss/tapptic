import { ReactElement } from 'react';
import { PropagateLoader } from 'react-spinners';
import styles from './spinner.module.scss';

const Spinner = ({ loading }: { loading: boolean }): ReactElement => (
  <div className={styles.spinner}>
    <PropagateLoader color='#071594' loading={loading} />
  </div>
);

export default Spinner;
