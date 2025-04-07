import * as _chain from "as-chain";
import { check, Contract, isAccount, Name, TableStore, U256, Utils } from "proton-tsc";
import { TrustedAccount } from "./tables";

@contract
export class xprtrust extends Contract {

    private  trustedAccounts: TableStore<TrustedAccount> = new TableStore<TrustedAccount>(this.receiver);

    @action('acc.trustify')
    addTrustedAccount(account: Name, hash: string): void {
        
        check(isAccount(account), `${account} is not an account`);
        const trustKey = Utils.hexToBytes(hash);
        const u256TrustKey = U256.fromBytes(trustKey);
        const existingTrusted = this.trustedAccounts.getBySecondaryU256(u256TrustKey, 0);
        check(!existingTrusted, `Already trusted`)
        const newTrusted = new TrustedAccount(account, u256TrustKey);
        this.trustedAccounts.store(newTrusted, this.receiver);
    }

    @action('dev.untrust')
    removeTrusted(): void {
        
        let removedRow = this.trustedAccounts.first();
        while (removedRow) {
            if (!removedRow) break;
            this.trustedAccounts.remove(removedRow);
            removedRow = this.trustedAccounts.first();
        }


    }
}


class addTrustedAccountAction implements _chain.Packer {
    constructor (
        public account: _chain.Name | null = null,
        public hash: string = "",
    ) {
    }

    pack(): u8[] {
        let enc = new _chain.Encoder(this.getSize());
        enc.pack(this.account!);
        enc.packString(this.hash);
        return enc.getBytes();
    }
    
    unpack(data: u8[]): usize {
        let dec = new _chain.Decoder(data);
        
        {
            let obj = new _chain.Name();
            dec.unpack(obj);
            this.account! = obj;
        }
        this.hash = dec.unpackString();
        return dec.getPos();
    }

    getSize(): usize {
        let size: usize = 0;
        size += this.account!.getSize();
        size += _chain.Utils.calcPackedStringLength(this.hash);
        return size;
    }
}

class removeTrustedAction implements _chain.Packer {
    constructor (
    ) {
    }

    pack(): u8[] {
        let enc = new _chain.Encoder(this.getSize());
        return enc.getBytes();
    }
    
    unpack(data: u8[]): usize {
        let dec = new _chain.Decoder(data);
        return dec.getPos();
    }

    getSize(): usize {
        let size: usize = 0;
        return size;
    }
}

export function apply(receiver: u64, firstReceiver: u64, action: u64): void {
	const _receiver = new _chain.Name(receiver);
	const _firstReceiver = new _chain.Name(firstReceiver);
	const _action = new _chain.Name(action);

	const mycontract = new xprtrust(_receiver, _firstReceiver, _action);
	const actionData = _chain.readActionData();

	if (receiver == firstReceiver) {
		if (action == 0x32100CDF58CB97E0) {//acc.trustify
            const args = new addTrustedAccountAction();
            args.unpack(actionData);
            mycontract.addTrustedAccount(args.account!,args.hash);
        }
		if (action == 0x4AB60D4F37D63200) {//dev.untrust
            const args = new removeTrustedAction();
            args.unpack(actionData);
            mycontract.removeTrusted();
        }
	}
  
	if (receiver != firstReceiver) {
		
	}
	return;
}
