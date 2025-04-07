import * as _chain from "as-chain";
import { EMPTY_NAME, Name, Table, U256 } from "proton-tsc";



export class TrustedAccountDB extends _chain.MultiIndex<TrustedAccount> {
    get by_trustedKeyDB(): _chain.IDX256 {
        return <_chain.IDX256>this.idxdbs[0];
    }

    
    updateBy_trustedKey(idxIt: _chain.SecondaryIterator, value: U256, payer: Name): void {
        let secValue = _chain.newSecondaryValue_U256(value);
        this.idxUpdate(idxIt, secValue, payer);
    }

}

@table('accounts', nocodegen)

export class TrustedAccount implements _chain.MultiIndexValue {
    

  constructor(
    public account: Name = EMPTY_NAME,
    public trustedKey:U256 = new U256()
  ) {
    
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



    pack(): u8[] {
        let enc = new _chain.Encoder(this.getSize());
        enc.pack(this.account);
        enc.pack(this.trustedKey);
        return enc.getBytes();
    }
    
    unpack(data: u8[]): usize {
        let dec = new _chain.Decoder(data);
        
        {
            let obj = new Name();
            dec.unpack(obj);
            this.account = obj;
        }
        
        {
            let obj = new U256();
            dec.unpack(obj);
            this.trustedKey = obj;
        }
        return dec.getPos();
    }

    getSize(): usize {
        let size: usize = 0;
        size += this.account.getSize();
        size += this.trustedKey.getSize();
        return size;
    }

    static get tableName(): _chain.Name {
        return _chain.Name.fromU64(0x32114D4F38000000);
    }

    static tableIndexes(code: _chain.Name, scope: _chain.Name): _chain.IDXDB[] {
        const idxTableBase: u64 = this.tableName.N & 0xfffffffffffffff0;
        const indices: _chain.IDXDB[] = [
            new _chain.IDX256(code.N, scope.N, idxTableBase + 0, 0),
        ];
        return indices;
    }

    getTableName(): _chain.Name {
        return TrustedAccount.tableName;
    }

    getTableIndexes(code: _chain.Name, scope: _chain.Name): _chain.IDXDB[] {
        return TrustedAccount.tableIndexes(code, scope);
    }

    getPrimaryValue(): u64 {
        return this.by_account
    }

    getSecondaryValue(i: i32): _chain.SecondaryValue {
        switch (i) {
            case 0: {
                return _chain.newSecondaryValue_U256(this.by_trustedKey);
                break;
            }
            default:
                _chain.assert(false, "bad db index!");
                return new _chain.SecondaryValue(_chain.SecondaryType.U64, new Array<u64>(0));
        }
    }

    setSecondaryValue(i: i32, value: _chain.SecondaryValue): void {
        switch (i) {
            case 0: {
                let _value = _chain.getSecondaryValue_U256(value);
                this.by_trustedKey = _value;
                break;
            }
            default:
                _chain.assert(false, "bad db index!");
        }
    }


    static new(code: _chain.Name, scope: _chain.Name  = _chain.EMPTY_NAME): TrustedAccountDB {
        return new TrustedAccountDB(code, scope, this.tableName, this.tableIndexes(code, scope));
    }
}