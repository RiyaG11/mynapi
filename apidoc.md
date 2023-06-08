* Myntra App

// page1

list of item wrt to men wear
http://localhost:9001/item?categoryId=1
list of item wrt to women wear
http://localhost:9001/item?categoryId=2
list of item wrt to kids wear
http://localhost:9001/item?categoryId=3


//page2
>list of subitems wrt items
http://localhost:9001/subitem?itemId=1
>list of products wrt subitems
http://localhost:9001/product?subitemId=1
products wrt subitems + brand
http://localhost:9001/filter/1?Brand=Puma
>products wrt subitems + cost
http://localhost:9001/filter/1?lPrice=999&hPrice=2999


//page3

>product details
http://localhost:9001/details/6480876a57a939f31d4bee63


//page4

>details of products in bag
http://localhost:9001/productDetails
{"id":[11,12,13]}

>place order
http://localhost:9001/placeOrder

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
http://localhost:9001/orders

>update orders details
http://localhost:9001/updateOrder
{
    "_id":"6480f79be6c09b9579ae3515",
    "status": "Out for delivery"
}

>delete order
http://localhost:9001/deleteOrder
{"_id": "6480fafb6a9045d71186db0d"}