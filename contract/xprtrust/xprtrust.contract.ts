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
