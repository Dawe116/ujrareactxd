import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

export const ChessSingle = () => {
    const params = useParams();
    const id = params.chessId;

    const [chess, setChess] = useState();
    const [isPending, setPending] = useState(false);
    useEffect(() => {
        {(async () => {
            setPending(true)
            try{
                const response = await fetch(`https://chess.sulla.hu/chess/${id}`);
                const result = await response.json();
                setChess(result);
            }
            catch(error){
                console.log("Hiba", error);
            }
            finally{
                setPending(false);
            }
        })();
    }
        },[]);

    return(
<div>
    {isPending || !chess.id ? (
        <div className="spinner-border text-danger"></div>
    ) : (
        <div className="card p-3 ">
            <h5 className="card-title">Sakkozó neve: {chess.name}</h5>
            <div className="lead">Születési név: {chess.birth_date} </div>
            <div className="lead">Nyert világbajnokságok száma: {chess.world_ch_won} </div>
            <div className="card-body">
            <Link to= {chess.profile_url} target="_blank">Profil link</Link>
            <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400*800"} alt={chess.name} style={{maxheight: 200}} className="img-fluid"/>
            </div>
        </div>

    )}
</div>
    )
    
}