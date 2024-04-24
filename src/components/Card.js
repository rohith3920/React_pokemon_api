



const Card = ({pokemon , loading , infoPokemon}) =>{
    console.log("ofs,vkmsdvksm" , pokemon,loading, infoPokemon)
    return (
        <>
        {
            
            loading == true
            ? 
            <h1>Loading.....</h1> 
            : 
             pokemon.map((item) => {
                    return (
                        <> 
                             <div className="card"  onClick={() => infoPokemon(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.species.name}</h2>
            </div>
            </>

                  
                    )
            })
        }
          
        </>
    )
}

export default  Card