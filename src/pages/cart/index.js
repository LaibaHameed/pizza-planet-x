import { useContext, useState } from "react";
import { CartContext } from "@/utils/contextReducer";
import Image from 'next/image';
import { Trash2 } from "lucide-react";
import { useRouter } from 'next/router';
import Alert from "@/components/Alert";
import { X } from "lucide-react"; // Import the cross/close icon

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [alert, setAlert] = useState(null); // State for alert messages
  const [showAuthDialog, setShowAuthDialog] = useState(false); // State for showing authentication dialog
  const getUnitPrice = (item) => item.price / item.qty;

  const getTotalPrice = () => {
    return state.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const router = useRouter();

  const handleUpdateCart = () => {
    router.push('/menu');
  };

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem('userEmail');
    
    if (!userEmail) {
      setShowAuthDialog(true); // Show the authentication dialog if user is not logged in
      return;
    }

    await fetch("api/ordersData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: state,
        order_date: new Date().toDateString(),
        email: userEmail,
      }),
    }).then((response) => {
      if (response.status === 200) {
        dispatch({ type: "DROP" });
        setAlert({ type: 'success', message: `Your order has been placed!` });
        setTimeout(() => {
          setAlert(null);
        }, 2000);
      }
    }).catch(() => {
      setAlert({ type: 'failed', message: `Something went wrong.` });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    });
  };

  const handleDeleteItem = (item, index) => {
    dispatch({ type: "REMOVE", index });
    setAlert({ type: 'success', message: `${item.name} has been deleted from your cart!` });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  // Handle user redirect to sign up or log in
  const handleRedirectToAuth = (path) => {
    setShowAuthDialog(false);
    router.push(path);
  };

  return (
    <>
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
                    <td className="py-4 text-zinc-950 text-lg" >{index + 1}.</td>
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
                        onClick={() => handleDeleteItem(item, index)}
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
                onClick={handleUpdateCart}
                className="bg-yellow-500 text-zinc-950 font-bold tracking-wide uppercase p-2 sm:py-6 sm:px-6 md:text-sm transition-colors duration-300 hover:bg-slate-950 hover:text-white"
              >
                update cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-slate-950 text-white font-bold tracking-wider uppercase p-2 sm:py-6 sm:px-6 md:text-sm transition-colors duration-300 hover:bg-yellow-500 hover:text-zinc-950"
              >
                check out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Authentication Dialog */}
      {showAuthDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white py-12 px-20 rounded-lg shadow-lg text-center">
            <button
              className="absolute top-2 right-2 text-zinc-950 hover:text-red-500"
              onClick={() => setShowAuthDialog(false)}
            >
              <X size={24} /> {/* Cross/Close button */}
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-950">You need to sign in first!</h2>
            <p className="mb-4 text-zinc-950 text-sm">Please sign up or log in to proceed with your order.</p>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => handleRedirectToAuth('/signup')}
                className="bg-yellow-500 text-zinc-950 text-sm font-bold uppercase px-4 py-2 hover:bg-slate-950 hover:text-white"
              >
                Sign Up
              </button>
              <button
                onClick={() => handleRedirectToAuth('/login')}
                className="bg-slate-950 text-white text-sm font-bold uppercase px-4 py-2 hover:bg-yellow-500 hover:text-zinc-950"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}

      <Alert alert={alert} onClose={handleCloseAlert} />
    </>
  );
};

export default Cart;
