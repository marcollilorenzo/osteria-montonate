import React, {useContext} from 'react';

//icon
import { LocationMarkerIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/solid'

//context
import { DataContext } from '../context/Context';

// loading
import Loading from '../components/Loading';

function Contact() {

  //context
  const {orari,speciality} = useContext(DataContext)

   if (!orari && !speciality) return <Loading />
  return (
    <div className='bg-lightBrown pb-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'>
        <div className='bg-white p-4 m-4 rounded-lg'>
        <div className='grid grid-cols-1 items-start opacity-100'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'><span><LocationMarkerIcon className='h-12 pr-4' /></span>Dove siamo</h2>
              <p className='text-xl text-darkBrown'>Via Cavour, 22, 21020 Mornago VA</p>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'><span><PhoneIcon className='h-12 pr-4' /></span>Chiamaci</h2>
              <p className='text-xl text-darkBrown'><a href="tel:0331270183">
                <div>0331270183</div>
              </a></p>
            </div>

            <div className='flex flex-col justify-center items-center pb-16'>

              <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'><span><CalendarIcon className='h-12 pr-4' /></span>Orari</h2>
              <div className='flex justify-center flex-col items-center space-y-2'>
                {
                  orari.map((item) => {
                    return <p className='text-xl text-darkBrown text-center'>{item}</p>
                  })
                }

              </div>
            </div>
          </div>
        </div>


        <div className=' p-4 m-4 rounded-lg align-middle'>
          <div class="mapouter shadow-lg min-h-[57vh]"><div class="gmap_canvas"><iframe width="600" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=osteria%20di%20montonate&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
