const express = require('express');
const cors = require('cors');
const router = express.Router();
router.use(cors());

router.get('/', (req, res) => {
  res.json({
    message: 'API - Works',
  });
});

var productData = [
  {
    "id": 1,
    "title": "Mens Graphic Black Death T-Shirt",
    "price": 350,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men",
    "image": "http://localhost:5000/api/v1/img/1.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Black Death T-Shirt",
    "price": 450,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men",
    "image": "http://localhost:5000/api/v1/img/2.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Women's Printed Black Top",
    "price": 580,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "women",
    "image": "http://localhost:5000/api/v1/img/3.png",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Women's Casual Black Top",
    "price": 670,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "women",
    "image": "http://localhost:5000/api/v1/img/4.png",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Vampire Accessory Set",
    "price": 130,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "http://localhost:5000/api/v1/img/5.png",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Gothic Fly Necklace",
    "price": 90,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "http://localhost:5000/api/v1/img/6.png",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  }
]

router.get('/products', (req, res) => {
  res.send(productData);
});

router.get('/product/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(productData[req.params.id-1]);
});

router.get('/product/category/:cat', (req, res) => {
  var categoryFiltered = productData.filter((item)=>{
    return item.category==req.params.cat;
  })
  res.send(categoryFiltered);
});

router.get('/profileData', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  var data = {
    'image':'http://localhost:5000/api/v1/img/dp.png',
    'name':'John Smith',
    'phone':'7263678373',
    'email':'john@gmail.com'
  }
  res.send(data);
})

router.use('/img', (_, res, next) => {
  res.set('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
})
router.use('/img', express.static(__dirname+"/public/img"));

module.exports = router;
