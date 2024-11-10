import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {

    const url = `https://www.boredapi.com/api/activity`
    const [cleanDataDetail, setcleanDataDetail] = useState([])
      
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url)
    }, [ setcleanDataDetail])


    return (
        <div>
            <h1>alo</h1>
            <TableMain data={cleanDataDetail}/>
            <Outlet/>
            <p>{cleanDataDetail}</p>
        </div>
    )
}

export default Main;