import  quoteOne from '../assets/quoteOne.svg';
import  quoteTwo  from '../assets/quoteTwo.svg';
import { user } from '../assets';

const Testimonial = () => {
  return (
      <div className='testimonial-box'>
          <h2 className='service-header header-text'>Testimonials</h2>
          <div className='testimonial-cards d-flex align-center justify-space-between'>
              <div className='card'>
                  <img src={quoteOne} className="quote-two quote-icon"/>
                  <div className='profile d-flex align-center'>
                      <div className='avatar'><img src={user} alt='user' /></div>
                      <h4 className='profile-name font-18 font-w700'>
                        Josh brollins
                      </h4>
                  </div>
                  <p className='testimonial-para font-16 font-w400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                  <img src={quoteTwo} className="quote-one quote-icon" />
              </div>
              <div className='card'>
                  <img src={quoteTwo} className="quote-two quote-icon"/>
                  <div className='profile d-flex align-center'>
                      <div className='avatar'><img src={user} alt='user' /></div>
                      <h4 className='profile-name font-18 font-w700'>
                        Josh brollins
                      </h4>
                  </div>
                  <p className='testimonial-para font-16 font-w400'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                  <img src={quoteOne} className="quote-one quote-icon" />
              </div>
          </div>
      </div>
  )
}

export default Testimonial