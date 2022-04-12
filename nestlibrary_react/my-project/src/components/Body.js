import { ethers } from 'ethers'
import { useState } from 'react'




const Body = () => {
 const [walletAddress, setWalletAddress] = useState("")

 const requestAccount = async () => {
   //  alert("connect to metamask");
        if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
      const account =  await provider.send("eth_requestAccounts", []);
  // console.log(account)
        const signer = provider.getSigner();
        setWalletAddress(account)
        //console.log(provider,await signer.getAddress())
      //    console.log(provider, await signer.getAddress())
       const sign =  await signer.signMessage("Welcome!!!!")
      }
    }

   return (
       <div className='flex flex-1 flex-row justify-center items-center'>
         <div className='w-1/3 h-1/3'>
             <img className='w-full h-full' src="" alt="" />
         </div>
         <div className='mb-44 mx-24 flex flex-col justify-center text-center'>
          <div className='text-6xl mb-7'>Wakanda <div className='flex justify-center'>Coin</div></div> 
          <div className=''> 
          <button onClick = {requestAccount}
           type = "button" className='bg-cyan-500 rounded-lg px-8 py-7 w-60 text-black font-bold text-lg'>
             Connect Wallet
           </button>
          </div>
          <div className ="text-white"> Address: {walletAddress}</div>

         </div>
       </div>
   );
}


export default Body;