
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../assets'
import { useGetSettingsDataQuery } from '../services/homePageApi'
import { setFooterData } from '../slices/homePageSlice';
import { useEffect } from 'react';

const Footer = () => {
    const {data:footerData} = useGetSettingsDataQuery()
    const dispatch = useDispatch();
    useEffect(() => {
        if (footerData) {
          dispatch(setFooterData(footerData.data));
        }
      }, [footerData, dispatch]);
      const footersData = useSelector((state)=>state.home.footerData)
   return (
      <div className='footer-box'>
          <div className='footer-one d-flex justify-space-between'>
              <div className='footer-tag-line'>
                  <h4 className='tag'>Tagline will go here. Lorem ipsum doler sit amet…</h4>
                  <p className='app-site-link'>{footersData?.inquiry_mail}</p>
              </div>
              <hr />
              <div className='contact-details d-flex justify-space-between'>
                  <div className='address'>
                      <h5>Address</h5>
                      <p className='address-text'>{footersData?.address}</p>
                  </div>
                  <div className='contact'>
                      <h5>Contact</h5>
                      <p>{footersData?.contact_mail}</p>
                      <p>{footersData?.contact_no}</p>
                  </div>
              </div>
          </div>
          <div className='footer-two d-flex align-center justify-space-between'>
                <div className='logo-img'>
                <img src={logo} className="img" alt="logo_image" />
              </div>
              <ul className='d-flex align-center'>
                  <li><a href="#about_us">About</a></li>
                  <li><a href="#blogs">Blogs</a></li>
                  <li><a href="#contact_us">Contact</a></li>
                  <li><a href="#services">Services</a></li>
              </ul>
              <p className='copy-right-msg'>￼© 2022. All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer