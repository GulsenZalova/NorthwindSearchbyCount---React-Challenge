import React from 'react'
import { useState,useEffect} from 'react'

function Countforsearch() {
const [orders,setOrders]=useState([])
const [inputValue,setİnputValue]=useState([])
const [filtered, setFiltered] = useState([])

useEffect(()=>{
    loadData()
},[])

const add=()=>{
    let filteredOrders=orders.slice(0,inputValue)
    setFiltered(filteredOrders)
    setİnputValue("")
}

 const loadData=()=>{
    fetch("https://northwind.vercel.app/api/orders")
    .then(res=>res.json())
    .then(data=>
        {
        setFiltered(data)
        setOrders(data)
        }
        )
 }
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>setİnputValue(e.target.value)} />
      <button onClick={()=>add()}>Add</button>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                
                <th>custumId</th>
                
                <th>0rderDate</th>
            </tr>
        </thead>
        <tbody>
            {
              filtered &&  filtered.map((order)=> <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customerId}</td>
                    <td>{order.orderDate}</td>
                  </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default Countforsearch
