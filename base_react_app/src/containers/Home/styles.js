import background from '../../resources/background.png';
import calendary from '../../resources/calendary.png';

const styles = {
  container: {
    backgroundColor: '#282C34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
  },
  logo: {
    animation: 'Example-logo-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none'
  },
  backgroundClock: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  },
  backgroundCalendary: {
    backgroundImage: `url(${calendary})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  },
  divider: {
    width: '5'
  }
};

export default styles;
