
import NavBar from './NavBar/NavBar'
import './App.css'
import ItemListContainer from './ItemListContainer/ItemListContainer'


function App() {
  

  return (
    <>

    <NavBar />
    <div className='ItemListContainer'>

    <ItemListContainer greeting='bienvenidos a Jshop' />
    </div>
    
      
    </>
  )
}

export default App
