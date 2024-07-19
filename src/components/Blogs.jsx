
import moment from 'moment';
import { Mask } from '../assets';
import { useGetBlogsQuery } from '../services/homePageApi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setBlogData } from '../slices/homePageSlice';
const Blogs = () => {
    const {data:blogData} = useGetBlogsQuery()
    const dispatch = useDispatch();
    useEffect(() => {
        if (blogData) {
          dispatch(setBlogData(blogData.data));
        }
      }, [blogData, dispatch]);
      const blogsData = useSelector((state)=>state.home.blogData)
  return (
      <div>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {blogsData?.map((blog, index) => {
                  return(
                    <div className='blog' key={blog?.id}>
                      <div className='blog-img'>
                          <img src={`${blog?.image_url?blog?.image_url:Mask}`} alt={`blog${index}`} height={100}/>
                  </div>
                  <div className='blog-details'>
                          <h4 className='blog-title font-20 font-w400'>{blog?.name}</h4>
                      <p className='blog-date'>{moment(blog?.updatedAt).format('MMMM D, YYYY')} by <span>{blog?.writer_name}</span></p>
                     
                  </div>
              </div>)
                          })}
          </div>
    </div>
  )
}

export default Blogs