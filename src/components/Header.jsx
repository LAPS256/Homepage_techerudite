import { path, path1} from '../assets'
import iconMenu from '../assets/hero.svg';
const Header = () => {
  return (
    <>
      <img src={path} className='path' alt="path_img" />
      <img src={path1} className='path1' alt="path_img" />
      <div className='d-flex justify-space-between header-details'>
        <div className='left-part'>
          <p className='hero-desc font-18 font-w400'>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>
          <div className='hero-card m-t-28'>
            <h3 className='card-text m-b-21 font-28 font-w600'>Is your turnover expected to be more than £85k?</h3>
            <div className='d-flex align-center justify-center btns'><button className='card-btn font-20 font-w700'>Yes</button><button className='card-btn font-20 font-w700'>No</button></div>
          </div>
          <p className='font-16 font-w600 m-t-19'>Takes less than 30 seconds</p>
        </div>
        <div className='right-part'>
          <div className='hero-img'>
            <img src={iconMenu} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;