import { useDispatch, useSelector } from 'react-redux';
import { useSubmitContactFormMutation } from '../services/homePageApi';
import {
    updateFormData,
    setSubmitting,
    setSubmitSuccess,
    setSubmitError,
    resetForm,
  } from '../slices/homePageSlice';
  import toast from "react-hot-toast";
const Contact = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.home?.formData);
    const isSubmitting = useSelector((state) => state.home.isSubmitting);
    const isSuccess = useSelector((state) => state.home.isSuccess);
  
    const [submitContactForm] = useSubmitContactFormMutation();
    const handleFormInput = (e) => {
      const { name, value } = e.target;
      dispatch(updateFormData({ [name]: value }));
    };
  
    const handleFormSubmit = async () => {
      dispatch(setSubmitting(true));
      try {
        await submitContactForm(formData).unwrap();
        dispatch(setSubmitSuccess(true));
        dispatch(resetForm());
        toast.success("Your inquiry has been submitted successfully!");
      } catch (err) {
        dispatch(setSubmitError({ isError: true, errorMessage: err.message }));
      }
    };
  
  return (
      <div className='contact-box' id="contact_us">
          <div className='contact-form'>
              <p className='contact-header-para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
              <div className='form'>
                  <div className='form-field'>
                      <input name="fname" id='firstName' defaultValue={formData?.firstName} onChange={handleFormInput} className='input-field' placeholder='First Name' />
                  </div>
                  <div className='form-field'>
                      <input name="lname" id='lastName' defaultValue={formData?.lastName} onChange={handleFormInput} className='input-field' placeholder='Last Name' />
                  </div>
                  <div className='form-field'>
                      <input name="email" id='email' type='email' defaultValue={formData?.email} onChange={handleFormInput} className='input-field' placeholder='Mail' />
                  </div>
                  <div className='form-field'>
                      <input name="phone" id='phoneNo' defaultValue={formData?.phoneNo} className='input-field' onChange={handleFormInput} placeholder='Phone' type='number' />
                  </div>
                  <div className='form-field'>
                      <select className='select-field' name='budget' value={formData?.budget} onChange={handleFormInput} id="budget">
                          <option value="">Budget</option>
                          <option value="400000">400000</option>
                          <option value="500000">500000</option>
                          <option value="600000">600000</option>
                          <option value="700000">700000</option>
                      </select>
                  </div>
                  <div className='form-field'>
                      <input name="description" id='description' onChange={handleFormInput} value={formData?.description} className='input-field' placeholder='Description' />
                  </div>
              </div>
              <div className='btn-div d-flex align-center justify-center'>
              <button className='btn contact-btn' onClick={handleFormSubmit} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
              </div>
              {isSuccess && <p className="success-message">Form submitted successfully!</p>}
  
          </div>
    </div>
  )
}

export default Contact