import { Products } from './components/Products'
import { products } from './mocks/products.json'

const App = () => {
  return (
    <Products products={products} />
  )
}

export default App
