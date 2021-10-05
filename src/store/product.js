const initialState = {
    categories: [
      {
        displayName: 'FOOD',
        normalizedName: 'food',
        description: 'FOOD Category'
      },
      {
        displayName: 'ELECTRONICS',
        normalizedName: 'elecronics',
        description: 'Elecronics Category'
      },
      {
        displayName: 'VIDEO GAMES',
        normalizedName: 'video games',
        description: 'Video Games Category'
      },
    ],
    product:[
      {
        category:'FOOD',
        name:'food',
        description:'Pasta',
        price:"25$",
        inventoryCount:'Infinit',
        image:'https://www.foodnetwork.com/content/dam/images/food/video/0/01/015/0154/0154994.jpg'
      },
      {
        category:'FOOD',
        name:'food',
        description:'Pizza',
        price:"2.5$",
        inventoryCount:'500',
        image:'https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg'
      },
      {
        category:'FOOD',
        name:'food',
        description:'Burger',
        price:"2.5$",
        inventoryCount:'1000',
        image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-951452,resizemode-1,msid-66325015/industry/cons-products/food/burger-king-leaves-starbucks-behind/1.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'Playstation',
        price:"900$",
        inventoryCount:'100',
        image:'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$facebook$'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'phone',
        price:"1500$",
        inventoryCount:'50',
        image:'https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-mini/-728x314/header-thumb1.jpg'
      },
      {
        category:'ELECTRONICS',
        name:'elecronics',
        description:'LabTop',
        price:"1000$",
        inventoryCount:'25',
        image:'https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_SL1000_.jpg'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'video games',
        price:"40$",
        inventoryCount:'Infinit',
        image:'https://cdn-cf.gamivo.com/image_original.jpg?f=119652&n=590ef020-fe2f-11e9-ba7b-1d746b5ec20a.jpg&h=0d24fbe66609206cd15bb856d8452fee'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'Dota 2',
        price:"For Free",
        inventoryCount:'Infinit',
        image:'https://i2.wp.com/laptopmedia.com/wp-content/uploads/2020/11/1599845493_dota-2-russia.png?ssl=1'
      },
      {
        category:'VIDEO GAMES',
        name:'video games',
        description:'Red Dead Redemption',
        price:"60$",
        inventoryCount:'Infinit',
        image:'https://i.ytimg.com/vi/F63h3v9QV7w/maxresdefault.jpg'
      }
      
    ],
    activeCategory: '',
  }
  
  
  function productsReducer(state = initialState, action) {
  
    const { type, payload } = action;
  
    switch (type) {
      case 'ACTIVE_CATEGORY':
        return { ...state, activeCategory: payload }
        default:
          return state;
    };
  }
  
  
  // action
  
  export const selectCategory = (category) => {
    return {
      type: 'ACTIVE_CATEGORY',
      payload: category
    }
  };
  
  
  
  export default productsReducer;