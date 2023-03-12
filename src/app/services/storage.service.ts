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
        await this.storage.set(key, JSON.stringify(value));
    }

    async getValue(key: StorageKey): Promise<any> {
        const value = await this.storage.get(key);

        if (!value) {
            return null;
        }

        return JSON.parse(await this.storage.get(key));
    }

    async clearValue(key: StorageKey): Promise<void> {
        await this.storage.remove(key);
    }

    async clearAll(): Promise<void> {
        await this.storage.clear();
    }
}
