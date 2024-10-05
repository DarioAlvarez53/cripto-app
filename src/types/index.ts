import { z } from "zod"
import { CurrencySchema, CryptoCurrencyRespnseSchema, PairSchema, CryptoPriceSchema } from "../schemas/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyRespnseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>