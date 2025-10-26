// Google Analytics 4 (GA4) Integration
// TO ACTIVATE: Add your GA4 Measurement ID to .env as REACT_APP_GA_TRACKING_ID

const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Pre-defined event tracking functions
export const trackFormSubmission = (formType) => {
  event({
    action: 'form_submission',
    category: 'Forms',
    label: formType,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: '(470) 264-5566',
  });
};

export const trackCalculatorUse = (serviceType, cost) => {
  event({
    action: 'calculator_use',
    category: 'Calculator',
    label: serviceType,
    value: cost,
  });
};

export const trackWaitlistSignup = (waitlistType) => {
  event({
    action: 'waitlist_signup',
    category: 'Waitlist',
    label: waitlistType,
  });
};

export default { pageview, event, trackFormSubmission, trackPhoneClick, trackCalculatorUse, trackWaitlistSignup };
