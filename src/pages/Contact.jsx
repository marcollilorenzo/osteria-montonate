import React from 'react';

function Contact() {
  return (
    <div className='bg-lightBrown pb-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'>
        <div className='bg-white p-4 m-4 rounded-lg'>
          form
        </div>


        <div className=' p-4 m-4 rounded-lg align-middle'>
          <div class="mapouter shadow-lg"><div class="gmap_canvas"><iframe width="600" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=osteria%20di%20montonate&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
