






// import React, { useEffect } from 'react';
// import '../styles/HQBookingWidget.css';

// const HQBookingWidget = () => {
//   useEffect(() => {
//     // Function to request iframe snippet
//     const requestIframeSnippet = (element) => {
//       if (element && element.dataset.integrator_link) {
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4) {
//             const response = JSON.parse(xhr.responseText);
//             element.innerHTML = response.view;
//             addScript(response.scripts.resizer, () => {
//               addScript(response.scripts.scripts, () => {
//                 resizeHQRentalSoftwareIframe(response.min_height);
//                 if (response.should_redirect && !element.dataset.skip_redirect) {
//                   window.location.href = response.iframe_url;
//                 }
//               });
//             });
//           }
//         };
//         let url = element.dataset.integrator_link + "/" + element.dataset.snippet + "?integrator=true";
//         // Add all your dataset attributes here as per your original JavaScript
//         xhr.open("GET", url);
//         xhr.send();
//       }
//     };

//     // Function to add script dynamically
//     const addScript = (url, callback) => {
//       const script = document.createElement("script");
//       script.src = url;
//       if (callback) {
//         script.onload = callback;
//       }
//       document.body.appendChild(script);
//     };

//     // Function to get all URL parameters
//     const getAllUrlParams = (url) => {
//       var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
//       var obj = {};
//       if (queryString) {
//         queryString.split('&').forEach(function (part) {
//           var item = part.split('=');
//           obj[item[0]] = decodeURIComponent(item[1]);
//         });
//       }
//       return obj;
//     };

//     // Initial request when component mounts
//     const element = document.querySelector(".hq-rental-software-integration");
//     if (element) {
//       requestIframeSnippet(element);
//     }

//     // Clean up function (optional)
//     return () => {
//       // Clean up any resources or listeners if necessary
//     };
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return (
//     <div className="hq-rental-software-integration">
//       {/* Optional: You can render content here that indicates the component is loading */}
//     </div>
//   );
// };

// export default HQBookingWidget;







// import React from 'react';
// import '../styles/HQBookingWidget.css';

// const HQBookingWidget = () => {
//     return (
//         <>
//             <script src="https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator"></script>
//             <div className="hq-rental-software-integration"
//                  data-integrator_link="https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations"
//                  data-brand="sccjsj1l-sskp-dwyb-k4ho-ffvkjrv2fxvf"
//                  data-snippet="reservation-form"
//                  data-skip_language=""
//                  data-skip_redirect="1"
//                  data-reservation_page=""
//                  data-layout="vertical"
//                  data-currency=""
//                  data-rate_type_uuid=""
//                  data-referral="">
//             </div>
//         </>
//     );
// }

// export default HQBookingWidget;







// import React, { useEffect } from 'react';
// import '../styles/HQBookingWidget.css';

// const HQBookingWidget = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator";
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <div className="hq-rental-software-integration"
//              data-integrator_link="https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations"
//              data-brand="sccjsj1l-sskp-dwyb-k4ho-ffvkjrv2fxvf"
//              data-snippet="reservation-form"
//              data-skip_language=""
//              data-skip_redirect="1"
//              data-reservation_page=""
//              data-layout="vertical"
//              data-currency=""
//              data-rate_type_uuid=""
//              data-referral="">
//         </div>
//     );
// }

// export default HQBookingWidget;

//-----------------------------------------------------------

//functional. shows the response, which does in fact work.

// import React, { useState, useEffect } from 'react';

// const HQBookingWidget = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text(); // Change from response.json() to response.text()
//       })
//       .then(text => {
//         setData(text); // Store the raw text (JavaScript code) in state
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <pre>{data}</pre> {/* Display the raw script/text */}
//     </div>
//   );
// };

// export default HQBookingWidget;

//--------------------------------------------------------

// import React, { useState, useEffect } from 'react';

// const HQBookingWidget = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://a-to-b-rentals.caagcrm.com/public/car-rental/integrations/assets/integrator')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text(); // Get the response as text
//       })
//       .then(text => {
//         console.log('Fetched JavaScript code:', text);
//         setLoading(false);

//         // Create a new script element and set its content to the fetched JavaScript code
//         const script = document.createElement('script');
//         script.textContent = text;
//         document.body.appendChild(script);
//       })
//       .catch(error => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>JavaScript Code Executed</h1>
//       <div id="hq-rental-container"></div> {/* Container for the dynamically added content */}
//     </div>
//   );
// };

// export default HQBookingWidget;

//---------------------------------------------------------------------------------------------------

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
  }, []); // Empty dependency array means this effect runs once after the initial render

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




