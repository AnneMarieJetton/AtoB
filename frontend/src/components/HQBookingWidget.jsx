import React, { useEffect } from 'react';

const HQBookingWidget = () => {
  useEffect(() => {
    // Function to add the external script
    const addScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);

      // Optionally log when the script is loaded or fails
      script.onload = () => console.log('Script loaded successfully');
      script.onerror = () => console.error('Script failed to load');

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    // URL of the external script
    const scriptUrl = 'https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator';

    // Fetch and log the script content
    const logScriptContent = async () => {
      try {
        const response = await fetch(scriptUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        console.log('Script content:', text);
      } catch (error) {
        console.error('Failed to fetch the script:', error);
      }
    };

    // Fetch the script content
    logScriptContent();

    // Add the script to the document
    const cleanupScript = addScript(scriptUrl);

    // Cleanup the script on component unmount
    return cleanupScript;
  }, []); 

  return (
    <div
      className="hq-rental-software-integration"
      data-integrator_link="https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations"
      data-brand="sccjsj1l-sskp-dwyb-k4ho-ffvkjrv2fxvf"
      data-snippet="reservation-form"
      data-skip_language=""
      data-skip_redirect="1"
      data-reservation_page=""
      data-layout="vertical"
      data-currency=""
      data-rate_type_uuid=""
      data-referral=""
    />
  );
};

export default HQBookingWidget;




