import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        {/* Contenido */}
        <div className="content">
          <CryptoSearchForm />

          {/* Componente para mostrar la cotizacion */}
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
