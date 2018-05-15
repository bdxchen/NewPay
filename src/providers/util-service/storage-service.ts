import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {}storage

    write(key: string, value: any) {
        if (value) {
            //value = ""+ value
            value =value;
        }
        localStorage.setItem(key, value);
    }

    read(key: string) {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return value;
        }

        return null;
    }
}