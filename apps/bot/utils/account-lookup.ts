import {JsonRpc} from "@proton/js";
import {toEOSIOSha256} from "./sha256";
import type {Tables} from "../interfaces/xprtrustify";

const jsonRpc = new JsonRpc(["https://testnet.rockerone.io"]);

export const isAccountTrusted = async (hash: string): Promise<boolean> => {
  return await jsonRpc
    .get_table_rows({
      json: true,
      code: "xprtrustify",
      scope: "xprtrustify",
      table: "accounts",
      limit: 1,
      index_position: 2,
      key_type: "sha256",
      lower_bound: toEOSIOSha256(hash),
      upper_bound: toEOSIOSha256(hash),
    })
    .then((res: {rows: Tables<"TrustedAccount">[]}) => {
      if (res.rows.length > 0) {
        const trustedKey = res.rows[0].trustedKey;
        return trustedKey == hash;
      }
      return false;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
