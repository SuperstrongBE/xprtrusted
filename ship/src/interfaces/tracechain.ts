type tracechain_Actions = {
  "dev.senswipe": {
    deviceName:string
  },
  "dev.setbal": {
    account:string;
    quantity:string
  },
  "dev.wiperec": {
    deviceName:string
  },
  "device.reg": {
    deviceName:string;
    owner:string
  },
  "sens.def": {
    deviceName:string;
    sensorName:string;
    min:number;
    max:number;
    unit:string
  },
  "sens.rec": {
    deviceName:string;
    sensorName:string;
    sensorValue:number;
    lat:number;
    lng:number
  },
  
}

export const tracechain = {
  dev_senswipe:(authorization:Authorization[],data:tracechain_Actions['dev.senswipe']):XPRAction<'dev.senswipe'>=>({
	account:'tracechain',
	name:'dev.senswipe',
	authorization,
data}),
 dev_setbal:(authorization:Authorization[],data:tracechain_Actions['dev.setbal']):XPRAction<'dev.setbal'>=>({
	account:'tracechain',
	name:'dev.setbal',
	authorization,
data}),
 dev_wiperec:(authorization:Authorization[],data:tracechain_Actions['dev.wiperec']):XPRAction<'dev.wiperec'>=>({
	account:'tracechain',
	name:'dev.wiperec',
	authorization,
data}),
 device_reg:(authorization:Authorization[],data:tracechain_Actions['device.reg']):XPRAction<'device.reg'>=>({
	account:'tracechain',
	name:'device.reg',
	authorization,
data}),
 sens_def:(authorization:Authorization[],data:tracechain_Actions['sens.def']):XPRAction<'sens.def'>=>({
	account:'tracechain',
	name:'sens.def',
	authorization,
data}),
 sens_rec:(authorization:Authorization[],data:tracechain_Actions['sens.rec']):XPRAction<'sens.rec'>=>({
	account:'tracechain',
	name:'sens.rec',
	authorization,
data}),
} 
type tracechain_Tables = {
  "BalancesTable": {
    account:string;
    balance:string
  },
  "DevicesTable": {
    deviceName:string;
    owner:string
  },
  "RecordsTable": {
    key:number;
    sensorName:string;
    value:number;
    timestamp:number;
    lat:number;
    lng:number
  },
  "SensorsTable": {
    key:number;
    sensorName:string;
    unit:string;
    min:number;
    max:number
  }
}


    export type Authorization = {
      actor: string;
      permission: "active"|"owner"|string;
  }

    export type XPRAction<A extends keyof (tracechain_Actions)>={
      account: 'tracechain';
      name: A;
      authorization: Authorization[];
      data: tracechain_Actions[A]; 
    }
  
export type Tables<TableName extends keyof (tracechain_Tables)> = tracechain_Tables[TableName];
export type Actions<ActionName extends keyof (tracechain_Actions)> = tracechain_Actions[ActionName];
export function tracechain_actionParams<ActionName extends keyof (tracechain_Actions)>(actionPrams: tracechain_Actions[ActionName]):(object|number|string |number[]|string[])[]{return Object.values(actionPrams)}
