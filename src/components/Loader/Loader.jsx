import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.scss';


const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;