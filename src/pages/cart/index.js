import { useContext } from "react";
import { CartContext } from "@/utils/contextReducer";
import Image from 'next/image';
import { Delete, Trash2 } from "lucide-react";
import { useRouter } from 'next/router';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const getUnitPrice = (item) => item.price / item.qty;

  const getTotalPrice = () => {
    return state.reduce((total, item) => total + parseFloat(item.price), 0);
    // return state.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const router = useRouter();
  const handleUpdateCart = () => {
    router.push('/menu'); 
  };
  const handleCheckout = () => {
    // router.push('/checkout'); 
    dispatch({type:"DROP" })
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      {state.length === 0 ? (
        <p className="text-center text-wrap text-zinc-950 font-bold text-2xl mb-14">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">#</th>
                <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Pizza</th>
                <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Size</th>
                <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Quantity</th>
                <th className="text-lg font-semibold px-4 py-3 text-zinc-950 transition duration-200">Price</th>
              </tr>
            </thead>
            <tbody>
              {state.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 text-zinc-950 text-lg" >{index+1}.</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="hidden sm:block">
                        <Image src={item.img} alt="pizza image" width={80} height={80} className="rounded-lg" />
                      </div>
                      <div className="sm:ml-4">
                        <h2 className="font-semibold px-4 py-3 text-zinc-950 transition duration-200">{item.name}</h2>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-zinc-950 transition duration-200">{item.size}</td>
                  <td className="py-4 font-semibold text-zinc-950 transition duration-200">
                    <div className="flex items-center">
                      <button
                        onClick={() => dispatch({ type: "DECREASE", tempId: item.tempId, unitPrice: getUnitPrice(item) })}
                        className="text-xl font-bold bg-gray-200 w-6 hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.qty}</span>
                      <button
                        onClick={() => dispatch({ type: "INCREASE", tempId: item.tempId, unitPrice: getUnitPrice(item) })}
                        className="text-xl font-bold bg-gray-200 w-6 hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-zinc-950 transition duration-200">${item.price}</td>
                  <td className="py-4">
                    <button
                      onClick={() => dispatch({ type: "REMOVE", index })}
                      className="font-semibold sm:px-4 py-3 hover:text-red-500 text-zinc-950 transition duration-200"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right my-8">
            <h3 className="text-2xl font-bold text-zinc-950">Total: ${getTotalPrice()}</h3>
          </div>
          <div className="flex justify-center md:justify-end md:gap-6 gap-2 mb-14">
            <button
              onClick={handleUpdateCart}  // Add onClick for update cart
              className="bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase p-2 sm:py-6 sm:px-6 md:text-sm transition-colors duration-300 hover:bg-slate-950 hover:text-white"
            >
              update cart
            </button>
            <button
              onClick={handleCheckout}  // Add onClick for checkout
              className="bg-slate-950 text-white font-bold tracking-wider uppercase p-2 sm:py-6 sm:px-6 md:text-sm transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-950"
            >
              check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
