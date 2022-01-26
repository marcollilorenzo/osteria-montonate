import React, { useContext } from 'react';
import Loading from '../components/Loading';
import MenuCard from '../components/MenuCard';

// context
import { DataContext } from '../context/Context';

function Menu() {

    //context
    const { menu } = useContext(DataContext)

    if (!menu) return <Loading />

    return (
        <div className='bg-lightBrown pb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto'>
                {
                    menu.map((item) => {
                        return <MenuCard data={item} />
                    })
                }
            </div>
        </div>
    );
}

export default Menu;
