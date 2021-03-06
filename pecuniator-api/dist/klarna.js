"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is the implementation of the interface with use Klarna objects
class KlarnaAccount {
    constructor(account) {
        this.account = account;
    }
    get currency() {
        return this.account.balance.currency;
    }
}
exports.KlarnaAccount = KlarnaAccount;
class KlarnaEntry {
    constructor(entry) {
        this.entry = entry;
    }
    get reference() {
        return this.entry.reference;
    }
    get amount() {
        if (this.entry.amount.amount) {
            return parseFloat(this.entry.amount.amount);
        }
        return 0;
    }
    get currency() {
        return this.entry.amount.currency;
    }
    get bookingDate() {
        return this.entry.date;
    }
    get creditorIBAN() {
        // TODO
        return this.entry.counter_party.iban;
    }
    get creditorName() {
        // TODO
        return this.entry.counter_party.holder_name;
    }
    get creditorUltimateName() {
        // TODO
        return this.entry.counter_party.holder_name;
    }
    get debtorIBAN() {
        // TODO
        return this.entry.counter_party.iban;
    }
    get debtorName() {
        // TODO
        return this.entry.counter_party.holder_name;
    }
    get debtorUltimateName() {
        // TODO
        return this.entry.counter_party.holder_name;
    }
    get creditordebit() {
        switch (this.entry.type) {
            case 'DEBIT':
                return 'DBIT';
            case 'CREDIT':
                return 'CRDT';
        }
    }
    get additionalEntryInfo() {
        return this.entry.method;
    }
    get remittanceInformation() {
        return [this.entry.reference];
    }
    get isCredit() {
        return this.entry.type === 'CREDIT';
    }
    get isDebit() {
        return this.entry.type === 'DEBIT';
    }
}
exports.KlarnaEntry = KlarnaEntry;
