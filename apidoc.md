* Myntra App

// page1

>list of item wrt to men wear
https://myn-mjxo.onrender.com/item?categoryId=1

>list of item wrt to women wear
https://myn-mjxo.onrender.com/item?categoryId=2

>list of item wrt to kids wear
https://myn-mjxo.onrender.com/item?categoryId=3



//page2

>list of subitems wrt items
https://myn-mjxo.onrender.com/subitem?itemId=1

>list of products wrt subitems
https://myn-mjxo.onrender.com/product?subitemId=1

>products wrt subitems + brand
https://myn-mjxo.onrender.com/filter/1?Brand=Puma

>products wrt subitems + cost
https://myn-mjxo.onrender.com/filter/1?lPrice=999&hPrice=2999



//page3

>product details
https://myn-mjxo.onrender.com/details/6480b341965d913be03b1436



//page4

>details of products in bag
https://myn-mjxo.onrender.com/productDetails
{"id":[11,12,13]}

>place order
https://myn-mjxo.onrender.com/placeOrder


{
    "_id": "6480f79be6c09b9579ae3515",
        "orderId": 5,
        "name": "Bhavya",
        "email": "coolmannee142@gmail.com",
        "address": "Ram Nagar",
        "phone": 9876543210,
        "cost": 12777,
        "product_id": [
            11,
            12,
            13
        ],
        "status": "Delivered"
}



//page5

>list of all the orders
https://myn-mjxo.onrender.com/orders

>update orders details
https://myn-mjxo.onrender.com/updateOrder
{
    "_id":"6480f79be6c09b9579ae3515",
    "status": "Out for delivery"
}

>delete order
https://myn-mjxo.onrender.com/deleteOrder
{"_id": "6480fafb6a9045d71186db0d"}