import axios from "axios"
import { CryptoCurrenciesRespnseSchema } from "../schemas/crypto-schema"

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