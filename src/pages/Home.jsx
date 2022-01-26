import React, { useEffect, useState, useRef } from 'react';

//icon
import { ArrowRightIcon, LocationMarkerIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/solid'

//image
import logo from "../img/logo.png"

// gallery
import ModalImage from "react-modal-image";

// api
import { getInfo } from '../service/info';

// router 
import { Link, useNavigate } from 'react-router-dom';
import { getSpeciality } from '../service/menu';

//animation


function Home() {

  //state
  const [orari, setOrari] = useState()
  const [speciality, setSpeciality] = useState()

  // ref
  const hero = useRef()
  const infoSection = useRef()


  //rotuer
  const navigate = useNavigate()

  useEffect(() => {

    const getData = async () => {
      const res = await getInfo()
      const spe = await getSpeciality()
      setOrari(res[0].hours)
      setSpeciality(spe)
      console.log(spe)
    }
    getData()


  }, []);


  if (!orari && !speciality) return <div>Loading...</div>

  return (
    <div className='bg-lightBrown'>

      {/* HERO */}
      <section className='grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center mx-auto max-w-6xl px-4'>
        <div className='space-y-8 opacity-100' ref={hero}>
          <h1 className='font-extrabold text-5xl text-center md:text-left text-darkBrown'>Osteria di Montonate</h1>
          <h2 className='font-light text-xl text-center md:text-left text-darkBrown'>“Non si può pensare bene, amare bene, dormire bene se non si ha mangiato bene” (Virginia Woolf)“</h2>
          <div className='flex space-x-8 justify-center md:justify-start'>
            <div className='group rounded-2xl cursor-pointer py-4 w-2/5 bg-osteriaRed shadow-xl text-white flex flex-row justify-around items-center'>
              <a href="tel:0331270183">
                <div>Prenota</div>
              </a>
              <div className='rounded-full group-hover:translate-x-1 transform duration-200 border border-white w-9 h-9 flex items-center justify-center'><PhoneIcon className='h-6' /></div>

            </div>

            <div onClick={() => navigate("/menu")} className='group rounded-2xl cursor-pointer py-4 w-2/5   bg-white shadow-xl text-darkBrown flex flex-row justify-around items-center'>
              <div>Menu</div>
              <div className='rounded-full group-hover:translate-x-1 transform duration-200 border border-darkBrown w-9 h-9 flex items-center justify-center'><ArrowRightIcon className='h-6' /></div>


            </div>
          </div>
        </div>

        <div className='hidden md:block'>
          <img className="p-20" src={logo} />
        </div>
      </section>

      {/* INFO ORARI E LUOGO */}
      <section className='bg-lightBrown2 min-h-[40vh] '>
        <div className='mx-auto max-w-6xl px-4 opacity-100'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-start opacity-100' ref={infoSection}>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'><span><LocationMarkerIcon className='h-12 pr-4' /></span>Dove siamo</h2>
              <p className='text-xl text-darkBrown'>Via Cavour, 22, 21020 Mornago VA</p>
            </div>
            <div className='flex flex-col justify-center items-center pb-16'>

              <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'><span><CalendarIcon className='h-12 pr-4' /></span>Orari</h2>
              <div className='flex justify-center flex-col items-center space-y-2'>
                {
                  orari.map((item) => {
                    return <p className='text-xl text-darkBrown'>{item}</p>
                  })
                }

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SPECIALITA' */}
      <section className=' bg-osteriaRed min-h-[40vh]'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-white text-4xl font-bold text-center py-16'>Le nostre specialità</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
            {
              speciality?.map((data) => {
                return (
                  <div className='flex flex-col justify-between rounded-lg bg-white p-8 shadow-lg text-darkBrown opacity-100' >

                    <h2 className='text-center font-semibold text-3xl'>{data.name}</h2>
                    <p className='text-center font-regular text-sm'>{data.info}</p>
                    <ul className='list-disc p-4'>
                      {
                        data.dishes.map((dish) => {
                          return (
                            <li className='text-xl py-1'>{dish}</li>
                          )
                        })
                      }
                    </ul>
                    <div className='flex justify-center bg-white'>
                      <p className='text-2xl p-4 border-2 rounded-lg border-osteriaRed'>{data.price}</p>
                    </div>
                  </div>
                )
              })
            }





          </div>

          <Link to="/menu">
            <div className='flex justify-center py-16'>
              <div className='rounded-2xl cursor-pointer py-4 px-16 bg-white shadow-xl text-darkBrown flex flex-row justify-around items-center'>
                <div>Scopri tutto il menù</div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className='mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2  min-h-[30vh] py-16 justify-items-center items-center'>
        <div className="flex flex-col justify-center items-center py-4 space-y-2">
          <p>- PRENOTA UN TAVOLO -</p>
          <p className='text-4xl font-semibold text-darkBrown'>0331 270183</p>
        </div>
        <a href="tel:0331270183">
          <div className='flex justify-center'>
            <div className='rounded-2xl cursor-pointer py-4 px-16 bg-osteriaRed shadow-xl text-white flex flex-row justify-around items-center'>
              <div>Chiamaci</div>
            </div>
          </div>
        </a>
      </section>


      {/* GALLERY */}
      <section className='bg-lightBrown2 min-h-[40vh] pb-16'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-darkBrown flex items-center justify-center text-4xl font-bold text-center pt-16 pb-8'>Gallery</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 h-4/5'>
            <div className='relative rounded-lg overflow-hidden w-full'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?restaurant"
                large="https://source.unsplash.com/random/?restaurant"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?paella"
                large="https://source.unsplash.com/random/?paella"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?pasta"
                large="https://source.unsplash.com/random/?pasta"
                alt="Gallery"
                hideDownload
              />
            </div>



            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full   shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?paella"
                large="https://source.unsplash.com/random/?paella"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?restaurant"
                large="https://source.unsplash.com/random/?restaurant"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?pasta"
                large="https://source.unsplash.com/random/?pasta"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='relative rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?italian"
                large="https://source.unsplash.com/random/?italian"
                alt="Gallery"
                hideDownload
              />
            </div>

            <div className='rounded-lg overflow-hidden'>
              <ModalImage
                className=" rounded-xl object-cover md:h-[50vh] h-[40vh] w-full  shadow-xl cursor-pointer hover:scale-110 transition duration-500  "
                small="https://source.unsplash.com/random/?pasta"
                large="https://source.unsplash.com/random/?pasta"
                alt="Gallery"
                hideDownload
              />
            </div>




          </div>
        </div>



      </section>


    </div>
  );

}

export default Home;
