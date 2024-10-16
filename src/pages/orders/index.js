import { useEffect, useState } from "react";
import Image from 'next/image';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const userEmail = localStorage.getItem('userEmail');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const result = await response.json();

      // Correctly access the nested order_data array
      console.log('API Result:', result);

      setOrders(result?.order_data?.order_data || []);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(orders) || orders.length === 0) {
    return <p className="text-center text-wrap text-zinc-950 font-bold text-2xl mb-14">No Orders Found</p>;
  }

  return (
    <div className="container mx-auto p-4 flex items-center flex-col">
      <h1 className="text-3xl font-bold text-center mt-10 text-zinc-950">Your Orders</h1>
      <div className="mb-12">
        {orders.map((orderBatch, batchIndex) => (
          <div key={batchIndex} className="mb-12">
            {/* Display the order_date */}
            {orderBatch[0] && (
              <div className="text-center text-2xl font-semibold text-zinc-950 mt-20 mb-10">
                Order Date: {orderBatch[0].order_date}
              </div>
            )}
            {/* Table for order items */}
            <div className="overflow-x-auto">
              <table className="min-w-xl text-center">
                <thead>
                  <tr className="border-b">
                    <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">#</th>
                    <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Item</th>
                    <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Size</th>
                    <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Quantity</th>
                    <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderBatch.slice(1).map((item, itemIndex) => (
                    <tr key={item.tempId || itemIndex} className="border-b">
                      <td className="py-4 text-zinc-950 text-lg" >{itemIndex + 1}.</td>
                      <td className="py-4 text-zinc-950 text-center" >
                        <div className="flex items-center">
                          <div className="hidden sm:block">
                            <Image src={item.img} alt="pizza image" width={80} height={80} className="rounded-lg" />
                          </div>
                          <div className="sm:ml-4 text-center">
                            <h2 className="font-semibold px-4 py-3 text-zinc-950 transition duration-200">{item.name}</h2>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 font-semibold text-zinc-950 transition duration-200">{item.size}</td>
                      <td className="py-4 font-semibold text-zinc-950 transition duration-200">{item.qty}</td>
                      <td className="py-4 font-semibold text-zinc-950 transition duration-200">${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
