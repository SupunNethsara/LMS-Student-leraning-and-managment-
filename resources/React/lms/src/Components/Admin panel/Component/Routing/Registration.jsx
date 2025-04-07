import React, { useState } from 'react';
import axios from 'axios';
import Breadcumb from '../Breadcumb';
import '../Routing/Adminpanel.scss';

function Registration() {
  const breadcumbItems = [
    { 
      label: 'Home', 
      link: '#', 
      icon: 'M19.707 9.293l-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' 
    },
    { label: 'Registration' },
  ];

  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    password: '',
    corce: '',
    gender: '',
    contact: '',
    qulification: '',
    role: 'user',
    adress: '',
    profile: null
  });

  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profile: file
      }));
      if (errors.profile) {
        setErrors(prev => ({ ...prev, profile: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fname.trim()) newErrors.fname = 'First name is required';
    if (!formData.lname.trim()) newErrors.lname = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    
    if (formData.profile) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
      if (!validTypes.includes(formData.profile.type)) {
        newErrors.profile = 'Only JPEG, PNG, JPG, or GIF images are allowed';
      }
      if (formData.profile.size > 2 * 1024 * 1024) {
        newErrors.profile = 'Image must be less than 10MB';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'profile_preset');
      
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dx7waof09/image/upload', 
        formData
      );
      
      return response.data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      let profileUrl = null;
      

      if (formData.profile) {
        profileUrl = await uploadToCloudinary(formData.profile);
      }
      

      const dataToSend = {
        ...formData,
        profile: profileUrl
      };
      
  
      delete dataToSend.profileFile;
      
  
      const response = await axios.post('http://localhost:8000/api/register', dataToSend);
      
      console.log('Registration successful:', response.data);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      

      setFormData({
        fname: '',
        mname: '',
        lname: '',
        email: '',
        password: '',
        corce: '',
        gender: '',
        contact: '',
        qulification: '',
        role: 'user',
        adress: '',
        profile: null
      });
      
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response) {
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else if (error.response.data.message) {
          setErrors({ server: error.response.data.message });
        }
      } else {
        setErrors({ server: error.message || 'Network error. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-main p-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl text-gray-600 font-semibold font-poppins">
          Registration
        </h3>
        <Breadcumb items={breadcumbItems} />
      </div>

      {errors.server && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {errors.server}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-medium text-gray-700 mb-4">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900">
                First Name *
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.fname ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="John"
              />
              {errors.fname && <p className="mt-1 text-sm text-red-600">{errors.fname}</p>}
            </div>
            
            <div>
              <label htmlFor="mname" className="block mb-2 text-sm font-medium text-gray-900">
                Middle Name
              </label>
              <input
                type="text"
                id="mname"
                name="mname"
                value={formData.mname}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Michael"
              />
            </div>
            
            <div>
              <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900">
                Last Name *
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.lname ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="Doe"
              />
              {errors.lname && <p className="mt-1 text-sm text-red-600">{errors.lname}</p>}
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-medium text-gray-700 mb-4">Account Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="john.doe@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-medium text-gray-700 mb-4">Additional Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="corce" className="block mb-2 text-sm font-medium text-gray-900">
                Course
              </label>
              <select
                id="corce"
                name="corce"
                value={formData.corce}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select your course</option>
                <option value="react">React Course</option>
                <option value="laravel">Laravel Course</option>
                <option value="full stack development">Full Stack Development</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
            </div>
            
            <div>
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.contact ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                placeholder="+947645876"
              />
              {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="qulification" className="block mb-2 text-sm font-medium text-gray-900">
                Qualifications
              </label>
              <input
                type="text"
                id="qulification"
                name="qulification"
                value={formData.qulification}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="University Qualifications"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                Role *
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`bg-gray-50 border ${errors.role ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
            </div>
          </div>
          
          <div className="mt-4">
            <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900">
              Address
            </label>
            <input
              type="text"
              id="adress"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="New York, 10001"
            />
          </div>
          
          <div className="mt-4">
            <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900">
              Profile Picture
            </label>
            <input
                type="file"
                id="profile"
                name="profile"
                onChange={handleFileChange}
                className={`block w-full text-sm text-gray-900 border ${errors.profile ? 'border-red-500' : 'border-gray-300'} rounded-lg cursor-pointer bg-gray-50 focus:outline-none`}
                accept="image/jpeg,image/png,image/jpg,image/gif"
            />
            {errors.profile && <p className="mt-1 text-sm text-red-600">{errors.profile}</p>}
            <p className="mt-1 text-sm text-gray-500">
              A profile picture helps identify your account (JPEG, PNG, max 2MB)
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isSubmitting ? (
              <>
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Processing...
              </>
            ) : (
              'Submit Details'
            )}
          </button>
        </div>

        {/* Success Toast */}
        {showToast && (
          <div className="fixed bottom-4 right-4 flex items-center p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div>
              <span className="font-medium">Success!</span> Registration completed successfully.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Registration;