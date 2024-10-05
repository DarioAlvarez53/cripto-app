import { z } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyRespnseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const CryptoCurrenciesRespnseSchema = z.array(CryptoCurrencyRespnseSchema)

//creando un nuevo schema para pair state
export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
})

//validando la consulta de la cotizacion y guardando solo lo necesario
export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})