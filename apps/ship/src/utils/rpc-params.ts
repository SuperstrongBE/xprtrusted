

const CODE_REGEXP = /^code:([#A-Za-z1-5.']{1,})/
const TABLE_REGEXP = /^table:([#A-Za-z1-5.']{1,})/
const SCOPE_REGEXP = /^scope:([#A-Za-z1-5.']{1,})/
const LOWER_REGEXP = /^lowerbound:([#A-Za-z1-5.']{1,})/
const UPPER_REGEXP = /^upperbound:([#A-Za-z1-5.']{1,})/
const INDEX_REGEXP = /^index:([1-9]{1,2})/
const KEY_REGEXP = /^key:(name|i64|u8|u16|u32|sha256)/
const IS_NAME_REGEXP = /^'([a-z1-5.]{1,})'/
const IS_CODE_MERGE = /##CODE##{1}$/
const IS_TABLE_MERGE = /##TABLE##{1}$/
const IS_SCOPE_MERGE = /##SCOPE##{1}$/
const IS_LOWER_MERGE = /##LOWERB##{1}$/
const IS_UPPER_MERGE = /##UPPERB##{1}$/


type RPCParams = { code?: string, table?: string, scope?: string, lower?: string, upper?: string }

export function buildRPCParams(params: string[], context: RPCParams) {
  
  let outputParams = { json:true,code: context.code, table: context.table,};
  for (let i = 0; i < params.length; i++){
    const result = buildParam(params[i], context);
    outputParams = {...outputParams,...result}
  } 

  return outputParams;

}

export function buildParam(param:string,context: RPCParams):any {
  if (CODE_REGEXP.test(param)) {
    return parseCode(param,context.code)
  }
  if (TABLE_REGEXP.test(param)) {
    return parseTable(param,context.table)
  }
  if (SCOPE_REGEXP.test(param)) {
    return parseScope(param,context.scope)
  }
  if (LOWER_REGEXP.test(param)) {
    return parseLowerBound(param,context.lower)
  }
  if (UPPER_REGEXP.test(param)) {
    return parseUpperBound(param,context.upper)
  }
  if (INDEX_REGEXP.test(param)) {
    return parseIndex(param)
  }
  if (KEY_REGEXP.test(param)) {
    return parseType(param)
  }
}

export function parseCode(formula:string,code?:string):{code:string | undefined} {
  
  const defaultCodeParams = {code:undefined}
  if (!CODE_REGEXP.test(formula)) return defaultCodeParams;
  const parsedCode = CODE_REGEXP.exec(formula);
  
  if (!parsedCode || !parsedCode[1]) return defaultCodeParams;
  if (IS_CODE_MERGE.test(parsedCode[1])) {
    return {code}
  }
  if (IS_NAME_REGEXP.test(parsedCode[1])) {
    const parsedName = IS_NAME_REGEXP.exec(parsedCode[1]);
    if (!parsedName || !parsedName[1]) return defaultCodeParams
    return {code:parsedName[1]}
    
  }
  return defaultCodeParams
}
export function parseTable(formula:string,table?:string):{table:string | undefined} {
  
  const defaultTableParams = {table:undefined}
  if (!TABLE_REGEXP.test(formula)) return defaultTableParams;
  const parsedTable = TABLE_REGEXP.exec(formula);
  
  if (!parsedTable || !parsedTable[1]) return defaultTableParams;
  if (IS_TABLE_MERGE.test(parsedTable[1])) {
    return {table: table}
  }
  if (IS_NAME_REGEXP.test(parsedTable[1])) {
    const parsedName = IS_NAME_REGEXP.exec(parsedTable[1]);
    if (!parsedName || !parsedName[1]) return defaultTableParams
    return {table:parsedName[1]}
    
  }
  return defaultTableParams
}
export function parseScope(formula:string,scope?:string):{scope:string | undefined} {
  
  const defaultScopeParams = {scope:undefined}
  if (!SCOPE_REGEXP.test(formula)) return defaultScopeParams;
  const parsedScope = SCOPE_REGEXP.exec(formula);
  
  if (!parsedScope || !parsedScope[1]) return defaultScopeParams;
  if (IS_SCOPE_MERGE.test(parsedScope[1])) {
    return {scope}
  }
  if (IS_NAME_REGEXP.test(parsedScope[1])) {
    const parsedName = IS_NAME_REGEXP.exec(parsedScope[1]);
    if (!parsedName || !parsedName[1]) return defaultScopeParams
    return {scope:parsedName[1]}
    
  }
  return defaultScopeParams
}

export function parseLowerBound(formula: string, lower?: string): { lower_bound: string | undefined } {
  
  const defaultLowerParams = {lower_bound:undefined}
  if (!LOWER_REGEXP.test(formula)) return defaultLowerParams;
  const parsedLower = LOWER_REGEXP.exec(formula);
  if (!parsedLower || !parsedLower[1]) return defaultLowerParams;
  if (IS_LOWER_MERGE.test(parsedLower[1])) {
    return {lower_bound:lower}
  }
  if (IS_NAME_REGEXP.test(parsedLower[1])) {
    const parsedName = IS_NAME_REGEXP.exec(parsedLower[1]);
    if (!parsedName || !parsedName[1]) return defaultLowerParams
    return {lower_bound:parsedName[1]}
  }
  return defaultLowerParams
}

export function parseUpperBound(formula: string, upper?: string): { upper_bound: string | undefined } {
  
  const defaultUpperParams = {upper_bound:undefined}
  if (!UPPER_REGEXP.test(formula)) return defaultUpperParams;
  const parsedUpper = UPPER_REGEXP.exec(formula);
  
  if (!parsedUpper || !parsedUpper[1]) return defaultUpperParams;
  if (IS_UPPER_MERGE.test(parsedUpper[1])) {
    return {upper_bound:upper}
  }
  if (IS_NAME_REGEXP.test(parsedUpper[1])) {
    const parsedName = IS_NAME_REGEXP.exec(parsedUpper[1]);
    if (!parsedName || !parsedName[1]) return defaultUpperParams
    return {upper_bound:parsedName[1]}
  }
  return defaultUpperParams
}

export function parseIndex(formula: string): { index_position: number } |undefined {
  
  
  if (!INDEX_REGEXP.test(formula)) return undefined;
  const parsedIndex = INDEX_REGEXP.exec(formula);
  
  if (!parsedIndex || !parsedIndex[1]) return undefined;
  return {index_position:parseInt(parsedIndex[1])}
  
  
}

export function parseType(formula: string): { key_type: string }|undefined {
  
  
  if (!KEY_REGEXP.test(formula)) return undefined;
  const parsedKey = KEY_REGEXP.exec(formula);
  
  if (!parsedKey || !parsedKey[1]) return undefined;
  return {key_type:parsedKey[1].toString()}
  
  
}