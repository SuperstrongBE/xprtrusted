import { RpcInterfaces } from 'eosjs'
import fetch from 'node-fetch'

export const getInfo = (rpcUrl:string) => fetch(`${rpcUrl}/v1/chain/get_info`).then((res: any) => res.json())

export const fetchAbi = (account_name: string,rpcUrl:string) =>
  
  fetch(`${rpcUrl}/v1/chain/get_abi`, {
    method: 'POST',
    body: JSON.stringify({
      account_name,
    }),
  }).then(async (res: any) => {
    const response = await res.json()
    
    return {
      account_name,
      abi: response.abi as RpcInterfaces.Abi,
    }
  }).catch((e) => {
    console.log('Error while fetching the ABI',e)
  })
