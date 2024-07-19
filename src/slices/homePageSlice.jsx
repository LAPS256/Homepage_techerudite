import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  },
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  blogData: null,
  footerData: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitSuccess: (state, action) => {
      state.isSuccess = action.payload;
      state.isSubmitting = false;
    },
    setSubmitError: (state, action) => {
      state.isError = action.payload.isError;
      state.errorMessage = action.payload.errorMessage;
      state.isSubmitting = false;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.isSubmitting = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
    setFooterData: (state, action) => {
      state.footerData = action.payload;
    },
  },
});

export const { setBlogData, setFooterData,updateFormData,
  setSubmitting,
  setSubmitSuccess,
  setSubmitError,
  resetForm, } = homeSlice.actions;
export default homeSlice.reducer;
