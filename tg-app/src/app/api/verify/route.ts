import { NextRequest, NextResponse } from "next/server";

import {
  JsonRpc,
  Api,
} from "@proton/js";

import { generateAuthParser } from "@proton/wrap-constants";
import {getDbClient,type Database} from '@metalquest/db-client'
import { AppTrusedUserAccount } from "@/interfaces/trustify";

//Todo move to interface

//Todo move to interface

const rpc = new JsonRpc(process.env.NEXT_PUBLIC_CHAIN_EP!.split(","));
const api = new Api({
  rpc,
});



export async function POST(request: NextRequest) {
  const {identityProof,appUser} = (await request.json()) ;

  const supabaseClient = getDbClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE!,
  );

  console.log(identityProof)
  console.log(appUser)
  

    const data = generateAuthParser.parse(identityProof);
    const isVerified = await api.checkIfKeysMatchTransaction({
      actor: data.signer.actor,
      permission: data.signer.permission,
      //TODO: Fix this type shit
      //@ts-ignore
      transaction: data.transaction,
      signatures: data.signatures,
    });
    const publicKey: string[] = await api.getAccountKeys(
      data.signer.actor.toString(),
      data.signer.permission.toString(),
    );
    if (publicKey.length == 0) return NextResponse.json({ auth: false });
  if (isVerified) {
    
    const { data: newAccountData, error: newAccountError } =
        await supabaseClient.from('accounts').insert({
          ...appUser as AppTrusedUserAccount
        });
        
        
      
    if (newAccountError || !newAccountData) {
        return NextResponse.json({ auth: newAccountData });
        
      }

    } else {
      return NextResponse.json({ auth: false });
    }
  
  return NextResponse.json({ auth: false });

  
}
