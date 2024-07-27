import { Admin } from "../models";

type StorageProp = { admin: Admin };

type StorageType = "session" | "local";

/**
 * Manages storage operations for session and local storage.
 */
class StorageManager {
  /**
   * Returns the storage object based on the specified type.
   * @param type - The type of storage to retrieve: 'local' or 'session'.
   * @returns The corresponding storage object: localStorage for 'local' type, sessionStorage for 'session' type.
   */
  private storage(type: StorageType): Storage {
    return type === "local" ? localStorage : sessionStorage;
  }

  /**
   * Retrieves and returns the value stored in the specified key of the storage based on the given type.
   * @param type - The type of storage to access: 'local' or 'session'.
   * @param key - The key to retrieve the value from in the storage.
   * @returns The value stored in the specified key if found, otherwise null.
   */
  get<T extends keyof StorageProp, K extends StorageProp[T] | null>(
    type: StorageType,
    key: T
  ): K {
    const string = this.storage(type).getItem(key);
    return string ? JSON.parse(string) : null;
  }

  /**
   * Sets a value in the storage based on the specified type, key, and value.
   * @param type - The type of storage to set the value in: 'local' or 'session'.
   * @param key - The key under which the value will be stored in the storage.
   * @param value - The value to be stored in the specified key.
   */
  set(type: StorageType, key: keyof StorageProp, value: unknown) {
    this.storage(type).setItem(key, JSON.stringify(value));
  }

  /**
   * Removes the value stored in the specified key of the storage based on the given type.
   * @param type - The type of storage to remove the value from: 'local' or 'session'.
   * @param key - The key whose value will be removed from the storage.
   */
  remove(type: StorageType, key: keyof StorageProp) {
    this.storage(type).removeItem(key);
  }

  /**
   * Clears all data stored in the specified type of storage.
   * @param type - The type of storage to clear: 'local' or 'session'.
   */
  clear(type: StorageType) {
    this.storage(type).clear();
  }
}

export const storageManager = new StorageManager();
