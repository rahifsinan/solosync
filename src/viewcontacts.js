import React from 'react';
import Card from "@mui/material/Card";
import './App.css';
import profileImage from './assets/Profile.jpg';

const App = () => {
  return (
    <div className="scrollable-container">
      <div className="main-div">
        <Card className="main-card">
          
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            
              <div className="profile-container">
              <div className="trt">
                <img className="profile-image" src={profileImage} alt="Profile" />
                <div className="side-part-cont">
              <div className="profile-name">David&nbsp;Luka</div>
              King LLP
              </div>
              </div>
              </div>
           
            
              <div className="cont-card1">
              <div className="trt">
              Email
                <div className="side-part-task">
              davidlk@kimg.in
        
                </div>
              </div>
              <div className="trt">
                Phone
                <div className="side-part-task">
                55-555-555
        
                </div>
              </div>
              <div className="trt">
              Department
                <div className="side-part-task">
              Photography
                </div>
              </div>
              <div className="trt">
          DOB
                <div className="side-part-task">
                12/05/2001
        
                </div>
              </div>
      </div>

      <div className="cont-card2">
              <div className="trt">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
	<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
	<path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" />
</svg>
                <div className="side-part-task">
              King Photography
        
                </div>
              </div>
              <br/>
              <div className="trt">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
	<g fill="none">
		<rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
		<rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
		<path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" />
		<defs>
			<radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
				<stop stop-color="#fd5" />
				<stop offset=".1" stop-color="#fd5" />
				<stop offset=".5" stop-color="#ff543e" />
				<stop offset="1" stop-color="#c837ab" />
			</radialGradient>
			<radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
				<stop stop-color="#3771c8" />
				<stop offset=".128" stop-color="#3771c8" />
				<stop offset="1" stop-color="#60f" stop-opacity="0" />
			</radialGradient>
		</defs>
	</g>
</svg>
                <div className="side-part-task">
                king_photography
        
                </div>
              </div>
              <br/>
              <div className="trt">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
	<path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" />
	<path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
</svg>
                <div className="side-part-task">
             King Photography
                </div>
              </div>
              <br/>
              <div className="trt">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z" />
</svg>
                <div className="side-part-task">
                King Photography
        
                </div>
              </div>
      </div>
      <div className="cont-card1">
              <div className="trt">
              Street
                <div className="side-part-task">
              Nowhere St.
        
                </div>
              </div>
              <div className="trt">
                City
                <div className="side-part-task">
                Nospace City
        
                </div>
              </div>
              <div className="trt">
              State
                <div className="side-part-task">
              Nostate City
                </div>
              </div>
              <div className="trt">
          Zip
                <div className="side-part-task">
                458762
        
                </div>
              </div>
              <div className="trt">
          Country
                <div className="side-part-task">
                Finland
        
                </div>
              </div>
      </div>

        </Card>
      </div>
    </div>
  );
};

export default App;
