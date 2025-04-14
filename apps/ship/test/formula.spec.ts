import { parseFormula, parseOutput, runFormulas } from "../src/utils/formula-parser"

const transferToPaulActionResult =  {
     chain_id: '71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd',
     block_id: '12C4243C51FAFB32D051241FFD70FCA4518ADCB5E314CD4154EE58865DF2EABD',
     block_num: 314844220,
     transaction_id: '7BAAF3D91056428E342D798B02EED399D1FDA0FD8B119D6416003627CF92D7D0',
     global_sequence: '521922467',
     receipt: {
       receiver: 'rockeronebp',
       act_digest: '7E684BD7B4ECADAF856B19536539FCD0C1577F483A3C5B218EBBE077B9570D66',
       global_sequence: '521922467',
       recv_sequence: '445',
       auth_sequence: [ [Object] ],
       code_sequence: 2,
       abi_sequence: 1
     },
     account: 'eosio.token',
     name: 'transfer',
     authorization: [ { actor: 'rockeronebp', permission: 'owner' } ],
     data: {
       from: 'rockeronebp',
       to: 'paul',
       quantity: '10.0000 XUSDC',
       memo: 'redeem,XUSDC'
     },
}
// The validation formula for a quest, as it will be inserted in the DB
const formulasFor10XPRSingleTransfer = [
  "account:eq('eosio.token')",                    // Check contract name
  "name:eq('transfer')",                          // Check action name
  "authorization.0.actor:eq(receipt.receiver)",   // check the action signer to be equal to the receipt.receiver
  "data.from:eq(receipt.receiver)",               // check the data.to to be equal to the receipt.receiver
  "data.quantity:eq(10)",                         // check the data.quantity to be equal to 10
  "output(data.quantity)"                         // output the quantity 10
];

const formulasFor100XPRCumulativeTransfer = [
  "account:eq('eosio.token')",                    // Check contract name
  "name:eq('transfer')",                          // Check action name
  "authorization.0.actor:eq(receipt.receiver)",   // check the action signer to be equal to the receipt.receiver
  "data.from:eq(receipt.receiver)",               // check the data.to to be equal to the receipt.receiver
  "data.quantity:symbol('XUSDC')",                  // output the quantity 10
  "data.memo:contains('redeem')",                  // output the quantity 10
  "output(data.quantity)"                         // output the quantity 10
];
                           

console.log('formulasFor100XPRCumulativeTransfer',runFormulas(formulasFor100XPRCumulativeTransfer,transferToPaulActionResult)) //{output: 10,}

const formulasWithDefaultOutput = [
  "account:eq('eosio.token')",                    // Check contract name
  "name:eq('transfer')",                          // Check action name
  "authorization.0.actor:eq(receipt.receiver)",   // check the action signer to be equal to the receipt.receiver
  "data.from:eq(receipt.receiver)",               // check the data.to to be equal to the receipt.receiver
  "data.quantity:eq(10)",                         // check the data.quantity to be equal to 10
];

console.log(runFormulas(formulasWithDefaultOutput,transferToPaulActionResult)) //{output: 10,}
   
// console.log("\n## EQ ##")
// console.group()
// console.log(parseFormula("authorization.0.actor:eq('paul')",transferToPaulActionResult),"false")
// console.log(parseFormula("authorization.0.actor:eq('rockeronebp')",transferToPaulActionResult),"true")
// console.groupEnd()


// console.log("\n## EQ ##")
// console.group()
// console.log(parseFormula("data.to:eq('paul')",transferToPaulActionResult),"true")
// console.log(parseFormula("data.to:eq('paul')",transferToPaulActionResult),"true")
// console.log(parseFormula("data.to:eq(receipt.receiver)",transferToPaulActionResult),"true")
// console.log(parseFormula("data.quantity:eq(10)",transferToPaulActionResult),"true")
// console.groupEnd()
// console.log("\n## GTE ##")
// console.group()
// console.log(parseFormula("data.quantity:gte(10)",transferToPaulActionResult),"true")
// console.log(parseFormula("data.quantity:gte(10.01)",transferToPaulActionResult),"false")
// console.log(parseFormula("data.quantity:gte(9.99)",transferToPaulActionResult),"true")
// console.groupEnd()

// console.log("\n## LTE ##")
// console.group()
// console.log(parseFormula("data.quantity:lte(10)", transferToPaulActionResult), "true")
// console.log(parseFormula("data.quantity:lte(9.99)",transferToPaulActionResult),"false")
// console.log(parseFormula("data.quantity:lte(10.01)", transferToPaulActionResult), "true")
// console.groupEnd()

// console.log("\n## OUTPUT ##")
// console.group()
// console.log(parseOutput("output(.01)", transferToPaulActionResult), "true")
// console.log(parseOutput("output(data.quantity)", transferToPaulActionResult), "true")
// console.groupEnd()



