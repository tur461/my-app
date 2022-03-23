import Web3 from "web3";
import { ADMIN_WALLET_ADDRESS } from "../../constant"
import admin_abi from '../../assets/abi/Admin.json';
import dummyToken_abi from '../../assets/abi/DummyToken.json';
import ATR_abi from '../../assets/abi/ATR.json';
import {DUMMY_TOKEN_ADDRESS, ADMIN_ADDRESS} from '../../constant';

class Web3Service {

    dummyToken_instance={}
    admin_instance={}

    constructor() {
        this.initContract();
    }

    initContract() {
        try{
            const web3 = new Web3(window.ethereum);
            this.dummyToken_instance = new web3.eth.Contract(dummyToken_abi,DUMMY_TOKEN_ADDRESS);
            this.admin_instance = new web3.eth.Contract(admin_abi,ADMIN_ADDRESS);
            // this.tokenSale_instance = new web3.eth.Contract()
        }catch(err){
            throw err;
        }
    }
}

export default new Web3Service;
