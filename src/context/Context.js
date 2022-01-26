import React, { createContext, useState, useEffect } from "react";

// api
import { getInfo } from "../service/info";
import { getSpeciality, getAllMenu } from "../service/menu";

export const DataContext = createContext()

function DataContextProvider(props) {

    //state
    const [orari, setOrari] = useState()
    const [speciality, setSpeciality] = useState()
    const [menu, setMenu] = useState()

    useEffect(() => {

        const getData = async () => {

            // dati home
            const info = await getInfo()
            const spec = await getSpeciality()
            setOrari(info[0].hours)
            setSpeciality(spec)

            //dati menù
            const menu = await getAllMenu()
            setMenu(menu)
        }
        getData()  

    }, []);

    return (
        <DataContext.Provider value={{ orari, speciality,menu }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;
