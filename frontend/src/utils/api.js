import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

// Care Plan API
export const createCarePlan = async (carePlanData) => {
  const response = await axios.post(`${API}/care-plans`, carePlanData);
  return response.data;
};

// Waitlist API
export const joinWaitlist = async (waitlistData) => {
  const response = await axios.post(`${API}/waitlist`, waitlistData);
  return response.data;
};

// Contact API
export const submitContactForm = async (contactData) => {
  const response = await axios.post(`${API}/contact`, contactData);
  return response.data;
};

// Payment Verification API
export const submitPaymentVerification = async (verificationData) => {
  const response = await axios.post(`${API}/verify-benefits`, verificationData);
  return response.data;
};

// Health Check
export const healthCheck = async () => {
  const response = await axios.get(`${API}/health`);
  return response.data;
};