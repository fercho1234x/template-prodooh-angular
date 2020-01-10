import CRYPTO from 'crypto-js';

export default class Crypto {

    static readonly CRYPTO_KEY = "tu-clave-secreta";

    static encrypt(object: string): string {
        return CRYPTO.AES.encrypt(object, this.CRYPTO_KEY).toString();
    }

    static decrypt(object: string): string {
        let bytes = CRYPTO.AES.decrypt(object, this.CRYPTO_KEY);
        return bytes.toString(CRYPTO.enc.Utf8);
    }

}
