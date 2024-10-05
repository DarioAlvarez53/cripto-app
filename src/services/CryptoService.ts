import axios from "axios"
import { CryptoCurrenciesRespnseSchema } from "../schemas/crypto-schema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    // console.log(Data);
    const result = CryptoCurrenciesRespnseSchema.safeParse(Data)
    // console.log(result);
    if(result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice (pair:Pair) {
    // console.log(pair);
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)
    console.log(DISPLAY[pair.cryptocurrency][pair.currency]);
    
}