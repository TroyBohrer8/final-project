const { gql } = require('apollo-server-express');

// type Booking {
//   _id: ID
//   user: ID
//  date: timestamptz
// }


const typeDefs = gql`


  type Service {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type MenProduct {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type WomenProduct {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    menproducts(category: ID, name: String): [MenProduct]
    menproduct(_id: ID!): MenProduct
    womenproducts(category: ID, name: String): [WomenProduct]
    womenproduct(_id: ID!): WomenProduct
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    services(service: ID, name: String): [Service]
    service(_id: ID!): Service
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    updateMenProduct(_id: ID!, quantity: Int!): MenProduct
    updateWomenProduct(_id: ID!, quantity: Int!): WomenProduct
    login(email: String!, password: String!): Auth
    updateService(_id: ID!): Service
  }
`;

module.exports = typeDefs;
