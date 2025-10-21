
// Detailed array of objects of an e-commerce store products to practice the filteration of it ...............

const orders = [
  {
    orderId: 101,
    customer: { name: "Ali", city: "Karachi", vip: true },
    items: [
      { name: "Laptop", category: "Electronics", price: 10, qty: 1 },
      { name: "Mouse", category: "Electronics", price: 540, qty: 2 },
    ],
    status: "Delivered",
    paymentMethod: "Credit Card",
  },
  {
    orderId: 102,
    customer: { name: "Ayesha", city: "Lahore", vip: false },
    items: [
      { name: "T-Shirt", category: "Fashion", price: 25, qty: 3 },
      { name: "Shoes", category: "Fashion", price: 90, qty: 1 },
    ],
    status: "Pending",
    paymentMethod: "Cash on Delivery",
  },
  {
    orderId: 103,
    customer: { name: "Hassan", city: "Islamabad", vip: false },
    items: [
      { name: "Smartphone", category: "Electronics", price: 800, qty: 1 },
      { name: "Case", category: "Accessories", price: 25, qty: 2 },
    ],
    status: "Delivered",
    paymentMethod: "Debit Card",
  },
  {
    orderId: 104,
    customer: { name: "Zain", city: "Karachi", vip: true },
    items: [
      { name: "Sofa", category: "Furniture", price: 1000, qty: 1 },
      { name: "Lamp", category: "Home Decor", price: 60, qty: 2 },
    ],
    status: "Cancelled",
    paymentMethod: "Credit Card",
  },
  {
    orderId: 105,
    customer: { name: "Fatima", city: "Lahore", vip: false },
    items: [
      { name: "Book", category: "Stationery", price: 15, qty: 5 },
      { name: "Pen", category: "Stationery", price: 5, qty: 10 },
      { name: "trousers", category: "fashion", price: 23, qty: 2 },
    ],
    status: "Delivered",
    paymentMethod: "PayPal",
  },
];

// 💥 Now Here Are Your 10 Tricky Questions (filter/find/logic practice): 


// Question # 01 
// Find all orders placed by VIP customers. 

// const findVIPOrders = (ordersArray0

// Question # 02
// Get all “Delivered” orders that contain at least one “Electronics” item.

// const getElectronicsContainOrders = (ordersArray) => ordersArray.filter( order => order?.status.toLowerCase() == "delivered" && order?.items?.some(item => item?.category.toLowerCase() == "electronics"))

// console.log(getElectronicsContainOrders(orders))

// 🧩 Question # 03
// Find orders where total bill (sum of all price * qty) exceeds $1000.

// const findHighPaidOrders = (ordersArray) => 
//     {
//     return ordersArray.filter(order =>
        
//         {
//                // Step 1: calculate total of all items
//     const total = order?.items?.reduce((sum, item) => sum + (item.price * item.qty), 0); 

//     // Step 2: check if total exceeds 1000
//     return total > 1000;

//         })
//     }

// console.log(findHighPaidOrders(orders))

// 🧩 Question # 04
// Get all orders where the customer lives in “Karachi” AND payment method is “Credit Card”.

// const getCreditAndKarachiOrders = (ordersArray) => ordersArray.filter(order => order?.customer?.city.toLowerCase() == "karachi" && order?.paymentMethod.toLowerCase() == "credit card" )

// console.log(getCreditAndKarachiOrders(orders))

// 🧩 Question # 05
// Find the first order where at least one item has quantity greater than 2.

// const findOrderWithQuantityGreatorThan2 = (ordersArray) => ordersArray.find(order => order?.items?.some(item => item.qty > 2) )

// console.log(findOrderWithQuantityGreatorThan2(orders))

// 🧩 Question # 06
// Get all customers (names only) who ordered at least one item from category “Fashion”.

// const getFashionCategoryOrder = (ordersArray) => {
//     return ordersArray.filter(order => order?.items?.some(item => item.category.toLowerCase() == "fashion")).map(item => item?.customer?.name)
// } 

// console.log(getFashionCategoryOrder(orders))

// 🧩 Question # 07
// Find all orders that were NOT delivered and belong to non-VIP customers.

// const NonDeliveredOrders = (ordersArray) => {
//     return ordersArray?.filter(order => order )
// }

// console.log(NonDeliveredOrders(orders))

// 🧩 Question # 08
// Get an array of all unique product categories ordered by VIP customers.

// const getVIPCustomersProducts = (ordersArray) => {
//     const ordersitems = ordersArray.filter(order => order?.customer?.vip).flatMap((order) => order?.items.map(item => item?.category ))
//     uniqueOrderItems = [...new Set(ordersitems)]
//     return uniqueOrderItems
//   } 


// console.log(getVIPCustomersProducts(orders))

// 🧩 Question # 09
// Find all orders that include both “Electronics” and “Accessories” categories together.

// const FindOrdersIncludeCategories = (ordersArray) => {
//   return ordersArray.filter(order => {
//    let categories = order?.items.map(item => item?.category.toLowerCase())
//     categories = categories.includes("electronics") && categories.includes("accessories")
//     return categories
//   }
//   )}

// console.log(FindOrdersIncludeCategories(orders))

// 🧩 Question # 10
// Get all orders where at least one item’s price is less than 20 AND another item’s price is above 500 (in the same order).

const getUniqueTypeOrders = (ordersArray) => {
  return ordersArray.filter((order) => {
    const itemsArr = order?.items?.map( item => item?.price)
    let hasLowPriceItem = itemsArr.some(item => item < 20 )
    let hasHighPriceItem = itemsArr.some(item => item > 500)
    return hasHighPriceItem && hasLowPriceItem
  })
}

console.log(getUniqueTypeOrders(orders))