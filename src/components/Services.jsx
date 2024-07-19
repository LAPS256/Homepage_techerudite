import  searchMenu from '../assets/002-search.svg';
import budgetMenu from '../assets/001-budget.svg';
import  revenueMenu from '../assets/003-revenue.svg';
import  settingMenu from '../assets/004-setting.svg';
import  taxMenu from '../assets/005-tax.svg';
import  statisticMenu from '../assets/006-statistics.svg';

const Services = () => {
    return (
  <div className='container'> 
      <div className='services' id="services">
                <h2 className='service-header header-text'>Services</h2>
                <div className='service-cards'>
                    <div className='card'>
                        <img src={searchMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Audit & Account</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <img src={budgetMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Budget & Projections</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <img src={revenueMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Payroll & Bookkeeping</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <img src={settingMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Software Training & IT</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                    <img src={taxMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Tax planning & Returns</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                    <img src={statisticMenu}/>
                        <h3 className='service-card-title font-22 font-w700'>Management Information</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                </div>
    </div>
  </div>
  )
}

export default Services