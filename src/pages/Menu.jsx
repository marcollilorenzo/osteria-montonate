import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';

// api
import { getAllMenu } from '../service/menu';

function Menu() {

    const [menu, setMenu] = useState()

    useEffect(() => {

        const getData = async () => {
            const res = await getAllMenu()
            setMenu(res)
            console.log(res)
        }
        getData()

    }, []);

    if (!menu) return <div>Loading...</div>

    return (
        <div className='bg-lightBrown pb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'>
                {
                    menu.map((item)=>{
                        return <MenuCard data={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default Menu;
