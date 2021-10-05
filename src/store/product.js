const initialState = {
  product:[
    {
      category:'FOOD',
      name:'Salad',
      description:'Diet food ',
      price:"30$",
      inventoryCount:100,
      image:'https://images.squarespace-cdn.com/content/v1/5696dc2025981d4c9684c059/1454656683909-BW1L5AF0TZSH42Q1GWAK/IMG_9085.JPG?format=1500w'
    },
    {
      category:'FOOD',
      name:'Sea food',
      description:'sea food',
      price:"55$",
      inventoryCount:400,
      image:'https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg'
    },
    {
      category:'FOOD',
      name:'Burger',
      description:'BEEF Burger',
      price:"2.5$",
      inventoryCount:1000,
      image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-951452,resizemode-1,msid-66325015/industry/cons-products/food/burger-king-leaves-starbucks-behind/1.jpg'
    },
    {
      category:'ELECTRONICS',
      name:'Playstion',
      description:'Playstaion',
      price:"1000$",
      inventoryCount:100,
      image:'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$facebook$'
    },
    {
      category:'ELECTRONICS',
      name:'Gaming PC',
      description:'Super Fast PC',
      price:"1500$",
      inventoryCount:50,
      image:'https://cdn.mos.cms.futurecdn.net/U5Fdom8yDwVcEivFjiqajF.jpg'
    },
    {
      category:'ELECTRONICS',
      name:'Phones',
      description:'samsung A5',
      price:"600$",
      inventoryCount:25,
      image:'https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-mini/-728x314/header-thumb1.jpg'
    },
    {
      category:'VIDEO GAMES',
      name:'Super Mario',
      description:'RPG Game',
      price:"40$",
      inventoryCount:9999,
      image:'https://i.guim.co.uk/img/media/2771abfff9ed9216379acdaa0daac49844544746/0_0_2500_1500/master/2500.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=084afaf214fbf7e8024fee29baefa945'
    },
    {
      category:'VIDEO GAMES',
      name:'Dota 2',
      description:'Multiplayer Game 5 vs 5',
      price:"For Free",
      inventoryCount:9999,
      image:'https://i2.wp.com/laptopmedia.com/wp-content/uploads/2020/11/1599845493_dota-2-russia.png?ssl=1'
    },
    {
      category:'VIDEO GAMES',
      name:'Red Dead Redemption',
      description:'Awsome Reality Game',
      price:"60$",
      inventoryCount:99999,
      image:'https://i.ytimg.com/vi/F63h3v9QV7w/maxresdefault.jpg'
    }
    
  ],
  activeProduct: [],
}


const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
     state.activeProduct=state.product.filter(item=>{
       return (payload===item.category ? item.category:null)
     })
     console.log(state.activeProduct);
      return state;


    case "ADDPRODUCT":
      state.activeProduct = state.activeProduct.map((item) => {
        if (item.name === payload.name) {
          if (item.inventoryCount > 0) {
            item.inventoryCount = item.inventoryCount - 1;
          }
          return item;
        }
        return item;
      });
      return {...state};

    case "DELETE":
      state.activeProduct = state.activeProduct.map((item) => {
        if (item.name === payload.product.name) {
          item.inventoryCount = item.inventoryCount + 1;

          return item;
        }
        return item;
      });
      return {...state};

    default:
      return state;
  }
};




export default productsReducer;