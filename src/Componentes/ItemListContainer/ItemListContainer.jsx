import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../Json/productos.json'
import './ItemListContainer.css'
import ItemLIst from '../ItemList/ItemLIst'

const ItemListContainer = () => {
  const[item, setItem]= useState([])
  const{id}= useParams();
  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const data = await new Promise((resolve)=>{
          setTimeout(()=> {
            resolve(id ? arrayProductos.filter(item => item.categoria === id): arrayProductos)
          }, 2000);
        });
        setItem(data);

      }catch(error){
        console.log('Error:',error)
      }
    };
    fetchData();

  }, [id])
  return (
    <div className='container'>
      <div className='row'>
      <ItemLIst item={item}/>

      </div>

    
    </div>
    



  )
}

export default ItemListContainer