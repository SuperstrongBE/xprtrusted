type xprtrustify_Actions = {
  "acc.trustify": {
    account:string;
    hash:string
  },
  "dev.untrust": {
    
  }
}

export const xprtrustify = {
  acc_trustify:(authorization:Authorization[],data:xprtrustify_Actions['acc.trustify']):XPRAction<'acc.trustify'>=>({
	account:'xprtrustify',
	name:'acc.trustify',
	authorization,
data}),
 dev_untrust:(authorization:Authorization[],data:xprtrustify_Actions['dev.untrust']):XPRAction<'dev.untrust'>=>({
	account:'xprtrustify',
	name:'dev.untrust',
	authorization,
data}) 
} 
type xprtrustify_Tables = {
  "TrustedAccount": {
    account:string;
    trustedKey:{
    
}
  }
}


    export type Authorization = {
      actor: string;
      permission: "active"|"owner"|string;
  }

    export type XPRAction<A extends keyof (xprtrustify_Actions)>={
      account: 'xprtrustify';
      name: A;
      authorization: Authorization[];
      data: xprtrustify_Actions[A]; 
    }
  
export type Tables<TableName extends keyof (xprtrustify_Tables)> = xprtrustify_Tables[TableName];
export type Actions<ActionName extends keyof (xprtrustify_Actions)> = xprtrustify_Actions[ActionName];
export function xprtrustify_actionParams<ActionName extends keyof (xprtrustify_Actions)>(actionPrams: xprtrustify_Actions[ActionName]):(object|number|string |number[]|string[])[]{return Object.values(actionPrams)}
