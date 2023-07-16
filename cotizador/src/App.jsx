import AppSeguro from "./components/AppSeguro";
import { CostizadorProvider } from "./contexts/CostizadorProvider";


function App() {
  return (
    <>
      <CostizadorProvider>
        <AppSeguro />
      </CostizadorProvider>
    </>
  )
}

export default App
