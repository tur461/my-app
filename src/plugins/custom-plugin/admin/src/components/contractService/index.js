import Web3 from 'web3';
import Web3Service from "./web3.service";
import { ADMIN_WALLET_ADDRESS, CHAIN_ID } from '../../constant';
import {toast} from '../Toast/toast';

const web3 = new Web3(window.ethereum);
const chain_id=97;

export const ADMIN=async()=>{
    // await dummyToken_instance.methods.approve(WALLET_ADDRESS, 500000000000000000000000)
    try{
        if(chain_id==CHAIN_ID){
            if(ADMIN_WALLET_ADDRESS){
                const admin_instance = Web3Service.admin_instance;
                const estimatedGas=await admin_instance.methods.createPool(
                                            ADMIN_WALLET_ADDRESS
                                //rest of the parameters come here after contract deployment
                    ).estimateGas({from:ADMIN_WALLET_ADDRESS})
                const tx = {
                data: admin_instance.methods.createPool(
                    ADMIN_WALLET_ADDRESS
                                //rest of the parameters come here after contract deployment
                    ).send({from:ADMIN_WALLET_ADDRESS, gas:estimatedGas}).then(res=>console.log(res))
                };
            }else{
                toast.error("Only Admin is Allowed");
            }
        }else{
            toast.info("Please select Binance Test Net");
        }
    }catch(error){
        toast.error("error", error);
    }
    // const signPromise = await signTransaction();
}


