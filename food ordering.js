import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const menuItems = [
  { id: 1, name: "Burger", price: 5.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Pizza", price: 8.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Pasta", price: 7.49, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Salad", price: 4.99, image: "https://via.placeholder.com/150" },
];

export default function FoodOrderingApp() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Food Ordering</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <Card key={item.id} className="p-4 text-center">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <Button className="mt-2 w-full" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length > 0 ? (
          <ul className="mt-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <Button className="mt-4 w-full flex items-center justify-center" disabled={cart.length === 0}>
          <ShoppingCart className="mr-2" /> Checkout
        </Button>
      </div>
    </div>
  );
}