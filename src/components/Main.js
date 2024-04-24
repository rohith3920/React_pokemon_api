import { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";


const Main =() => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] =useState(true);
    const [url,setUrl] = useState(" https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [PreviousUrl,setPreviousUrl] =useState();
    const [pokeDex,setPokeDex] =useState()

    const PokeFun = async ()=>{
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data.results);
        setNextUrl(res.data.next)
        setPreviousUrl(res.data.previous);
        getPokeMon(res.data.results);
        setLoading(false);
        console.log(pokeData)
    }

    const getPokeMon = async (res) =>{
        res.map(async(item) => {
            // console.log(  "gtrgrbgtgt"+item.url);
            const result = await axios.get(item.url)
           
            console.log("rohith",result.data);
                setPokeData(state => {
                    state = [...state,result.data]
                //   console.log(  "satte"+state);
                state.sort((a,b)=>a.id>b.id?1:-1)
                    return state;
               
                })
        })
    }

    useEffect(() => {
        PokeFun();
    }, [url])
    return (
        <>
            <div className="container">
                <div className="left-content">
                        <Card  pokemon ={pokeData} loading={loading} infoPokemon ={poke =>setPokeDex(poke) }/>
                       
                        <div className="btn-group">
                           { PreviousUrl && <button onClick={()=> {
                                setPokeData([])
                                setUrl(PreviousUrl)
                            }}>Previous</button>}
{
      nextUrl &&                      <button onClick={()=> {
                                 setPokeData([])
                                setUrl(nextUrl)
                            }}>Next</button>}
                        </div>

                </div>
                <div className="right-content">
                        <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}


export default Main;