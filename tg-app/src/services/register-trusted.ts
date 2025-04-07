import {IdentityProofParams, IdentityProofResponse} from "@/interfaces/identity-proof";
import { AppTrusedUserAccount } from "@/interfaces/trustify";

console.log(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/verify`)
export async function registerTrusted(identityProof: IdentityProofParams, appUser: AppTrusedUserAccount): Promise<IdentityProofResponse | null> {
  const query =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/verify`, {
    method: "post",
    body: JSON.stringify({identityProof,appUser}),
  })
  const response = await query.json();
  if (response.status == 200) return null;
  if (!response || !response.auth) return null;
  return response.auth as IdentityProofResponse
}
