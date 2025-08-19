import {JsonRpc} from "@proton/js";
import {runFormulas} from "../src/utils/formula-parser";
import {flattenTraces} from "../src/utils/traces";
import * as R from "ramda";
const tx = {
  sync: 313900251,
  data: {
    seq: "2582460435",
    block_num: "313890200",
    block_time: "2025-04-14T08:44:15.500Z",
    trx_id: "b9f52d28126e403adafb52cb212c7718f3987e45df8398b1e3ce5b186e97df2e",
    trace: {
      block_num: "313890200",
      block_timestamp: "2025-04-14T08:44:15.500",
      trace: {
        id: "b9f52d28126e403adafb52cb212c7718f3987e45df8398b1e3ce5b186e97df2e",
        status: "executed",
        cpu_usage_us: "13951",
        net_usage_words: "18",
        elapsed: "0",
        net_usage: "144",
        scheduled: "false",
        action_traces: [
          {},
          {},
          {
            action_ordinal: "3",
            creator_action_ordinal: "1",
            receipt: {
              receiver: "noloss",
              act_digest:
                "cbbdea11ce341aef652cb730cf8754ea40adfd7e078d7f3d4dd37ae095674292",
              global_sequence: "2582460437",
              recv_sequence: "46752028",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162376",
                },
              ],
              code_sequence: "1113",
              abi_sequence: "689",
            },
            receiver: "noloss",
            act: {
              account: "noloss",
              name: "arblegone",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                user: "jamestaggart",
                buy_contract: "xmd.token",
                buy_from: "dex",
                buy_memo: "XPR",
                quantity: "117.983533 XMD",
                sell_contract: "eosio.token",
                sell_sym: "XPR",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "4",
            creator_action_ordinal: "1",
            receipt: {
              receiver: "noloss",
              act_digest:
                "4f2c96987af9b59b5120567b8ddba2a2ec053a7d2ff22c99548a9b416ee3ef35",
              global_sequence: "2582460452",
              recv_sequence: "46752029",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162384",
                },
              ],
              code_sequence: "1113",
              abi_sequence: "689",
            },
            receiver: "noloss",
            act: {
              account: "noloss",
              name: "arblegtwoadd",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                user: "jamestaggart",
                sell_contract: "eosio.token",
                sell_sym: "XPR",
                sell_to: "proton.swaps",
                sell_memo: "METAXPR,1",
                additional_sell_contract: "xtokens",
                additional_sell_sym: "METAL",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "5",
            creator_action_ordinal: "1",
            receipt: {
              receiver: "noloss",
              act_digest:
                "be6da54a07b674abb83ae5b81af4e1c60bfb2be811b36a5aef9378ad00ebe3c5",
              global_sequence: "2582460460",
              recv_sequence: "46752030",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162388",
                },
              ],
              code_sequence: "1113",
              abi_sequence: "689",
            },
            receiver: "noloss",
            act: {
              account: "noloss",
              name: "arblegtwo",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                user: "jamestaggart",
                sell_contract: "xtokens",
                sell_sym: "METAL",
                sell_to: "proton.swaps",
                sell_memo: "METAXMD,1",
                additional_sell_contract: null,
                additional_sell_sym: null,
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "6",
            creator_action_ordinal: "1",
            receipt: {
              receiver: "noloss",
              act_digest:
                "011fd6fb2de7e17ce7e1ed22f6195e4228bcb6200f6ee0d071687f1c133bd1eb",
              global_sequence: "2582460468",
              recv_sequence: "46752031",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162392",
                },
              ],
              code_sequence: "1113",
              abi_sequence: "689",
            },
            receiver: "noloss",
            act: {
              account: "noloss",
              name: "checkbalext",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                user: "jamestaggart",
                contract: "xmd.token",
                sym: "XMD",
                message:
                  "117.983533 XMD XMD dex XPR XPR proton.swaps METAXPR,1 METAL proton.swaps METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "7",
            creator_action_ordinal: "3",
            receipt: {
              receiver: "xmd.token",
              act_digest:
                "454a585b0e36a80b683052bbe1926de7df9492f61a664d9f32ae965510f5ca66",
              global_sequence: "2582460438",
              recv_sequence: "22924995",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162377",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "xmd.token",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "dex",
                quantity: "117.983533 XMD",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "8",
            creator_action_ordinal: "3",
            receipt: {
              receiver: "dex",
              act_digest:
                "3f47863ac3afe485b84614945c51fa1d6d6e2618f783b9c3797de00735fede8b",
              global_sequence: "2582460441",
              recv_sequence: "189909659",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162380",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "placeorder",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                market_id: 1,
                account: "jamestaggart",
                order_type: 1,
                order_side: 1,
                quantity: "117983533",
                price: "9223372036854775806",
                bid_symbol: {
                  sym: "4,XPR",
                  contract: "eosio.token",
                },
                ask_symbol: {
                  sym: "6,XMD",
                  contract: "xmd.token",
                },
                trigger_price: "0",
                fill_type: 1,
                referrer: "taggartdagny",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [
              {
                account: "dex",
                delta: "124",
              },
            ],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "9",
            creator_action_ordinal: "3",
            receipt: {
              receiver: "dex",
              act_digest:
                "87558917d0d72f0319b135cafb83e89ba4d8bb0e6c7803e2c803f523cf81d8e9",
              global_sequence: "2582460443",
              recv_sequence: "189909661",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162381",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "process",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                q_size: 30,
                show_error_msg: null,
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [
              {
                account: "dex",
                delta: "-124",
              },
            ],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "10",
            creator_action_ordinal: "3",
            receipt: {
              receiver: "dex",
              act_digest:
                "8c05a7d23ef4223f57c1163f4619b6740fc0869df1c666bb7cc2701aa0667f07",
              global_sequence: "2582460447",
              recv_sequence: "189909665",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162382",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "processltp",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: "01000a0000",
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "11",
            creator_action_ordinal: "3",
            receipt: {
              receiver: "dex",
              act_digest:
                "d2c286e615e87e0a7c2e34a66ea742bb565d6645a2106713f6c550f4e708f40e",
              global_sequence: "2582460448",
              recv_sequence: "189909666",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162383",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "withdrawall",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                account: "jamestaggart",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [
              {
                account: "dex",
                delta: "-145",
              },
            ],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "12",
            creator_action_ordinal: "7",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "454a585b0e36a80b683052bbe1926de7df9492f61a664d9f32ae965510f5ca66",
              global_sequence: "2582460439",
              recv_sequence: "8032529",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162378",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "jamestaggart",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "dex",
                quantity: "117.983533 XMD",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "13",
            creator_action_ordinal: "7",
            receipt: {
              receiver: "dex",
              act_digest:
                "454a585b0e36a80b683052bbe1926de7df9492f61a664d9f32ae965510f5ca66",
              global_sequence: "2582460440",
              recv_sequence: "189909658",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162379",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "dex",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "dex",
                quantity: "117.983533 XMD",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [
              {
                account: "dex",
                delta: "145",
              },
            ],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "14",
            creator_action_ordinal: "8",
            receipt: {
              receiver: "dex",
              act_digest:
                "0da24dac674daa9485116a4c74d698b5f1030d99d151c6d000435f7f8922f813",
              global_sequence: "2582460442",
              recv_sequence: "189909660",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349560",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "logorder",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                order: {
                  order_id: "20596294",
                  market_id: 1,
                  quantity: "117983533",
                  price: "9223372036854775806",
                  account_name: "jamestaggart",
                  order_side: 1,
                  order_type: 1,
                  trigger_price: "0",
                  fill_type: 1,
                },
                quantity_change: "117983533",
                status: "create",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "15",
            creator_action_ordinal: "9",
            receipt: {
              receiver: "dex",
              act_digest:
                "dfbba581b7a743a5c6d4cb979e7fc7d6d18a6326cad97438831aa5881f44e7cb",
              global_sequence: "2582460444",
              recv_sequence: "189909662",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349561",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "logexec",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                trade_id: "10181293",
                market_id: 1,
                price: "3861",
                bid_user: "24jp",
                bid_user_order_id: "20596292",
                bid_total: "305577656",
                bid_amount: "305547099",
                bid_fee: "30557",
                bid_referrer: "",
                bid_referrer_fee: "0",
                ask_user: "jamestaggart",
                ask_user_order_id: "20596294",
                ask_total: "117983533",
                ask_amount: "117865550",
                ask_fee: "117983",
                ask_referrer: "",
                ask_referrer_fee: "0",
                order_side: 1,
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "16",
            creator_action_ordinal: "9",
            receipt: {
              receiver: "dex",
              act_digest:
                "7bac8eac667fcb645f241862fa7d80f29d29c811576e4efaa6d7ad6fb5f4aa18",
              global_sequence: "2582460445",
              recv_sequence: "189909663",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349562",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "logorder",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                order: {
                  order_id: "20596292",
                  market_id: 1,
                  quantity: "946378615",
                  price: "3861",
                  account_name: "24jp",
                  order_side: 2,
                  order_type: 0,
                  trigger_price: "0",
                  fill_type: 0,
                },
                quantity_change: "305577656",
                status: "update",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "17",
            creator_action_ordinal: "9",
            receipt: {
              receiver: "dex",
              act_digest:
                "d2c641b899a08ec96af2d067380f1a59dd4305e91150be879690dcdafbbd1db9",
              global_sequence: "2582460446",
              recv_sequence: "189909664",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349563",
                },
              ],
              code_sequence: "17",
              abi_sequence: "4",
            },
            receiver: "dex",
            act: {
              account: "dex",
              name: "logorder",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                order: {
                  order_id: "20596294",
                  market_id: 1,
                  quantity: "0",
                  price: "9223372036854775806",
                  account_name: "jamestaggart",
                  order_side: 1,
                  order_type: 1,
                  trigger_price: "0",
                  fill_type: 1,
                },
                quantity_change: "117983533",
                status: "delete",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "18",
            creator_action_ordinal: "11",
            receipt: {
              receiver: "eosio.token",
              act_digest:
                "86648a15037cba1dbaaac0528d4811ec699391c69364e00441a470b668ea71e9",
              global_sequence: "2582460449",
              recv_sequence: "150461381",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349564",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "eosio.token",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                from: "dex",
                to: "jamestaggart",
                quantity: "30554.7099 XPR",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "19",
            creator_action_ordinal: "18",
            receipt: {
              receiver: "dex",
              act_digest:
                "86648a15037cba1dbaaac0528d4811ec699391c69364e00441a470b668ea71e9",
              global_sequence: "2582460450",
              recv_sequence: "189909667",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349565",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "dex",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                from: "dex",
                to: "jamestaggart",
                quantity: "30554.7099 XPR",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "20",
            creator_action_ordinal: "18",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "86648a15037cba1dbaaac0528d4811ec699391c69364e00441a470b668ea71e9",
              global_sequence: "2582460451",
              recv_sequence: "8032530",
              auth_sequence: [
                {
                  account: "dex",
                  sequence: "137349566",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "jamestaggart",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "dex",
                  permission: "active",
                },
              ],
              data: {
                from: "dex",
                to: "jamestaggart",
                quantity: "30554.7099 XPR",
                memo: "",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "21",
            creator_action_ordinal: "4",
            receipt: {
              receiver: "eosio.token",
              act_digest:
                "c4b30c87117dc426908438ed93a5c17a62c03330361b6d711b39d4de6e7b33b2",
              global_sequence: "2582460453",
              recv_sequence: "150461382",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162385",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "eosio.token",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "30554.7099 XPR",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "22",
            creator_action_ordinal: "21",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "c4b30c87117dc426908438ed93a5c17a62c03330361b6d711b39d4de6e7b33b2",
              global_sequence: "2582460454",
              recv_sequence: "8032531",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162386",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "jamestaggart",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "30554.7099 XPR",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "23",
            creator_action_ordinal: "21",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "c4b30c87117dc426908438ed93a5c17a62c03330361b6d711b39d4de6e7b33b2",
              global_sequence: "2582460455",
              recv_sequence: "48946010",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162387",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "proton.swaps",
            act: {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "30554.7099 XPR",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "24",
            creator_action_ordinal: "23",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "d50cc4fd744ff19122b5e003221a6a3ffe482ec3d1fa75f54a419d9abd7da13d",
              global_sequence: "2582460456",
              recv_sequence: "48946011",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593645",
                },
              ],
              code_sequence: "17",
              abi_sequence: "6",
            },
            receiver: "proton.swaps",
            act: {
              account: "proton.swaps",
              name: "swaplog",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                owner: "jamestaggart",
                token1: "30554.7099 XPR",
                token2: "1431.38475300 METAL",
                pool1: "7404835.21806635 METAL",
                pool2: "158096086.3367 XPR",
                pool1_contract: "xtokens",
                pool2_contract: "eosio.token",
                amplifier: 0,
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "25",
            creator_action_ordinal: "23",
            receipt: {
              receiver: "xtokens",
              act_digest:
                "7fc4d1ceac32aa243e8bd196978f271162dc2665a0e0c8b4e19ab9623647f86c",
              global_sequence: "2582460457",
              recv_sequence: "38321448",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593646",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "xtokens",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "1431.38475300 METAL",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "26",
            creator_action_ordinal: "25",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "7fc4d1ceac32aa243e8bd196978f271162dc2665a0e0c8b4e19ab9623647f86c",
              global_sequence: "2582460458",
              recv_sequence: "48946012",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593647",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "proton.swaps",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "1431.38475300 METAL",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "27",
            creator_action_ordinal: "25",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "7fc4d1ceac32aa243e8bd196978f271162dc2665a0e0c8b4e19ab9623647f86c",
              global_sequence: "2582460459",
              recv_sequence: "8032532",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593648",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "jamestaggart",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "1431.38475300 METAL",
                memo: "METAXPR,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "28",
            creator_action_ordinal: "5",
            receipt: {
              receiver: "xtokens",
              act_digest:
                "acebc1e253804e4ccf9eb4075512055c6190a922da90248a464fd7c7a906f22a",
              global_sequence: "2582460461",
              recv_sequence: "38321449",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162389",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "xtokens",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "1431.38475300 METAL",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "29",
            creator_action_ordinal: "28",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "acebc1e253804e4ccf9eb4075512055c6190a922da90248a464fd7c7a906f22a",
              global_sequence: "2582460462",
              recv_sequence: "8032533",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162390",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "jamestaggart",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "1431.38475300 METAL",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "30",
            creator_action_ordinal: "28",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "acebc1e253804e4ccf9eb4075512055c6190a922da90248a464fd7c7a906f22a",
              global_sequence: "2582460463",
              recv_sequence: "48946013",
              auth_sequence: [
                {
                  account: "jamestaggart",
                  sequence: "61162391",
                },
              ],
              code_sequence: "4",
              abi_sequence: "3",
            },
            receiver: "proton.swaps",
            act: {
              account: "xtokens",
              name: "transfer",
              authorization: [
                {
                  actor: "jamestaggart",
                  permission: "active",
                },
              ],
              data: {
                from: "jamestaggart",
                to: "proton.swaps",
                quantity: "1431.38475300 METAL",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "31",
            creator_action_ordinal: "30",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "51ad49cfab9b7105e9a077a5acda4903b9be8196b118819df5459915d1edf7bd",
              global_sequence: "2582460464",
              recv_sequence: "48946014",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593649",
                },
              ],
              code_sequence: "17",
              abi_sequence: "6",
            },
            receiver: "proton.swaps",
            act: {
              account: "proton.swaps",
              name: "swaplog",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                owner: "jamestaggart",
                token1: "1431.38475300 METAL",
                token2: "118.090739 XMD",
                pool1: "2003291.02765497 METAL",
                pool2: "165155.514267 XMD",
                pool1_contract: "xtokens",
                pool2_contract: "xmd.token",
                amplifier: 0,
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "32",
            creator_action_ordinal: "30",
            receipt: {
              receiver: "xmd.token",
              act_digest:
                "953c04664d8c41b526693b62810418b675b3555b2ea099d2968c0dcd9c831ff2",
              global_sequence: "2582460465",
              recv_sequence: "22924996",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593650",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "xmd.token",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "118.090739 XMD",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "33",
            creator_action_ordinal: "32",
            receipt: {
              receiver: "proton.swaps",
              act_digest:
                "953c04664d8c41b526693b62810418b675b3555b2ea099d2968c0dcd9c831ff2",
              global_sequence: "2582460466",
              recv_sequence: "48946015",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593651",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "proton.swaps",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "118.090739 XMD",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
          {
            action_ordinal: "34",
            creator_action_ordinal: "32",
            receipt: {
              receiver: "jamestaggart",
              act_digest:
                "953c04664d8c41b526693b62810418b675b3555b2ea099d2968c0dcd9c831ff2",
              global_sequence: "2582460467",
              recv_sequence: "8032534",
              auth_sequence: [
                {
                  account: "proton.swaps",
                  sequence: "48593652",
                },
              ],
              code_sequence: "2",
              abi_sequence: "1",
            },
            receiver: "jamestaggart",
            act: {
              account: "xmd.token",
              name: "transfer",
              authorization: [
                {
                  actor: "proton.swaps",
                  permission: "active",
                },
              ],
              data: {
                from: "proton.swaps",
                to: "jamestaggart",
                quantity: "118.090739 XMD",
                memo: "METAXMD,1",
              },
            },
            context_free: "false",
            elapsed: "0",
            console: "",
            account_ram_deltas: [],
            except: "",
            error_code: null,
            return_value: "",
          },
        ],
        account_ram_delta: null,
        except: "",
        error_code: null,
        failed_dtrx_trace: [],
        partial: {
          expiration: {
            utc_seconds: "1744620314",
          },
          ref_block_num: "37964",
          ref_block_prefix: "2139145089",
          max_net_usage_words: "0",
          max_cpu_usage_ms: "0",
          delay_sec: "0",
          transaction_extensions: [],
          signatures: [
            "SIG_K1_K8CLFaZTQKVmTwysJDrUML6oPdqHomrbAYHRHpvEiCjy74Q2gTfwu6QfsZWA9g8iLPXhGLqb9iM5pyGEHJG62WYdG2dUbn",
            "SIG_K1_K6DV8F1EjCwrvsWyxFEUqwtPcKPyX9CAKmgcbyZLJZ8wSK3TfmdPhBkCwJ29zRy9SKH5EP8MhthSs9fb37rPaT39VUHFrF",
          ],
          context_free_data: [],
        },
      },
    },
    irreversible: true,
  },
};


const formula = [
  "act.account:eq('xmd.token')",
  "act.name:eq('transfer')",
  "act.data.quantity:symbol('XMD')",
  "act.data.memo:contain('mint')",
  "output(act.data.quantity,act.data.to)",
];

async function getAccountTx(account:string,pos:number=-1) {
  return fetch('https://proton.greymass.com/v1/history/get_actions', {
    method: 'post', body: JSON.stringify({
      account_name: account,
      offset:-100,
      pos:pos
  })}).then(async (res)=>await res.json()).then((res)=>res.actions).catch((err)=>console.log(err))
}

async function getActionTraces(txId: string) {
  const actions = await fetch(`https://dex.api.mainnet.metalx.com/dex/v1/history/transaction?trx_id=${txId}`).then((res) => res.json()).catch((err)=>{console.log(err)});
  if (!actions || !actions.data) return []
  return actions.data.trace.trace.action_traces
}

async function process(pos:number = -1) {
  const txs = await getAccountTx('paul',pos);
  const nextPos = txs[0].account_action_seq;
  console.log(nextPos)
  const rawTxs:string[] = txs.map((tx: any) => tx.action_trace.trx_id);
  const txSet = new Set([...rawTxs]);
  
  const txsTracesPromises = Array.from(txSet).map((txId) => {
  //const txsTracesPromises = rawTxs.map((txId) => {
    //console.log(`https://explorer.xprnetwork.org/transaction/${txId}?tab=traces`)
    return getActionTraces(txId);
  })
  const txsResolved = await Promise.all(txsTracesPromises);
  const flattenTx = R.flatten(txsResolved)
  flattenTx.map((tx, index) => {
    const res = runFormulas(formula, tx,false);
    
    if (res.value > 0) {
      console.log(res.value,res.actor)
    }
  })
  if (nextPos > 100) { 
    process(nextPos)
  }
}

process();

// const traces = await getActionTraces('b040d59868d1d3ef5b1af1b3415b734ab481a535e33f099c30ac87059e96170e')

// traces.map((tx: any) => {
  
//   const res = runFormulas(formula, tx);
//   console.log(res);
// });
