import "./loadEnv";
import {
  createEosioShipReader,
  EosioReaderAbisMap,
  EosioReaderActionFilter,
  EosioReaderConfig,
  EosioReaderTableRowFilter,
  ShipTableDeltaName,
} from "@blockmatic/eosio-ship-reader";
import {fetchAbi, getInfo} from "./utils";
import {WsRelay} from "./services/relay/ws-relay";

const table_rows_whitelist: () => EosioReaderTableRowFilter[] = () => [
  {code: "xprtrustify", table: "accounts"},
];

const actions_whitelist: () => EosioReaderActionFilter[] = () => [];
WsRelay.getInstance();
export const loadReader = async () => {
  const info = await getInfo(process.env.NODE_SHIP_HTTP!);
  const unique_contract_names = [
    ...new Set(table_rows_whitelist().map(row => row.code)),
  ];
  const abisArr = await Promise.all(
    unique_contract_names.map(account_name =>
      fetchAbi(account_name, process.env.NODE_SHIP_HTTP!)
    )
  );
  const contract_abis: () => EosioReaderAbisMap = () => {
    const numap = new Map();
    if (!abisArr) return numap;
    abisArr.forEach(item => {
      if (item) numap.set(item.account_name, item.abi);
    });
    return numap;
  };

  const delta_whitelist: () => ShipTableDeltaName[] = () => [
    "account_metadata",
    "contract_table",
    "contract_row",
    "contract_index64",
    "resource_usage",
    "resource_limits_state",
  ];

  console.log(`===== Server run on ${process.env.NODE_ENV} ======`);
  console.log(`= Listen websocket on  ${process.env.NODE_SHIP_WS} =`);
  console.log(`= FETCH ABI on ${process.env.NODE_SHIP_HTTP} =`);
  console.log(`==================================================`);

  const eosioReaderConfig: EosioReaderConfig = {
    ws_url: process.env.NODE_SHIP_WS!,
    rpc_url: process.env.NODE_SHIP_HTTP!,
    ds_threads: 6,
    ds_experimental: false,

    delta_whitelist,
    table_rows_whitelist,
    actions_whitelist,
    contract_abis,
    request: {
      start_block_num: info.head_block_num + 10,
      end_block_num: 0xffffffff,
      max_messages_in_flight: 50,
      have_positions: [],
      irreversible_only: false,
      fetch_block: true,
      fetch_traces: true,
      fetch_deltas: true,
    },
    auto_start: true,
  };

  return await createEosioShipReader(eosioReaderConfig);
};
