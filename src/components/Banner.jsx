import '../styles/Banner.css';
// import logo from '../assets/logo.png';
// import Recommendation from './Recommendation';

const Banner = ({children}) => {

    // const title = 'la maison jungle';

    return (
        <div className='lmj-banner'>
            {/* <div className='lmj-banner-row'> */}
                {/* <img src={logo} alt="la maison jungle" className='lmj-logo' />
                <h1 className='lmj-title' > {title} </h1> */}
            {/* </div> */}
                {children}
            {/* <Recommendation /> */}
        </div>
    );
};

export default Banner;