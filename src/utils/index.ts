import Coin from './coin';
import * as Const from './const';
import * as Entity from './entity';
import Https from './Https';
import NNS from './nns';
import * as Random from './random';
import { Context } from './context';
import * as Time from './time';
import Tips from './tip';
import Transfer from './transaction';
import Cache from './cache';
import Wallet from './wallet';
import { Nep6 } from '../lib/neo-ts';
import User from './user'

export { Https }

export default {
    util: {
        Https: Https,
        Context: Context,
        Time: Time,
        NNS: NNS,
    },
    show: {
        loading: Tips.loading,
        success: Tips.success,
        confirm: Tips.confirm,
        toast: Tips.toast,
        alert: Tips.alert,
        error: Tips.error,
        share: Tips.share
    },
    hide: {
        loading: Tips.loaded
    },
    send: {
        transfer: Transfer.makeTran,
        // invoke: Transfer.nep5Transaction,
        claim: Transfer.claimGas
    },
    get: {
        random: Random.getSecureRandom,
        cache: Cache.get,
        height: () => { return Context.Height },
        account: () => { return Wallet.account },
        nep2: Wallet.getAccount, //获取用户账户
        assets: () => { Context.Assets },
        rootName: NNS.getRootName,
        rootNameHash: NNS.getRootNameHash,
        userInfo:async ()=> await User.getUser(),
        TXs: Context.OnGetTXs,
        prikey: (wif: string): string => { return Wallet.wif2prikey(wif) },
        total: () => { return Context.total }
    },
    set: {
        cache: Cache.put,
        account: Wallet.setAccount,
        openid: Context.openid,
        formid: (formid: string) => { Transfer.formId.push(formid); },
        resolve:NNS.resolve
    },
    delegate: {
        asset: (delegate: Function) => Context.assetDelegate = delegate,
        tx: (delegate: Function) => Context.txDelegate = delegate
    },
    const: Const,
    init: {
        asset: Coin.initAllAsset,
        context: Context.init
    },
    service: {
        start: Context.init,
        update: Context.OnTimeOut,
    }
}