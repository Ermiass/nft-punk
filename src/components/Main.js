import React,{useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk,punklistData}) => {
    const [activePunk, setActivePunk] = useState(punklistData[0])
    useEffect(() => {
        setActivePunk(punklistData[selectedPunk])
    }, [punklistData,selectedPunk])
    return (
   <div className='main'>
         <div className='mainContent'>
                <div className='punkHighlight'>
            <div className='punkContainer'>
                <img className='selectedPunk'src={activePunk.image_url}alt=''/>
            </div>
            </div>
            <div className='punkDetails'style={{color:'#fff'}}>
                <div className='title'>
                    {activePunk.name.substring(0,14)}
                    
                
                <span className='itemNumber'>.#{activePunk.token_id}</span>
                </div>
               
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url}alt=''/>
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@Ermias</div>
                            </div>
                            </div>
                         </div>
                          </div>
                            <div className='ownerLink1'>
                                <div className='ownerLink'>
                                    <img src={instagramLogo}alt=''/>
                                </div>
                                <div className='ownerLink'>
                                    <img src={twitterLogo}alt=''/>
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon}alt=''/>
                                </div>
                            </div>
                    
              
             </div>
        </div>
    )
}

export default Main
