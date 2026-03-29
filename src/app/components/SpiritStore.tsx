import { ShoppingBag, Star, TrendingUp, Tag, ChevronRight } from "lucide-react";

export function SpiritStore() {
  const newArrivals = [
    {
      id: 1,
      name: "Molloy Lions Hoodie",
      price: 54.99,
      isNew: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Vintage Crewneck Sweatshirt",
      price: 44.99,
      isNew: true,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Spirit Baseball Cap",
      price: 24.99,
      isNew: true,
      rating: 4.7,
    },
  ];

  const saleItems = [
    {
      id: 4,
      name: "Classic T-Shirt",
      price: 19.99,
      originalPrice: 29.99,
      discount: 33,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Water Bottle",
      price: 14.99,
      originalPrice: 19.99,
      discount: 25,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Stadium Blanket",
      price: 29.99,
      originalPrice: 44.99,
      discount: 33,
      rating: 4.8,
    },
  ];

  const allItems = [
    { id: 7, name: "Zip-Up Jacket", price: 64.99, category: "Apparel", rating: 4.7 },
    { id: 8, name: "Backpack", price: 49.99, category: "Accessories", rating: 4.6 },
    { id: 9, name: "Notebook Set", price: 12.99, category: "Stationery", rating: 4.5 },
    { id: 10, name: "Lanyard", price: 6.99, category: "Accessories", rating: 4.4 },
    { id: 11, name: "Pennant Flag", price: 16.99, category: "Decor", rating: 4.7 },
    { id: 12, name: "Car Decal", price: 8.99, category: "Accessories", rating: 4.6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] text-white px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold">Spirit Store</h1>
            <p className="text-red-100 text-sm mt-1">Browse before you visit</p>
          </div>
          <ShoppingBag className="w-8 h-8 opacity-80" />
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mt-4 border border-white/20">
          <p className="text-sm text-red-100">📍 Located in Public Square, 1st Floor</p>
          <p className="text-sm text-white font-medium mt-1">Mon-Fri: 9AM-6PM</p>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#9B1B30]" />
          <h2 className="font-bold text-gray-900">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#9B1B30] to-[#7A1625] h-48 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-white/30" />
                </div>
                <span className="absolute top-3 right-3 px-3 py-1 bg-[#C9B382] text-white text-xs font-bold rounded-full">
                  NEW
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 flex-1">{item.name}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#9B1B30]">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Items */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-[#9B1B30]" />
          <h2 className="font-bold text-gray-900">On Sale</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {saleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300" />
                </div>
                <span className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  {item.discount}% OFF
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 flex-1">{item.name}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-[#9B1B30]">${item.price}</p>
                  <p className="text-sm text-gray-400 line-through">${item.originalPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Items */}
      <div className="px-6 pb-6">
        <h2 className="font-bold text-gray-900 mb-4">All Items</h2>
        <div className="space-y-3">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B1B30] to-[#7A1625] rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-white/60" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{item.category}</span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[#9B1B30]">${item.price}</p>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-auto mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Store CTA */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-r from-[#9B1B30] to-[#7A1625] rounded-xl p-6 text-white text-center">
          <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-80" />
          <h3 className="font-bold text-lg mb-2">Visit Us In Person</h3>
          <p className="text-sm text-red-100 mb-4">
            Come see our full collection at the Spirit Store in the Public Square!
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            <p className="text-sm font-medium">Public Square • 1st Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
}