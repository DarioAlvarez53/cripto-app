import { create } from "zustand"
import { devtools } from "zustand/middleware"
import axios from "axios";
import { CryptoCurrenciesRespnseSchema } from "./schemas/crypto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
    criptoCurrencies: CryptoCurrency[]
    fetchCryptos:() => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    // console.log(Data);
    const result = CryptoCurrenciesRespnseSchema.safeParse(Data)
    // console.log(result);
    if(result.success) {
        return result.data
    }
    
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