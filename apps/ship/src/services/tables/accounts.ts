// import { Tables } from '../../interfaces/pay.posx';

import {loadReader} from "../../ship-reader";
import {WsRelay} from "../relay/ws-relay";
import {Tables} from "../../interfaces/xprtrustify";

const runProcess = async () => {
  const {start, close$, rows$} = await loadReader();
  start();

  rows$.subscribe(async row => {
    if (row.table == "accounts") {
      console.log(row);
      const castedRow: Tables<"TrustedAccount"> =
        row.value as Tables<"TrustedAccount">;
      console.log(castedRow);
      const data = {
        hash: castedRow.trustedKey.toString(),
      };
      WsRelay.getInstance().emitInvlidation(JSON.stringify(data));
    }
  });

  close$.subscribe(() => console.log("connection closed"));
  console.log("accounts is listening");
};

runProcess();
