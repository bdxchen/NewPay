// util-service
import { HttpUtils } from './util-service/http-utils';
import { ConfService } from './util-service/conf-service'
import { StorageService } from './util-service/storage-service'
import {MockService } from './util-service/mock-service'
// financial-service
import { AccountPubService } from './financial-service/account-pub-service'
import { TopupService } from './financial-service/account-topup-service'
import { TransferService } from './financial-service/account-transfer-service'
import { WithdrawService } from './financial-service/account-withdraw-service'
import { BalanceService } from './financial-service/account-balance-service'
import {CountryNumService} from './countryNum/country-num-service'
// user-service
import { IentityAuth } from './identity/ientity-auth'
import { AuthService } from './user-service/user-auth-service'
import { FriendService } from './user-service/friend-service'
import { MineService } from './user-service/mine-service'
import {SearchAccService} from './home/searchAcc-service'
import {RecoveryImportService} from '../providers/wallet/recovery-import-service';
import {BaAccountifService} from '../providers/transfer/Ba-accountif-service'
import {CommonUtils} from '../providers/common/commonUtils'
import { AppVersionService} from  '../providers/appVersion/app-version-service'
export const SERVICES = [
      CountryNumService,
      CommonUtils,
      // util-service
      BaAccountifService,
      AppVersionService,
      RecoveryImportService,
      HttpUtils,
      ConfService,
      StorageService,
      MockService,
      // financial-service
      AccountPubService,
      TopupService,
      TransferService,
      WithdrawService,
      BalanceService,
      // user-service
      AuthService,
      FriendService,
      MineService,
      SearchAccService,
      IentityAuth
];
