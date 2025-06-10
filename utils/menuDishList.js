const menuCategories = [
  {
    id: '1',
    title: 'Breakfast',
    img: 'images/menu-category-breakfast.jpg',
    items: [
      { name: 'ጥብስ እንቁላል | Avocado with Egg', price: 180 },
      { name: 'ድንች እንቁላል | Potato with Egg', price: 150 },
      { name: 'ዱለት ስፔሻል | Dulet Special', price: 300 },
      { name: 'ዓሳ ዱለት | Fish Dulet', price: 300 },
      { name: 'ዓሳ ፍርፍር | Fish Firfir', price: 170 },
      { name: 'እንቁላል ሥጋ | Eggs with Meat', price: 220 },
      { name: 'እንቁላል ቲማቲም | Eggs with Tomato', price: 200 },
      { name: 'እንቁላል ሳንቲም | Eggs with Tomato', price: 170 },
      { name: 'ኖርማል ጭብሳ | Normal Chechebsa', price: 180 },
      { name: 'ስፔሻል ጭብሳ | Special Chechebsa', price: 200 },
      { name: 'ዳቦ ፍርፍር | Bread Firfir', price: 160 },
      { name: 'ኖርማል ፉል | Normal Ful', price: 180 },
      { name: 'ስፔሻል ፉል | Special Ful', price: 200 },
      { name: 'ፈትራ | Fetira', price: 150 },
      { name: 'ስፔሻል ፈትራ | Special Fetira', price: 190 }
    ]
  },
  {
    id: '2',
    title: 'Non-Fasting Habeshan',
    img: 'images/menu-category-habeshan.jpg',
    items: [
      { name: 'ብሌዝ ስፔሻል ኮምቦ | Blaze Special Combo', price: 550 },
      { name: 'የበግ ጥብስ | Lamb Tibs', price: 350 },
      { name: 'ጥብስ ተፈረሸ | Tibs Tefersho', price: 350 },
      { name: 'የበግ ክክል | Lamb Kikil', price: 400 },
      { name: 'ብሌዝ ስፔሻል ሽሮ በቅቤ | Blaze Special Shiro with Butter', price: 200 },
      { name: 'ሽሮ በቅቤ | Shiro with Butter', price: 180 },
      { name: 'ሽሮ በስጋ | Shiro with Meat', price: 250 },
      { name: 'ጥብስ ፍርፍር | Tibs Firfir', price: 270 },
      { name: 'ቁንጣ ፍርፍር | Quanta Firfir', price: 290 },
      { name: 'ድርቆሽ በቁንጣ | Dirkosh with Quanta', price: 350 },
      { name: 'ፍርፍር በቅቤ | Firfir with Butter', price: 180 },
      { name: 'ፍርፍር በእንቁላል | Firfir with Egg', price: 220 },
      { name: 'የዶሮ ወጥ (በአበሻ) | Spicy Ethiopian Chicken Stew', price: 350 },
      { name: 'ጎመን በስጋ | Gomen with Meat', price: 350 },
      { name: 'ሙሉ ዶሮ ወጥ (ለሁሉ 10 አበሻ) | Whole Chicken Stew', price: 2800 },
      { name: 'አገልግል ለ5 ሰዎች | Agelgil for 5 People', price: 1500 }
    ]
  },
  {
    id: '3',
    title: 'Fasting Habeshan',
    img: 'images/menu-category-fasting.jpg',
    items: [
      { name: 'በያይነት | Beyaynet', price: 220 },
      { name: 'ስፔሻል ሽሮ | Special Shiro', price: 180 },
      { name: 'ተጋቢኖ | Tegabino', price: 170 },
      { name: 'ኖርማል ፍርፍር | Normal Firfir', price: 150 },
      { name: 'ድርቆሽ ፍርፍር | Dirkosh Firfir', price: 190 },
      { name: 'ቲማቲም ቁርጥ | Tomato Kurt', price: 160 }
    ]
  },
  {
    id: '4',
    title: 'Fish',
    img: 'images/menu-category-fish.jpg',
    items: [
      { name: 'ዓሳ ዱለት | Fish Dulet', price: 300 },
      { name: 'ዓሳ ጉላሽ | Fish Gulash', price: 400 },
      { name: 'ዓሳ ለብለብ | Fish Lebleb', price: 320 },
      { name: 'ዓሳ ቁርጥ | Fish Cutlete', price: 350 }
    ]
  },
  {
    id: '5',
    title: 'Chicken',
    img: 'images/menu-category-chicken.jpg',
    items: [
      { name: 'የዶሮ ጡት | Chicken Breast Grilled', price: 380 },
      { name: 'የዶሮ እግር የተጠበሰ | Chicken Leg Roasted', price: 420 }
    ]
  },
  {
    id: '6',
    title: 'Wrap',
    img: 'images/menu-category-wrap.jpg',
    items: [
      { name: 'የዶሮ ራፕ | Chicken Wrap', price: 250 },
      { name: 'የአትክልት ራፕ | Veg Wrap', price: 150 },
      { name: 'የስጋ ራፕ | Beef Wrap', price: 260 }
    ]
  },
  {
    id: '7',
    title: 'Pizza',
    img: 'images/menu-category-pizza.jpg',
    items: [
      { name: 'ብሌዝ ስፔሻል ፒዛ | Blaze Special Pizza', price: 480 },
      { name: 'ፒዛ ማርጋሪታ | Pizza Margarita', price: 320 },
      { name: 'የስጋ ፒዛ | Beef Pizza', price: 420 },
      { name: 'የዶሮ ፒዛ | Chicken Pizza', price: 400 },
      { name: 'የተፈጨ ሥጋ ፒዛ | Tuna Cheese Pizza', price: 460 },
      { name: 'ፆም ቪጋን ፒዛ | Fasting Vegan Pizza', price: 250 }
    ]
  },
  {
    id: '8',
    title: 'Burgers',
    img: 'images/menu-category-burgers.jpg',
    items: [
      { name: 'ብሌዝ ስፔሻል በርገር | Blaze Special Burger', price: 450 },
      { name: 'ብሌዝ ሚኒ ስፔሻል በርገር (3 piece — 1 Beef/ 1 Cheese/ 1Egg) | Blaze Mini Special Burgers (3 piece — 1 Beef/ 1 Cheese/ 1Egg)', price: 450 },
      { name: 'ኖርማል የበሬ በርገር | Basic Beef Burger', price: 250 },
      { name: 'የቼዝ በርገር | Cheese Burger', price: 300 }
    ]
  },
  {
    id: '9',
    title: 'Sandwiches',
    img: 'images/menu-category-sandwiches.jpg',
    items: [
      { name: 'ክለብ ሳንድዊች | Club Sandwich', price: 400 },
      { name: 'የዶሮ ሳንድዊች | Chicken Sandwich', price: 260 },
      { name: 'እንቁላል ሳንድዊች | Egg Sandwich', price: 170 },
      { name: 'ዓሳ ሳንድዊች | Fish Sandwich', price: 300 },
      { name: 'ፍሬንች ፍራይስ | French Fries', price: 100 }
    ]
  },
  {
    id: '10',
    title: 'Spaghetti and Rice',
    img: 'images/menu-category-spaghetti.jpg',
    items: [
      { name: 'ፓስታ በቦሎኔዝ | Pasta with Bolognese Sauce', price: 200 },
      { name: 'ፓስታ በአትክልት | Pasta with Vegetable', price: 180 },
      { name: 'ፓስታ በ tuna | Pasta with Tuna', price: 280 },
      { name: 'ፓስታ በቲማቲም | Pasta with Tomato Sauce', price: 180 },
      { name: 'ሩዝ በአትክልት | Rice with Vegetable', price: 180 },
      { name: 'ሩዝ በቲማቲም | Rice with Tomato Sauce', price: 180 },
      { name: 'ሩዝ በቦሎኔዝ | Rice with Bolognese Sauce', price: 200 }
    ]
  },
  {
    id: '11',
    title: 'Salads',
    img: 'images/menu-category-salads.jpg',
    items: [
      { name: 'የተለያዩ ሳላድ | Mixed Salad', price: 220 },
      { name: 'ብሌዝ ሼፍ ሳላድ | Blaze Chef Salad', price: 350 },
      { name: 'የዶሮ ሳላድ | Chicken Salad', price: 420 }
    ]
  },
  {
    id: '13',
    title: 'Cookies',
    img: 'images/menu-category-cookies.jpg',
    items: [
      { name: 'በተ ኩኪስ - 1Kg | Butter Cookies - 1Kg', price: 600 },
      { name: 'በተ ኩኪስ - ½ Kg | Butter Cookies - ½ Kg', price: 330 },
      { name: 'በተ ኩኪስ - ¼ Kg | Butter Cookies - ¼ Kg', price: 200 }
    ]
  },
  {
    id: '12',
    title: 'Cakes',
    img: 'images/menu-category-cakes.jpg',
    items: [
      { name: 'ቶርታ ኬክ | Torta Cake', price: null },
      { name: 'ቶርታ ኬክ 1Kg | Torta Cake 1Kg', price: 800 },
      { name: 'ቶርታ ኬክ 2Kg | Torta Cake 2Kg', price: 1500 },
      { name: 'ሚኒ ኬክስ ፓክ 6 Pieces | Mini Cakes Pack 6 Pieces', price: 150 },
      { name: '9 Pieces', price: 225 },
      { name: '12 Pieces', price: 300 },
      { name: 'ሚሊፎኒ | Milifoni', price: 80 },
      { name: 'እንግሊዝ ኬክ | English Cake', price: 80 },
      { name: 'እንግሊዝ ኬክ ከዘቢብ | English Cake with Zebib', price: 85 },
      { name: 'ዶናት | Donut', price: 40 },
      { name: 'ሚኒ ዶናትስ 4Pcs (1/4 KG) | Mini Donuts 4Pcs (1/4 KG)', price: 150 },
      { name: 'ክሩዋሶን | Croissant', price: 40 },
      { name: 'ክሩዋሶን (ቸኮሌት) | Croissant (Chocoloate)', price: 75 },
      { name: 'ባናና ማፈን | Banana Maffen', price: 35 },
      { name: 'እንግሊዝ ማፈን | English Maffen', price: 35 },
      { name: 'ባናና ኬክ | Banana Cake', price: 40 },
      { name: 'ባክላቫ | Baklava', price: 70 },
      { name: 'ደረቅ ኬክ | Dry Cake', price: 35 },
      { name: 'እንግሊዝ ኬክ | English Cake', price: 35 }
    ]
  },
  {
    id: '14',
    title: 'Extras',
    img: 'images/menu-category-extras.jpg',
    items: [
      { name: 'አዲስ አበባ 100% የእጅ ሥራ እንጀራ | Home made Injera', price: 30 },
      { name: 'ተጨማሪ ዳቦ | Extra Bread', price: 15 },
      { name: 'ተጨማሪ ማር | Extra Honey', price: 10 },
      { name: 'ሚኒ ዳቦዎች (4Pcs) | Mini Breads (4Pcs)', price: 50 },
      { name: 'ሞዛሬላ አይብ ስላይስ | Mozzarella Cheese Slice', price: 70 },
      { name: 'ተጨማሪ ማዮኔዝ | Extra Mayonnaise', price: 15 },
      { name: 'ተጨማሪ ኬችአፕ | Extra Ketchup', price: 10 },
      { name: 'ተጨማሪ ቺሊ ሶስ | Extra Chili Sauce', price: 15 }
    ]
  }
]

export default menuCategories
