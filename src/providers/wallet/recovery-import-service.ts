import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfService } from '../util-service/conf-service';
import { HttpUtils } from '../util-service/http-utils';

import {recImp} from '../messages/account-pub-msg';

@Injectable()
export class RecoveryImportService {
    TemprecImp:recImp={password:''};
    constructor(private confService: ConfService,private httpUtils:HttpUtils) {
        console.log('Hello AccountPubService Provider');
    }

    recImport(request){
        this.TemprecImp.password=request
            return this.httpUtils.postBodyToken(this.confService.baseUrl + 'users/security/financial/verify',this.TemprecImp,'')
    }

}
