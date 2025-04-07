import { EMPTY_NAME, Name, Table, U256 } from "proton-tsc";

@table('accounts')
export class TrustedAccount extends Table {

  constructor(
    public account: Name = EMPTY_NAME,
    public trustedKey:U256 = new U256()
  ) {
    super()
  }

  @primary()
  get by_account(): u64 {
    return this.account.N
  }
  
  set by_account(value:u64) {
    this.account = Name.fromU64(value);
  }

  @secondary()
  get by_trustedKey(): U256 {
    return this.trustedKey
  }
  
  set by_trustedKey(value:U256) {
    this.trustedKey = value
  }


}