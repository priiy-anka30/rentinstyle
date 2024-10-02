import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Dashboard = ({token}) => {
  // These values could come from your state, API, or backend
//   const items = 120;
  // const revenue = 5400;
  // const orders = 89;
  // const users = 150;

const [list, setList] = useState([])
const fetchList = async()=>{
    try {
        const response = await axios.get(backendUrl + '/api/product/list')
        if (response.data.success){
            setList (response.data.products)
        }
        else{
            toast.error(response.data.message)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

const [orders, setOrders] = useState([]);
const [totalRevenue, setTotalRevenue] = useState(0);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
        const revenue = response.data.orders.reduce((acc, order) => acc + order.amount, 0);
        setTotalRevenue(revenue);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [users, setUsers] = useState([])
  const fetchUsers = async()=>{
      try {
          const response = await axios.post(backendUrl + '/api/user/list')
          if (response.data.success){
              setUsers (response.data.users)
          }
          else{
              toast.error(response.data.message)
          }
      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }
  }

 
useEffect(() => {
    fetchList(),fetchAllOrders(),fetchUsers()
},[token])

  return (
    <div className="min-h-screen w-[175%]">
      <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Number of Items */}
        <div className="bg-white shadow-md border border-gray-300 p-6 rounded-lg text-center">
          <h2 className="text-xl bg-white font-semibold mb-2">Items</h2>
          <p className="text-4xl bg-white font-bold">{list.length}</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white shadow-md border border-gray-300 p-6 rounded-lg text-center">
          <h2 className="bg-white text-xl font-semibold mb-2">Total Orders</h2>
          <p className="bg-white text-4xl font-bold">{orders.length}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white shadow-md border border-gray-300 p-6 rounded-lg text-center">
          <h2 className="bg-white text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="bg-white text-4xl font-bold">₹{totalRevenue.toLocaleString()}</p>
        </div>


        {/* Total Users */}
        <div className="bg-white shadow-md border border-gray-300 p-6 rounded-lg text-center">
          <h2 className="bg-white text-xl font-semibold mb-2">Total Users</h2>
          <p className="bg-white text-4xl font-bold">{users.length}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
