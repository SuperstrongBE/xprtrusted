import * as R from "ramda";

const EQ_REGEXP = /^eq\((.{1,})\)/;
const GTE_REGEXP = /^gte\((.{1,})\)/;
const LTE_REGEXP = /^lte\((.{1,})\)/;
const SYMBOL_REGEXP = /^symbol\('([A-Z1-5]{3,12})'\)/;
const CONTAINS_REGEXP = /^contain\('(.{1,256})'\)/;
const OUTPUT_REGEXP = /output\(([0-9A-Za-z._]{1,}),?([0-9A-Za-z._]{0,})\)/;

const IS_STRING_REGEXP = /^'([A-Za-z0-9. ]{3,})'$/;
const IS_PATH = /^([A-Za-z0-9_. ]{3,})$/;
const IS_NUMBER_REGEXP = /^([0-9., ]{1,})$/;
const FORMULA_REGEXP = /^([0-9A-Za-z._]{1,}):([0-9A-Za-z._(),'']{1,})/;

type FormulaOutput = {
  value: number,
  actor:string | null
}

export function parseFormula(formula: string, context: any,debug:boolean = false):boolean {
  if (!FORMULA_REGEXP.test(formula)) return false;
  const parsedFormula = FORMULA_REGEXP.exec(formula);
  if (!parsedFormula || !parsedFormula[1] || !parsedFormula[2]) return false;
  const formulaKey = parsedFormula[1];
  const formulaValue = parsedFormula[2];
  if (EQ_REGEXP.test(formulaValue))
    return checkEquality(formulaKey, formulaValue, context,debug);
  if (GTE_REGEXP.test(formulaValue))
    return checkGreaterThanEqual(formulaKey, formulaValue, context,debug);
  if (LTE_REGEXP.test(formulaValue))
    return checkLowerThanEqual(formulaKey, formulaValue, context);
  if (SYMBOL_REGEXP.test(formulaValue))
    return checkSymbol(formulaKey, formulaValue, context,debug);
  if (CONTAINS_REGEXP.test(formulaValue))
    return checkContains(formulaKey, formulaValue, context,debug);
  return false;
}

export function runFormulas(formulas: string[], context: any,
  debug:boolean=false
):FormulaOutput {
  const defaultFormulas = [...formulas];
  const hasOutput = defaultFormulas.some((formula) => OUTPUT_REGEXP.test(formula));
  if (!hasOutput) defaultFormulas.push('output(1)')
  let output = {value:0,actor:null};
  for (let i = 0; i < defaultFormulas.length; i++){
    if (FORMULA_REGEXP.test(defaultFormulas[i])) {
      if (!parseFormula(defaultFormulas[i], context,debug))return {value:0,actor:null}
    }
    if (OUTPUT_REGEXP.test(defaultFormulas[i])) {
      return parseOutput(defaultFormulas[i], context);
    }  
  }
  return output
}



export function parseOutput(outputFormula: string, context: any,
  
): FormulaOutput {
  let output = {value:0,actor:""}
  if (!OUTPUT_REGEXP.test(outputFormula)) return output;
  const parsedFormula = OUTPUT_REGEXP.exec(outputFormula);
  if (!parsedFormula || !parsedFormula[1]) return output;
  const valuePath = parsedFormula[1];
  const actorPath = parsedFormula[2]
  if (IS_NUMBER_REGEXP.test(valuePath)) {
    output.value = parseFloat(valuePath)
  }
  if (IS_PATH.test(valuePath)) {
    const value = R.path(valuePath.split("."), context);
    console.log(valuePath)
    if (value) output.value =  parseInt(value.toString());
  }
  if (actorPath && IS_PATH.test(actorPath)) {
    const actor = R.path(actorPath.split("."), context);
    console.log('actorPath is ',actorPath)
    if (actor) {
      output.actor = actor.toString();
      console.log('actor value is ',actor)
      
    }
  } else {
    const defaultActorPath = "receipt.receiver";
      const defaultActor = R.path(defaultActorPath.split("."), context);
      if (defaultActor) output.actor = defaultActor.toString();
    
  }
  return output;
}

export function checkLowerThanEqual(
  valuePath: string,
  formula: string,
  context: any,
  
): boolean {
  const value = R.path(valuePath.split("."), context);
  if (!value) return false;
  const isValidLTE = LTE_REGEXP.test(formula);
  if (!isValidLTE) return false;
  const lteResult = LTE_REGEXP.exec(formula);
  if (!lteResult || !lteResult[1]) return false;
  return parseFloat(value.toString()) <= parseFloat(lteResult[1])
}

export function checkGreaterThanEqual(
  valuePath: string,
  formula: string,
  context: any,
  debug:boolean=false
): boolean {
  const value = R.path(valuePath.split("."), context);
  if (!value) return false;
  const isValidGTE = GTE_REGEXP.test(formula);
  if (!isValidGTE) return false;
  const gteResult = GTE_REGEXP.exec(formula);
  if (!gteResult || !gteResult[1]) return false;
  if (debug)console.log('',valuePath,value,parseFloat(value.toString()) >= parseFloat(gteResult[1]))
  return parseFloat(value.toString()) >= parseFloat(gteResult[1])
}

export function checkEquality(
  valuePath: string,
  formula: string,
  context: any,
  debug:boolean=false
): boolean {
  const value = R.path(valuePath.split("."), context);
  if (!value) return false;
  const isValidEQ = EQ_REGEXP.test(formula);
  if (!isValidEQ) return false;
  const eqResult = EQ_REGEXP.exec(formula);
  if (!eqResult || !eqResult[1]) return false;
  if (IS_NUMBER_REGEXP.test(eqResult[1])) {
    if (debug)console.log('',valuePath,value,parseFloat(value.toString()) == parseFloat(eqResult[1]))
    return parseFloat(value.toString()) == parseFloat(eqResult[1]);
  }
  if (IS_STRING_REGEXP.test(eqResult[1])) {
    const cleanValue = IS_STRING_REGEXP.exec(eqResult[1]);
    if (!cleanValue || !cleanValue[1]) return false;
    if (debug)console.log('',valuePath,value,value == cleanValue[1])
    return value == cleanValue[1];
  }
  if (IS_PATH.test(eqResult[1])) {
    const eqValue = R.path(eqResult[1].split("."), context);
    if (!eqValue) return false;
    if (debug)console.log('',valuePath,value)
    return value == eqValue;
  }
  return false;
}

export function checkSymbol(
  valuePath: string,
  formula: string,
  context: any,
  debug:boolean=false
): boolean {
  const value = R.path(valuePath.split("."), context);
  if (!value) return false;
  const isValidSymbol = SYMBOL_REGEXP.test(formula);
  if (!isValidSymbol) return false;
  const symbolResult = SYMBOL_REGEXP.exec(formula);
  if (!symbolResult || !symbolResult[1]) return false;
  if (debug)console.log('',valuePath,value,value.toString().endsWith(symbolResult[1]) )
  return value.toString().endsWith(symbolResult[1]) 
}

export function checkContains(
  valuePath: string,
  formula: string,
  context: any,
  debug:boolean=false
): boolean {
  const value = R.path(valuePath.split("."), context);
  if (!value) return false;
  const isValidContains = CONTAINS_REGEXP.test(formula);
  if (!isValidContains) return false;
  const containsResult = CONTAINS_REGEXP.exec(formula);
  if (!containsResult || !containsResult[1]) return false;
  if (debug)console.log('',valuePath,value,value.toString().indexOf(containsResult[1]) >= 0)
  return value.toString().indexOf(containsResult[1]) >= 0;
}
