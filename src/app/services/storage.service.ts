import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export enum StorageKey {
    randomUsers = 'user',
}

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor(private storage: Storage) {}

    async initStorage(): Promise<void> {
        await this.storage.create();
    }

    async setValue(key: StorageKey, value: any): Promise<void> {
        await this.storage.set(key, JSON.stringify(value)); //set nativo guarda o valor convertido para string  guarda uma chave
    }

    async getValue(key: StorageKey): Promise<any> {
        //storageKey enum    le uma chave
        const value = await this.storage.get(key); //get nativo

        if (!value) {
            return null;
        }

        return JSON.parse(await this.storage.get(key)); //se tem valor ele retorna
    }

    async clearValue(key: StorageKey): Promise<void> {
        //limpa uma chave
        await this.storage.remove(key);
    }

    async clearAll(): Promise<void> {
        //limpa tudo
        await this.storage.clear();
    }
}
