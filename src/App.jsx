import * as React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import { SearchImage } from './api/Axios';
import OverflowCard from './components/image/Image';
import Loading from './components/Loading';
import Alerts from './components/Alert';

function App() {
  const [search, setSearch] = React.useState('')
  const [fors, setFors] = React.useState('')
  const [amount, setAmount] = React.useState(20)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [results, setResults] = React.useState([])

  async function handleSearch() {
    setLoading(true)
    try {
      const { data } = await SearchImage({ search, amount })
      await setResults(data.hits)
      setFors(search)
      setSearch('')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  return (

    <div className="App">
      <Navbar
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className="results">
        {loading ? <Loading /> :
          <>
            {results?.length === 0 ?
              <div style={{
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                height: "calc(100vh - 10rem)"
              }}>
                <h1>Search Images</h1>
              </div> : <h3>Search Results for {fors} </h3>}
          </>}
        <div className="image-grid">
          {results?.map((r) => (
            <OverflowCard key={r.id} image={r} />
          ))}
        </div>
      </div>
      {error && 
      <Alerts error={error} setError={setError}/> }
    </div >

  )
}

export default App
