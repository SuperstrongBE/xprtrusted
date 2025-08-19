import { JsonRpc } from "@proton/js";
import {buildRPCParams} from "../src/utils/rpc-params";
import * as fs from 'fs';


const rpcParams = [
  "code:'eosio.proton'",
  "table:'usersinfo'",
  "upperbound:##UPPERB##",
  "lowerbound:##LOWERB##",
  "scope:##SCOPE##"
]

const params = buildRPCParams(rpcParams, {
  code: "eosio.proton",
  scope: "eosio.proton",
  table: "accounts",
  upper:'paul',
  lower:'paul'
  
});

const rpc = new JsonRpc(['https://api-xprnetwork-main.saltant.io/']);
console.log(params)
const rpcQuery = await rpc.history_get_actions('snipstk', 1100,200)
console.log(JSON.stringify(rpcQuery))

// Write the rpcQuery result to a JSON file
fs.writeFileSync('MAIN-3-rpc-query-result.json', JSON.stringify(rpcQuery, null, 2));
console.log('Query result has been written to rpc-query-result.json');





// const query = await rpc.get_table_rows(params)
// console.log(query.rows)