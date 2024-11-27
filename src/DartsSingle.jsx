import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

export const DartsSingle = ()=> {
    const params = useParams();
    const id = params.dartsId;

const [darts, setDarts] = useState([]);
const [isPending, setPending] = useState(false);
useEffect(() => {
    {(async () => {
        setPending(true);
        try {
            const response = await axios.get(`https://darts.sulla.hu/darts/${id}`)
            setDarts(response.data);
        }
        catch(error) {
            console.log("Hiba: ", error);
        }
        finally {
            setPending(false);
        }
    })();
}
},[]);

return (
    <div className="p-5 m-auto text-center content bg-levander">
        {isPending || !darts.id ? (
            <div className="spinner-border text-danger"></div>
        ) : (
            <div className="card p-3">
                <div className="card-body">
                <h5 className="card-title">Dártsozó neve: {darts.name}</h5>
                <div className="lead">Születési név: {darts.birth_date}</div>
                <div className="lead">Nyert világbajnokságok száma: {darts.world_ch_won}</div>
                <Link to={darts.profile_url} target="_blank">Profil link</Link><br />
                <img src={darts.image_url ? darts.image_url : "https://via.placeholder.com/400x800"} 
                alt={darts.name} style={{ maxHeight: "250px"}} className="img-fluid" />
            </div>
            <Link to="/"><i className="bi bi-backspace-fill"></i></Link>
            </div>
        )}
    </div>
);
}