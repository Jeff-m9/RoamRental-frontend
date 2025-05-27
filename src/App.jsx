import { Header } from './components/Header'
import { SearchBar } from './components/Search-bar'
import { Filter } from './components/Filter'
import { CarList } from './components/Car-list'
import "./app.css"

function App() {


  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CarList />
    </>
  )
}

export default App
