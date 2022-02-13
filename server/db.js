// Define your dataset...
// Notice that the objects in the array each match the structure of the type we defined in our schema.
const mainCards = [
    {
        title: 'Gyms',
        image: 'gymhero',
    },
    {
        title: 'Cafes',
        image: 'cafehero',
    },
    {
        title: 'Waterfalls',
        image: 'waterfallhero',
    }
]

const animals = [
    {
        id: "1",
        image: "avenuefitnessgym",
        title: "Avenue Fitness Canggu",
        rating: 5.0,
        price: "23,322",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "avenuefitnessgym",
        category: "1"
    },
    {
        id: "2",
        image: "bodyfactorygym",
        title: "Body Factory Bali",
        price: "1,522",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "bodyfactorygym",
        category: "1"
    },
    {
        id: "3",
        image: "nirvanastrength",
        title: "Nirvana Strength",
        price: "101,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "nirvanastrength",
        category: "1"
    },
    {
        id: "4",
        image: "suryagym",
        title: "Surya Gym Bali",
        price: "47,775",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "suryagym",
        category: "1"
    },
    {
        id: "5",
        image: "wanderlustgym",
        title: "Wanderlust Canggu",
        price: "13,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "wanderlustgym",
        category: "1"
    },
    {
        id: "6",
        image: "cafevida",
        title: "Cafe Vida Bali",
        price: "42,453",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "cafevida",
        category: "2"
    },
    {
        id: "7",
        image: "lolascafe",
        title: "Lolas",
        price: "101,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "lolascafe",
        category: "2"
    },
    {
        id: "8",
        image: "pelatoncafe",
        title: "Pelaton Superfoods",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "pelatoncafe",
        category: "2"
    },
        {
        id: "9",
        image: "secretspotcafe",
        title: "The Secret Spot",
        price: "42,453",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "secretspotcafe",
        category: "2"
    },
    {
        id: "10",
        image: "urbanbitescafe",
        title: "Urban Bites Berawa",
        price: "101,432",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "urbanbitescafe",
        category: "2"
    },
    {
        id: "11",
        image: "banyumalatwinwaterfall",
        title: "Banyumala Twin Waterfall",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "banyumalatwinwaterfall",
        category: "4"
    },
        {
        id: "12",
        image: "dusunkuningwaterfall",
        title: "Dusun Kuning Waterfall",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "dusunkuningwaterfall",
        category: "4"
    },
        {
        id: "13",
        image: "gitgitwaterfall",
        title: "Gitgit Waterfall",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "gitgitwaterfall",
        category: "4"
    },
        {
        id: "14",
        image: "melastiwaterfall",
        title: "Melasti Waterfall",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "melastiwaterfall",
        category: "4"
    },
        {
        id: "15",
        image: "mundukwaterfall",
        title: "Munduk Waterfall",
        price: "179,731",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        stock: 14,
        onSale: false,
        slug: "mundukwaterfall",
        category: "4"
    },
        // {
    //     id: "8",
    //     image: "donkey",
    //     title: "This is the Voice Actor from the Dockey for Shrek.",
    //     price: "179,731",
    //     description: [
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     ],
    //     stock: 14,
    //     onSale: false,
    //     slug: "donkey",
    //     category: "4"
    // }
  ]

  const categories = [
    {
        id: "1",
        image: "gymhero",
        category: "gyms",
        slug: "gyms"
    },
    {
      id: "2",
      image: "balifood",
      category: "food",
      slug: "food"
    },
    {
      id: "3",
      image: "baliculture",
      category: "culture",
      slug: "culture"
    },
    {
      id: "4",
      image: "waterfallhero",
      category: "nature",
      slug: "nature"
    }
]

module.exports = {
    mainCards,
    animals,
    categories
}