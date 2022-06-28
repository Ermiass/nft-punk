import React from 'react'
import instagramLogo from'../assets/owner/instagram.png';
import twitterLogo from'../assets/owner/twitter.png';
import moreIcon from'../assets/owner/more.png';

const c = () => {
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={'https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'}alt=''/>
                    </div>
                </div>
                <div className='punkDetails'style={{color:'#fff'}}>
                    <div className='title'> Bandana punk</div>
                    <span className='itemNumber'>.#3</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={'https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' }alt=''/>
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>0x91e24Af2d7a332fCd91548A19860B390465753a1</div>
                            <div className='ownerHandle'>@Ermias</div>
                        </div>
                        <div className='ownerLink'>
                                <img src={instagramLogo} alt=''/>
                                </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt=''/>
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt=''/>
                            </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default c
