const { User, Product } = require("../models");

/* User.bulkCreate([
  {
    name: "Elon",
    lastname: "Musk",
    email: "elon@gmail.com",
    password: "elonmusk",
    date_of_birth: "1980-12-02", //como se pone la fecha!?
    address: "asdeas",
    is_admin: true,
  },
  {
    name: "Bill",
    lastname: "Gates",
    email: "bill@gmail.com",
    password: "billgates",
    date_of_birth: "1999-10-24",
    address: "astr",
  },
  {
    name: "Marco",
    lastname: "Polo",
    email: "marco@gmail.com",
    password: "marcopolo",
    date_of_birth: "2001-11-20",
    address: "dddd",
    is_admin: true,
  },
]); */
Product.bulkCreate([
  {
    name: "Short Nsw Essential",
    image:"https://imgur.com/FctNHjm.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_718231-MLA49401593420_032022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_867965-MLA49401593418_032022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_634040-MLA49401593419_032022-F.webp",
    color: "Black",
    description:"Made from soft French terry fabric, the Nike Sportswear Shorts feature a curved hem for chic summer style.",
    size: "M",
    brand: "Nike",
    price: 35,
    stock: 11,
    categoria: "shorts"
  },
  {
    name: "Short Swoosh Run",
    image:"https://imgur.com/M7rmrgE.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_942837-MLA49912246089_052022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_988410-MLA49912246088_052022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_988410-MLA49912246088_052022-F.webp",
    color: "Black",
    description:"Put in the miles in smooth comfort in the Nike Dri-FIT Swoosh Run Shorts. Mesh on the sides and a breathable waistband help keep you cool with every mile. Made with at least 75% recycled polyester fibers, they're all about feeling good as you rep the Double Swoosh.",
    size: "M",
    brand: "Nike",
    price: 39,
    stock: 4,
    categoria: "shorts"
  },
  {
    name: "Short Df Challenger",
    image:"https://imgur.com/d1BbiaS.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_785575-MLA49911963968_052022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_882873-MLA49911963966_052022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_965924-MLA49911963969_052022-F.webp",
    color: "Black",
    description:"The iconic Nike Challenger 2-in-1 Shorts deliver knitted comfort with all-new articulated inner tights. They offer the versatility you want from your favorite shorts. This product is made with at least 75% recycled polyester fibers.",
    size: "M",
    brand: "Nike",
    price: 42,
    stock: 7,
    categoria: "shorts"
  },
  {
    name: "Short Icon Clash Tempo",
    image:"https://imgur.com/RrxD5v0.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_726195-MLA49678824283_042022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_683326-MLA49678824282_042022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_977537-MLA49678824284_042022-F.webp",
    color: "White",
    description:"Inspiration for your run comes from the sky in the Nike Tempo Luxe Icon Clash Shorts. An all-over sky-inspired graphic encourages the dreamer in you. The two-layer design maintains comfort and provides easy storage. access.",
    size: "XL",
    brand: "Nike",
    price: 45,
    stock: 5,
    categoria: "shorts"
  },
  {
    name: "Short Run Division Flex",
    image:"https://imgur.com/QMg8KQt.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_772600-MLA49912481083_052022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_669131-MLA49912481086_052022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_613340-MLA49912481085_052022-F.webp",
    color: "Green",
    description:"Designed to run fast and kick back, the Nike Dri-FIT Flex Stride Run Division Shorts have you covered any day in a design made with at least 75% recycled polyester fibers. Soft, lightweight fabric has extra breathability at the back and a pocket to store your phone. Built-in inner lining feels stretchy and supportive.",
    size: "L",
    brand: "Nike",
    price: 50,
    stock: 3,
    categoria: "shorts"
  },
  {
    name: "Short Run It",
    image:"https://imgur.com/H1ql5Y9.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_781209-MLA49933458594_052022-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_753879-MLA49933458593_052022-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_713232-MLA45695123477_042021-F.webp",
    color: "Black",
    description:"Wear these adidas running shorts for any type of activity. When it comes to comfort, they tick all the boxes: They feature AEROREADY technology that manages moisture, ease of movement, and a built-in inner brief. Plus, they have 360 ​​degrees of reflectivity for running in low light.",
    size: "M",
    brand: "Adidas",
    price: 48,
    stock: 6,
    categoria: "shorts"
  },
  {
    name: "Short Air Df",
    image:"https://imgur.com/OJUYQym.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_657322-MLA49695619571_042022-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_821677-MLA49695619574_042022-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_782241-MLA49695619572_042022-F.webp",
    color: "Black",
    description:"Enjoy a soft, lightweight feel that keeps you comfortable in any season. The Nike Air Dri-FIT Essential Shorts feel breathable and sweat-wicking to help keep you cool and dry. They are made with at least 75% recycled polyester fibers.",
    size: "M",
    brand: "Nike",
    price: 45,
    stock: 14,
    categoria: "shorts"
  },
  {
    name: "Calza Epic Fast",
    image:"https://imgur.com/wGL6Bsg.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_705679-MLA46974745860_082021-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_963960-MLA46974745861_082021-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_743711-MLA46974745859_082021-F.webp",
    color: "Black",
    description:"Keep running in the Nike Epic Fast Mid-Rise Tights. The stretchy polyester blend supports your movements, while mesh panels at the back of the knees provide cool ventilation mile after mile. The waistband falls just below the navel and has a drawstring that allows you to dial in the perfect fit. Plus, multiple pockets keep all your small running essentials within easy reach. This product is made with at least 50% recycled polyester fibers.",
    size: "XS",
    brand: "Nike",
    price: 38,
    stock: 17,
    categoria: "shorts"
  },
  {
    name: "Short Play Up",
    image:"https://imgur.com/LZj4kkO.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_994808-MLA49469951401_032022-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_986304-MLA49469951405_032022-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_796157-MLA49469951402_032022-F.webp",
    color: "Orange",
    description:"We all need reliable shorts. Thanks to side hand pockets and a smooth, soft waistband, these are. You'll love the look, but even more the feel.Loose: Full cut for total comfort. Soft, lightweight knit construction provides superior comfort and breathability. The material absorbs sweat and dries very quickly. The finish will not snag or cake for added durability. Anti-odor technology prevents the growth of odor-causing microbes Updated exposed elastic waistband with print Comfort side hand pockets Curved hem creates a more flattering silhouette.",
    size: "M",
    brand: "Under Armour",
    price: 32,
    stock: 8,
    categoria: "shorts"
  },
  {
    name: "Camiseta Liverpool FC Strike",
    image:"https://imgur.com/2eFnR37.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_906175-MLA49926525292_052022-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_997740-MLA49926525291_052022-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_884833-MLA49926525293_052022-F.webp",
    color: "Green",
    description:"The Nike Liverpool Fc Strike Shirt is designed to help you on your way to becoming a football star, just like your biggest club idols. It has a slim fit and sweat-wicking fabric to keep you cool and comfortable. Knit fabric is soft and stretchy to enhance your mobility and let you run after the ball like a champ.",
    size: "L",
    brand: "Nike",
    price: 45,
    stock: 21,
    categoria: "shirts"
  },
  {
    name: "Camiseta FFF Francia Stadium",
    image:"https://imgur.com/E9ujF4c.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_795102-MLA47306940324_082021-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_609953-MLA47306874815_082021-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_642459-MLA47306857844_082021-F.webp",
    color: "Blue",
    description:"Represent your team in the FFF Stadium Home Jersey. Highly breathable fabric moves sweat away from your skin so you stay cool and comfortable on the field or in the stands.",
    size: "M",
    brand: "Nike",
    price: 50,
    stock: 34,
    categoria: "shirts"
  },
  {
    name: "Camiseta Fc Barcelona",
    image:"https://imgur.com/lHeR7Z2.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_694839-MLA47761875240_102021-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_605383-MLA47761875241_102021-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_636349-MLA47761875236_102021-F.webp",
    color: "Unique",
    description:"The FC Barcelona Home Stadium Shirt features highly breathable fabric to wick sweat away from your skin while you cheer on your team. This product is made from 100% recycled polyester fibers.",
    size: "L",
    brand: "Nike",
    price: 55,
    stock: 43,
    categoria: "shirts"
  },
  {
    name: "Camiseta Racing Club Kombat",
    image:"https://imgur.com/PB4iWRg.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_759545-MLA47298450444_082021-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_804555-MLA47298374909_082021-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_741579-MLA47298441469_082021-F.webp",
    color: "Black",
    description:"Kombat Goalkeeper Racing Club 2021 Goalkeeper T-shirt.Kombat technology, registered by the KAPPA brand to optimize high-competition performance, based on lightness, elasticity and fair perspiration evaporation.The SLIM cut adapts to your body being ideal for exercises high perfomance.",
    size: "L",
    brand: "Kappa",
    price: 35,
    stock: 14,
    categoria: "shirts"
  },
  {
    name: "Camiseta Retro Independiente",
    image:"https://imgur.com/XDZeXZd.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_846526-MLA46833219373_072021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_805707-MLA46833201462_072021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_812099-MLA46833192489_072021-F.webp",
    color: "Red",
    description:"Independiente Ades retro t-shirt, made of polyester fabric with a fitted neck.",
    size: "L",
    brand: "Topper",
    price: 38,
    stock: 6,
    categoria: "shirts"
  },
  {
    name: "Remera Training Workout Ready ",
    image:"https://imgur.com/yfeWhkK.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_841719-MLA48933879365_012022-F.webp",
    image2: "https://http2.mlstatic.com/D_NQ_NP_2X_802668-MLA48933879366_012022-F.webp",
    image3: "https://http2.mlstatic.com/D_NQ_NP_2X_704556-MLA48933879363_012022-F.webp",
    color: "Grey",
    description:"Workout Ready T-shirt, so that you feel comfortable in all your workouts. It is made of nylon and elastane. Round neck and fitted cut.",
    size: "XL",
    brand: "Reebok",
    price: 45,
    stock: 4,
    categoria: "shirts"
  },
  {
    name: "Remera Training Designed to Move ",
    image:"https://imgur.com/dEh25YA.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_727332-MLA49197254100_022022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_607708-MLA49197254096_022022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_720846-MLA49197254097_022022-F.webp",
    color: "Grey",
    description:"Adidas designed to move t-shirt, with a classic cut, round neck, short sleeves and elongated rear hem. Openwork fabric in recycled polyester. Absorbent.",
    size: "M",
    brand: "Adidas",
    price: 43,
    stock: 26,
    categoria: "shirts"
  },
  {
    name: "Camiseta Local Arsenal",
    image:"https://imgur.com/tLev71K.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_947359-MLA48636912075_122021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_622305-MLA48636912076_122021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_901864-MLA48636912077_122021-F.webp",
    color: "Unique",
    description:"Classic cut. Ribbed V neck. 100% recycled polyester material. Absorbent. Ribbed cuffs. Woven Arsenal crest.",
    size: "L",
    brand: "Adidas",
    price: 68,
    stock: 23,
    categoria: "shirts"
  },
  {
    name: "Remera Own The Run",
    image:"https://imgur.com/PRo9WTG.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_887669-MLA48055609866_102021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_666345-MLA48055609867_102021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_647744-MLA48055609865_102021-F.webp",
    color: "Pink",
    description:"Life is complicated and you always have things to do. There are days when you feel like you don't have the time or the energy to go running. Get back to basics in this adidas Own the Run t-shirt. It's soft, comfortable and dries quickly. In addition, it is made of recycled materials and is part of our fight for a more sustainable future. So you can feel good about the shirt you're wearing while racking up more and more miles.",
    size: "S",
    brand: "Adidas",
    price: 47,
    stock: 11,
    categoria: "shirts"
  },
  {
    name: "Remera Active",
    image:"https://imgur.com/0mzIEAV.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_736592-MLA48419253303_122021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_665447-MLA48419253304_122021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_900255-MLA48419253302_122021-F.webp",
    color: "Black",
    description:"Every day you will open your closet and choose this excellent performance t-shirt again and again. It has flatlock seams to prevent chafing during training sessions and dryCELL, PUMA's signature technology to wick away moisture. Thus, this model will help you to continue and continue even in the toughest workouts.",
    size: "XS",
    brand: "Puma",
    price: 45,
    stock: 4,
    categoria: "shirts"
  },
  {
    name: "Remera Aeroready",
    image:"https://imgur.com/ln8xdbV.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_798868-MLA49842498339_052022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_829529-MLA49842498341_052022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_780406-MLA49842498340_052022-F.webp",
    color: "Red",
    description:"Wear this adidas t-shirt to train in the gym, practice yoga or any kind of sports activity that has caught your attention. Its loose fit allows you to move freely while you stretch and lift weights. The AEROREADY absorption technology is responsible for keeping your skin dry at all times.",
    size: "M",
    brand: "Adidas",
    price: 42,
    stock: 21,
    categoria: "shirts"
  },
  {
    name: "Remera Essentials",
    image:"https://imgur.com/mNZglmO.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_865611-MLA48742400950_012022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_740232-MLA48742400949_012022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_941920-MLA48742400951_012022-F.webp",
    color: "Grey",
    description:"Let your sporty side shine in this slim fit t-shirt. The t-shirt has a classic look that goes with just about everything, from jeans to tennis skirts to training pants. Our cotton products support sustainable cotton farming. This is part of our desire to put an end to plastic pollution.",
    size: "L",
    brand: "Puma",
    price: 35,
    stock: 12,
    categoria: "shirts"
  },
  {
    name: "Top Swoosh",
    image:"https://imgur.com/MFKhL4j.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_793568-MLA48708271434_122021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_840742-MLA48708271433_122021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_828182-MLA48708271435_122021-F.webp",
    color: "Black",
    description:"With wide, comfortable straps in a high-scoop back design, the Nike Dri-FIT Swoosh Sports Bra offers a snug, secure fit as you move. Soft, lightweight fabric (made from at least 50% recycled polyester fibers) features sweat-wicking technology to help keep you dry, comfortable and focused. An iridescent logo fades toward the chest for a fun look that moves with your every rep, stride and jump.",
    size: "S",
    brand: "Nike",
    price: 50,
    stock: 6,
    categoria: "shirts"
  },
  {
    name: "Top Purelounge",
    image:"https://imgur.com/MfiSshK.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_728106-MLA50207402610_062022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_823149-MLA50207402612_062022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_775907-MLA50207402611_062022-F.webp",
    color: "Black",
    description:"Start the day with a solid foundation. We are talking about this adidas sports bra. When you put it on, the soft, ultra-stretchy fabric contours to your silhouette for a perfect fit. Comfort is the number one priority here, and you'll feel it all day thanks to its uncompromising design. Sealed seams create a smooth fit that's never uncomfortable, just supportive.",
    size: "M",
    brand: "Adidas",
    price: 45,
    stock: 10,
    categoria: "shirts"
  },
  {
    name: "Top Hero Strappy",
    image:"https://imgur.com/EQFs9dw.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_715210-MLA49169182100_022022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_817504-MLA49169182101_022022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_864318-MLA49169182104_022022-F.webp",
    color: "Orange",
    description:"Fashion and functionality in a single garment. This sports bra features a very chic design with slim straps at the back to keep you ventilated during your most intense workouts. Soft construction in sweat-wicking fabric includes mesh panels for a lightweight feel. Adjust the straps to your size and use it with or without the pads.",
    size: "S",
    brand: "Reebok",
    price: 38,
    stock: 26,
    categoria: "shirts"
  },
  {
    name: "Pantalon deportivo Hanna",
    image:"https://imgur.com/CX2ssK1.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_904743-MLA46246388147_062021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_644254-MLA46246399068_062021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_758980-MLA46246323520_062021-F.webp",
    color: "Grey",
    description:"Pants to make your training days super comfortable. It is made of ecological polyester. medium shot.",
    size: "M",
    brand: "Aerofit",
    price: 55,
    stock: 31,
    categoria: "pants"
  },
  {
    name: "Pantalon Oversize",
    image:"https://imgur.com/PAlcdkO.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_644171-MLA51215351550_082022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_736189-MLA50854243512_072022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_794231-MLA50854277071_072022-F.webp",
    color: "Grey",
    description:"Relaxed cut, with adjustable cuffs, made of cotton, high waist. Autumn-winter season. With pockets.",
    size: "M",
    brand: "Monena",
    price: 60,
    stock: 28,
    categoria: "pants"
  },
  {
    name: "Pantalon Karime",
    image:"https://imgur.com/LNvm9LX.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_668110-MLA50563417653_072022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_859077-MLA50563514461_072022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_643555-MLA50563381704_072022-F.webp",
    color: "Black",
    description:"Slipper type with straight cut. Straight shot, made of cotton. Autumn/winter collection.",
    size: "S",
    brand: "Luquear",
    price: 55,
    stock: 60,
    categoria: "pants"
  },
  {
    name: "Pantalon Yoga",
    image:"https://imgur.com/VjlSey9.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_963229-MLA50527092543_062022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_611629-MLA50527045575_062022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_849542-MLA50526989967_062022-F.webp",
    color: "Beige",
    description:"Slipper type with straight cut. Straight shot, made of cotton. Autumn/winter collection.",
    size: "M",
    brand: "Luquear",
    price: 50,
    stock: 11,
    categoria: "pants"
  },
  {
    name: "Pantalon Stripe Olivia",
    image:"https://imgur.com/0cTkFpq.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_979639-MLA49940665170_052022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_753828-MLA49940665174_052022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_994999-MLA49940665171_052022-F.webp",
    color: "Black",
    description:"It is designed for all those women who love fashion and have a great personality. Pants with side stripes, thanks to its elastic on the back it adapts to the entire body. Concealed tailor hook closure on the front.",
    size: "M",
    brand: "Desiderata",
    price: 65,
    stock: 7,
    categoria: "pants"
  },
  {
    name: "Pantalon Under Thunder",
    image:"https://imgur.com/nCNtOiP.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_646103-MLA49282877226_032022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_829957-MLA47972325590_102021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_638369-MLA47972320596_102021-F.webp",
    color: "Black",
    description:"Chupin model, winter lycra, front pockets with heat-sealed closure. Ankle closure. It is ideal for all types of training and urban use.",
    size: "L",
    brand: "Urban Luxury",
    price: 45,
    stock: 4,
    categoria: "pants"
  },
  {
    name: "Pantalon Runner",
    image:"https://imgur.com/NQkVprG.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_603629-MLA49615801572_042022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_758347-MLA49615790657_042022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_606666-MLA49615933026_042022-F.webp",
    color: "Black",
    description:"Chupin model. Front zip pockets. Reflex line details. Microfiber fabric. Ankle cuff. Ideal for all types of training and urban use",
    size: "M",
    brand: "Irun",
    price: 60,
    stock: 12,
    categoria: "pants"
  },
  {
    name: "Calza LongRun",
    image:"https://imgur.com/Ow7zeNS.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_813564-MLA41465293948_042020-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_813564-MLA41465293948_042020-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_868507-MLA41465304524_042020-F.webp",
    color: "Grey",
    description:"Beautiful leggings made of excellent quality premium lycra, super elastic, high waist, perfect fit, with reinforced seams!",
    size: "M",
    brand: "Wanda Store",
    price: 65,
    stock: 63,
    categoria: "pants"
  },
  {
    name: "Calza Frunce",
    image:"https://imgur.com/Hz5pFRt.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_665430-MLA49085571172_022022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_977920-MLA49085493766_022022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_639205-MLA49085471942_022022-F.webp",
    color: "Grey",
    description:"A simple recipe with its own personality to start the year well fed. The potato cake, a classic of Argentine households, is both a very popular dish and difficult to find in restaurants. Our first program of the year, dedicated to all who follow us.",
    size: "M",
    brand: "SH Sports",
    price: 50,
    stock: 8,
    categoria: "pants"
  },
  {
    name: "Pantalon Essentials 3",
    image:"https://imgur.com/BAvKA1z.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_663858-MLA45459302126_042021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_842804-MLA45459302132_042021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_609294-MLA45459302125_042021-F.webp",
    color: "Black",
    description:"You don't need to change a classic when it looks and feels as good as this one. These track-inspired pants feature French terry fabric that wraps you in comfort at all times. Unmistakable 3-Stripes down both legs and the adidas Badge of Sport on the hip make it clear you're part of the adidas family.",
    size: "M",
    brand: "Adidas",
    price: 95,
    stock: 125,
    categoria: "pants"
  },
  {
    name: "Pelota Futbol Penalty Campo Lider",
    image:"https://imgur.com/uGtgyKJ.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_856084-MLA48924092999_012022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_775496-MLA48924188494_012022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_967736-MLA48924148680_012022-F.webp",
    color: "",
    description:"100% original products with official manufacturer's warranty. Material: Polyurethane. Type of Surface: Natural grass.",
    size: "5",
    brand: "Penalty",
    price: 45,
    stock: 117,
    categoria: "accesories"
  },
  {
    name: "Pelota Puma Prestige F11",
    image:"https://imgur.com/PJSbPdj.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_824772-MLA50234230255_062022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_790180-MLA50234108806_062022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_835689-MLA50234118738_062022-F.webp",
    color: "Black",
    description:"100% original products with official manufacturer's warranty.Material: TPU.Surface Type: Lawn",
    size: "5",
    brand: "Puma",
    price: 38,
    stock: 3,
    categoria: "accesories"
  },
  {
    name: "Tubo Pelotas Tenis Head 3b",
    image:"https://imgur.com/Fsb0P2D.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_792494-MLA46933540533_072021-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_971783-MLA46933495956_072021-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_600671-MLA46933562301_072021-F.webp",
    color: "Unique",
    description:"100% original products with official manufacturer warranty.",
    size: "M",
    brand: "Head",
    price: 15,
    stock: 49,
    categoria: "accesories"
  },
  {
    name: "Pelota Basquet Spalding Varsity",
    image:"https://imgur.com/wY9T5kC.png",
    image1:"https://http2.mlstatic.com/D_NQ_NP_2X_820253-MLA50927188650_072022-F.webp",
    image2:"https://http2.mlstatic.com/D_NQ_NP_2X_633595-MLA50926550230_072022-F.webp",
    image3:"https://http2.mlstatic.com/D_NQ_NP_2X_902864-MLA50926575092_072022-F.webp",
    color: "Unique",
    description:"100% original products with official manufacturer warranty.",
    size: "M",
    brand: "Spalding",
    price: 150,
    stock: 49,
    categoria: "accesories"
  },
]);