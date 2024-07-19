import {logo} from '../assets'

const Navbar = () => {
  return (
    <div className='navbar d-flex justify-space-between align-center'>
      <div className='logo-img'>
        <img src={logo} className="img" alt="logo_image" />
      </div>
      <ul className='d-flex align-center nav-list'>
        <li className='nav-item'><a className='font-20 font-w400' href='#services'>Services</a></li>
        <li className='nav-item'><a className='font-20 font-w400' href='#about_us'>About us</a></li>
        <li className='nav-item'><a className='font-20 font-w400' href='#blogs'>Blogs</a></li>
        <li className='nav-item'><a className='font-20 font-w400' href='#case_studies'>Case Studies</a></li>
        <li className='nav-item'><a className='font-20 font-w400 btn' href='#contact_us'>CONTACT US</a></li>
      </ul>
    </div>
  )
}

export default Navbar