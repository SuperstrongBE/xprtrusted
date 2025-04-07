import { ApiInterfaces } from "xprnkit";

export type IdentityProofResponse = {
  isVerified: boolean;
  created: boolean;
  accessToken: string;
  refreshToken: string;
};

export type IdentityProofParams = {
  signer: {
    actor: string;
    permission: string;
    public_key: string;
  };
  transaction: ApiInterfaces.Transaction;
  signatures: {data:Uint8Array,type:string};
};
