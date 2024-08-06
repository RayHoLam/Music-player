
export async function decryptData(encryptedData, key, iv) {
    const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: 'AES-CBC', iv: iv },
        key,
        encryptedData
    );
    const decoder = new TextDecoder();
    return decoder.decode(decryptedBuffer);
}

import { decryptData } from './decrypt.js';

(async () => {
    const encryptedData = new Uint8Array([Z1PdxoxRBgGVlPiLYTVr7R2unXA9HhNwYZ19+vtT9r4IEqgAA1TPDhi1dhIbkJhL]);
    const iv = new Uint8Array([226,54,217,110,64,46,101,233,38,62,174,132,133,4,47,166]);
    const keyData = new Uint8Array([14a1416fd0619942a3d7a4c7634be71305037343cc1c0b8617f89a00cf0ff54d]);
    const key = await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'AES-CBC' },
        false,
        ['decrypt']
    );

    try {
        const decryptedData = await decryptData(encryptedData, key, iv);
        console.log('解密後的數據:', decryptedData);
    } catch (err) {
        console.error('解密失敗:', err);
    }
})();
