import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency } from "./types";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
    criptoCurrencies: CryptoCurrency[]
    fetchCryptos:() => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    criptoCurrencies: [],
    fetchCryptos: async () => {
        // console.log('Desde fetchCryptos');
        const criptoCurrencies = await getCryptos()
        set(() => ({
            criptoCurrencies
        }))
        
    }
})))