
import {ResolvedTransaction, Signature} from '@proton/link'
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
  transaction: ResolvedTransaction;
  signatures: Signature[];
};
