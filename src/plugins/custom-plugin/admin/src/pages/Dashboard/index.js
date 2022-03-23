import React,{useState} from 'react'
import useMetaMask from '../../hooks/metamask';
import axios from 'axios'
import { change_owner, get_owner, ADMIN} from '../../components/contractService';

const Dashboard = () => {
    const {connect}=useMetaMask()
    const handleConnect =()=>{
      connect().then(val=>{
        alert('metamask connected')
        console.log(val,'val====')
      })
    }
    const [currentAccount, setCurrentAccount] = useState(null);

    const creatingPool = async (e)=>{
      const resCreatePool = await ADMIN();
      console.log("resCreatePool");
    }

    const callApi=async ()=>{
       await axios.get('http://localhost:5000/').then(res=>{
         alert(res.data.data)
       })
    }

  return (
    <div> <button onClick={()=>handleConnect()} className='cta-button connect-wallet-button'>
    Connect Wallet
  </button>
  
     <br>
    </br>
    <button onClick={()=>callApi()} className='cta-button connect-wallet-button'>
        Call Api
    </button> 
    <br>
    </br>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <button onClick={(e)=>creatingPool(e)}>
      Create Pool
    </button>
  </div>
  )
}

export default Dashboard