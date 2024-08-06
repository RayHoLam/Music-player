
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
    const encryptedData = new Uint8Array([71YcyP+19ku7wCV/1R3CQRZKIXazL4XU2LIcGyybuD5Ck22m1kn9XjHe8UEzrlUs]);
    const iv = new Uint8Array([179, 88, 76, 94, 48, 180, 131, 163, 40, 193, 138, 253, 93, 99, 174, 62]);
    const keyData = new Uint8Array([b574540afac7c1ed00a91ce8e7b93027050824e7c045243ac685090d1eae7040]);
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
