import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import axios  from 'axios'
import { useState,useEffect } from 'react';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData,setPunklistData] = useState([])
  const [selectedPunk,setSelectedPunk] = useState(0)
  // console.log(punkListData)
  useEffect(() => {
    const getMyNfts = async()=>{
      const openseaData =await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x91e24Af2d7a332fCd91548A19860B390465753a1&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunklistData(openseaData.data.assets)
    }
    return getMyNfts () 
   
    
  }, [])

  return (
    <div className='app'> <Header/>
    {punkListData.length > 0 &&(
      <>
    <Main punklistData={punkListData} selectedPunk={selectedPunk}/>
    <CollectionCard id={0} 
    name={'Bandana Punk'} 
    traits={[{'value':7}]}
    image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' />
    <Punklist punkListData={punkListData}setSelectedPunk={setSelectedPunk}/>
    </>
    )}
    </div>

   
  );
}


export default App;
