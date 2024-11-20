export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'), 
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burgerIcon.png'), 
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/italianIcon.png'), 
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/chineseIcon.png'), // Updated with a unique image
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodlesIcon.png'), // Updated with a unique image
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizzaIcon.png'), // Updated with a unique image
    },
    
];
export const featured = [
    {
        id: 1,
        name: 'Papa Johns  Pizza',
        image: require('../assets/images/pizzaIcon.png'),
        description: 'Hot and spicy pizzas',
        lng: 38.2145602,
        lat: -85.5324269,
        address: '434 Second Street',
        stars: 4,
        reviews: '4.4k',
        category: 'Fast Food',
        dishes: [
            {
                id: 1,
                name: 'Papa Johns pizza',
                description: 'Cheesy garlic pizza',
                price: 10,
                stars: 4,
                reviews: 4,
                image: require('../assets/images/1.jpg'),
                category: 'Italian',
                location: 'Beachside, Hambantota',
              },
              {
                id: 2,
                name: 'Pizza',
                description: 'Cheesy garlic pizza',
                price: 10,
                stars: 4.8,
                reviews: 4.8,
                image: require('../assets/images/1.jpg'),
                category: 'Italian',
                location: 'Ella, Sri Lanka',
              }
        ],
    },
    {
        id: 2,
        name: 'Pepperoni  Pizza ',
        image: require('../assets/images/burgerIcon.png'),
        description: 'Home of the Whopper',
        lng: 40.712776,
        lat: -74.005974,
        address: '123 Broadway',
        stars: 5,
        reviews: '3.8k',
        category: 'Fast Food',
        dishes: [
            {
                id: 1,
                name: 'Pepperoni Pizza',
                description: 'Cheesy pizza topped with spicy pepperoni slices',
                price: 18,
                stars: 4.9,
                reviews: 150,
                image: require('../assets/images/1.jpg'),
                category: 'Pizza',
                location: 'Kandy, Sri Lanka',
              },
              {
                id: 2,
                name: 'Margherita Pizza',
                description: 'Classic Italian pizza with fresh tomatoes, mozzarella, and basil',
                price: 15,
                stars: 4.8,
                reviews: 120,
                image: require('../assets/images/1.jpg'),
                category: 'Pizza',
                location: 'Negombo, Sri Lanka',
              }
        ],
    },
    {
        id: 3,
        name: 'Veggie Pizza',
        image: require('../assets/images/burgerIcon.png'),
        description: 'The ultimate destination for burger lovers',
        lng: 34.052235,
        lat: -118.243683,
        address: '456 Sunset Boulevard, Los Angeles',
        stars: 4.8,
        reviews: '5.2k',
        category: 'Fast Food',
        dishes: [
            {
                id: 1,
                name: 'Veggie Supreme Pizza',
                description: 'Loaded with bell peppers, onions, olives, and mushrooms',
                price: 16,
                stars: 4.7,
                reviews: 100,
                image: require('../assets/images/1.jpg'),
                category: 'Pizza',
                location: 'Colombo, Sri Lanka',  
                
                  
                  },
              {
                id: 2,
                name: 'BBQ Chicken Pizza',
                description: 'Grilled chicken with tangy BBQ sauce and melted cheese',
                price: 20,
                stars: 4.6,
                reviews: 110,
                category: 'Pizza',
                location: 'Galle, Sri Lanka',
                image: require('../assets/images/1.jpg'),
              }
            
        ],
    }
    
];