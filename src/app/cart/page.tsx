'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '../../../types/prodcuts'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import { urlFor } from '@/sanity/lib/image'
import { ArrowRight, InfoIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  // Remove item from cart
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCartItems())
        Swal.fire("Removed!", "Item has been removed.", "success")
      }
    })
  }

  // Update cart quantity
  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
    setCartItems(getCartItems())
  }

  // Increment quantity
  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product) handleQuantityChange(id, product.inventory + 1)
  }

  // Decrement quantity
  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1)
  }

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
  }

  // Handle proceed to checkout
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before final checkout.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully confirmed!", "success")
        router.push("/checkout")
        setCartItems([])
      }
    })
  }

  return (
    <div className="container mx-auto px-6 py-10 bg-myBgGrey my-4 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-myBlack text-center text-lg flex flex-row items-center justify-center gap-2"><InfoIcon />Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b pb-4">
              <div className='flex flex-col md:flex-row gap-6'>
                <div className="flex items-center gap-4">
                  {item.productImage && (
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt='image'
                      width={250}
                      height={250} className='w-[120px] h-[120px] object-cover rounded-lg' />)}
                </div>

                <div className='flex flex-col gap-4'>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item._id)}
                className="text-red-500 bg-blue-400 px-4 py-1 rounded-lg hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex justify-evenly items-center mt-6">
            <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleProceed}
              className="bg-myButton text-white px-6 py-2 rounded-md hover:bg-blue-700 flex gap-2 items-center"
            >
              Proceed to Checkout <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage


// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Product } from '../../../types/prodcuts'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
// import { product } from '@/sanity/schemaTypes/products'
// import Swal from 'sweetalert2'

// const CartPage = () => {

//   const [cartItems, setCartItems] = useState<Product[]>([])
//   useEffect(() => {
//     setCartItems(getCartItems())
//   }, [])

//   //item from cart remove function
//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are You Sure",
//       text: "You Will Not be Able To recover This Item",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "yes , Remove it",

//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id)
//         setCartItems(getCartItems())
//         Swal.fire(
//           "Removed!", "Item has been removed"
//         )
//       }
//     })
//   }
// //quantity change function

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity)
//     setCartItems(getCartItems())
//   }

//   //increment in cart quantity
//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id)
//     if (product)
//       handleQuantityChange(id, product.inventory + 1)
//   }

//   //decrement in cart quantity
//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id)
//     if (product && product.inventory >= 1)
//       handleQuantityChange(id, product.inventory - 1)
//   }

// const calculatedTotal = ()=> {
//   return cartItems.reduce((total, item)=> total + item.price *item.inventory, 0 )
// }

// const handledProceed = ()=>{
//   Swal.fire({
//     title: "Proceed to Checkout",
//     text: "Please review Your Cart before Final Checkout",
//     icon: "info",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, Proceed!",

//   }).then((result)=>{
//     if(result.isConfirmed){
//       Swal.fire("success", "Your order has been successfully confirmed", "success")
//       setCartItems([])
//     }
//   })
// }

//   return (
//     <div>
//       {cartItems.map((item) => (
//         <div key={item._id}>
//           {item.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CartPage