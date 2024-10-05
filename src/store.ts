import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
    criptoCurrencies: CryptoCurrency[]
    fetchCryptos:() => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    criptoCurrencies: [],
    fetchCryptos: async () => {
        // console.log('Desde fetchCryptos');
        const criptoCurrencies = await getCryptos()
        set(() => ({
            criptoCurrencies
        }))
    },
    fetchData: async(pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        console.log(result);
        
    }
})))