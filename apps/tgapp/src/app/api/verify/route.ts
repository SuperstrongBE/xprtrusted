import {NextRequest, NextResponse} from "next/server";

import {JsonRpc, Api} from "@proton/js";

import {generateAuthParser} from "@proton/wrap-constants";

//Todo move to interface

//Todo move to interface

const rpc = new JsonRpc(process.env.NEXT_PUBLIC_CHAIN_EP!.split(","));
const api = new Api({
  rpc,
});

export async function POST(request: NextRequest) {
  const {identityProof, appUser} = await request.json();

  console.warn(identityProof);
  console.warn(appUser);

  const data = generateAuthParser.parse(identityProof);
  const isVerified = await api.checkIfKeysMatchTransaction({
    actor: data.signer.actor,
    permission: data.signer.permission,
    //TODO: Fix this type shit
    //@ts-expect-error Type error
    transaction: data.transaction,
    signatures: data.signatures,
  });
  const publicKey: string[] = await api.getAccountKeys(
    data.signer.actor.toString(),
    data.signer.permission.toString()
  );
  if (publicKey.length == 0) return NextResponse.json({auth: false});
  if (isVerified) {
    return NextResponse.json({auth: appUser});
  } else {
    return NextResponse.json({auth: false});
  }
}
