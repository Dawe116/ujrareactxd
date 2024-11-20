import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';


export const ChessList = () => {
    const [isPending, setPending] = useState(false);
    const [chesses, setChesses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
        
        setPending(true);
        try {
            const valasz = await axios.get("https://chess.sulla.hu/chess")
            setChesses(valasz.data);
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
               <h2>Sakkozók</h2> 
                {chesses.map((chess, index) => (
                    <div className="card col-sm-3 d-inline-block m-1 p-2">
                        <p className="text-dark">Sakkozók-neve: {chess.name}</p>
                        <p className="text-dark">Születési éve: {chess.birth_date}</p>
                        <p className="text-dark">Nyert világbajnokságok: {chess.world_ch_won}</p>
                        <div className="card-body">
                            <Link to={`{chess.profile_url}`} target="_blank" >Profil Link</Link>
                            <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400*800"} className="img-fluid" alt={chess.name}  style={{maxHeight: 200}}/>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);



}