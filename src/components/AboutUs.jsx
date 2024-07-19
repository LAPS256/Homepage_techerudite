import { about } from '../assets'

const AboutUs = () => {
  return (
      <div className='about-us position-r' id="about_us">
          <div className='container section-continer h-100p d-flex align-end'>
              <div className='d-flex align-center about-box'>
                <div className='about-us-detail'>
                  <h3 className='about-header header-text'>About Us</h3>
                  <p className='about-para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                  <button className='about-btn btn'>Get IN Touch</button>
                </div>
                <div className='about-image'>
                    <img src={about} alt='About Us' />
                </div>
              </div>
          </div>
      </div>
  )
}

export default AboutUs