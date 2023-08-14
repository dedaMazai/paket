import { useEffect } from 'react';

export function useRemoveLicenseKey(key: string) {
    useEffect(() => {
        const blockLicenseKey = document.getElementsByClassName(key);
        if (blockLicenseKey?.[0]) blockLicenseKey[0].parentNode?.removeChild(blockLicenseKey?.[0]);
    });
}
