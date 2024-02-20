import {React, useState} from 'react';


const Agents = (props) => {
    // const [champ, setChamp] = useState()
    // useEffect(()=> {
        //  fetch('https://valorant-api.com/v1/agents')
        // .then(res => res.json())
        // .then(data => {
            //   setChamp(data.data)
            //   console.log(data.data);
            // })
            // .catch(err => console.log(err))
            // }, [])
      
    
    let data = props.Data.data

    console.log(data[0].role.displayName.includes("sentinel"));
    return (
        <div className='pos agent'>
            {
                data?.map((e) => 
                <div key={e.uuid} className="card back-center" >
                    
                        <div className="desc-perso">
                            <img src={e.displayIcon} alt="portrait" />
                            <h1 className='color2'>{e.displayName}</h1>
                        </div>
                        
                </div>
                )

            }
        </div>
    );
};

export default Agents;