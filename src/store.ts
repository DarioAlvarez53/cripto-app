import { create } from "zustand"
import axios from "axios";
import { cryptoCurrenciesRespnseSchema } from "./schemas/crypto-schema";

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    // console.log(Data);
    const result = cryptoCurrenciesRespnseSchema.safeParse(Data)
    console.log(result);
    
}

export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        // console.log('Desde fetchCryptos');
        getCryptos()
    }
}))