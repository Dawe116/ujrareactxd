import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';


export const DartsList = () => {
    const [isPending, setPending] = useState(false);
    const [dartsers, setDartsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
        
        setPending(true);
        try {
            const valasz = await axios.get("https://darts.sulla.hu/darts")
            setDartsers(valasz.data);
        } 
        catch (error) {
            console.log("Hiba", error);
        }
        finally {
            setPending(false);
        }
        }
        fetchData();
     
},[]);

return(
    <div>
        {isPending ? (
            <div className="spinner-border text-danger"></div>
        ) : (
            <div className="p-5 m-auto text-center content bg-ivory">
               <h2>Dártszozók</h2> 
                {dartsers.map((darts, index) => (
                    <div className="card col-sm-3 d-inline-block m-1 p-2">
                        <p className="text-dark">Dártsozó-neve: {darts.name}</p>
                        <p className="text-dark">Születési éve: {darts.birth_date}</p>
                        <p className="text-dark">Nyert világbajnokságok: {darts.world_ch_won}</p>
                        <div className="card-body">
                            <Link to={`{darts.profile_url}`} target="_blank" >Profil Link</Link>
                            <img src={darts.image_url ? darts.image_url : "https://via.placeholder.com/400*800"} className="img-fluid" alt={darts.name}  style={{maxHeight: 200}}/>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);



}