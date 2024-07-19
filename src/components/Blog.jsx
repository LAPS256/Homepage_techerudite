
import moment from 'moment';
import { Mask } from '../assets';
import { useGetBlogsQuery } from '../services/homePageApi';
import {ArrowRightOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setBlogData } from '../slices/homePageSlice';
const Blog = () => {
    const {data:blogData} = useGetBlogsQuery()
    const dispatch = useDispatch();
    useEffect(() => {
        if (blogData) {
          dispatch(setBlogData(blogData.data));
        }
      }, [blogData, dispatch]);
      const blogsData = useSelector((state)=>state.home.blogData)
  return (
      <div className='blog-box' id="blogs">
          <div className='blog-header d-flex align-center justify-space-between'>
          <h2 className='service-header header-text'>Blogs</h2>
              <a href="/blogs" className='view-all-btn'>{'View All'}<ArrowRightOutlined style={{
                width:"25.95px",
                height:"15.91px",
                top:"7px",left:"123.95px"
              }}/>
              </a>
          </div>
          <div className='blog-posts d-flex justify-space-between'>
              {blogsData?.map((blog, index) => index < 3 ? (
                  <div className='blog' key={blog?.id}>
                      <div className='blog-img'>
                          <img src={`${blog?.image_url?blog?.image_url:Mask}`} alt={`blog${index}`} />
                  </div>
                  <div className='blog-details'>
                          <h4 className='blog-title font-20 font-w400'>{blog?.name}</h4>
                      <p className='blog-date'>{moment(blog?.updatedAt).format('MMMM D, YYYY')} by <span>{blog?.writer_name}</span></p>
                      <p className='blog-desc font-16 font-w400'>{blog?.seo_description}</p>
                  </div>
              </div>
              ) : null)}
          </div>
    </div>
  )
}

export default Blog