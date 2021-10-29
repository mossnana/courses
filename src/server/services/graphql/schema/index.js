const typeDefs = `
  enum VendorType {
    B2B
    B2C
    B2G
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    vendorType: [VendorType]
  }

  type Shop {
    id: Int!
    title: String!
    vendors: [User]!
  }

  type RootQuery {
    getShops: [Shop]
  }

  input ShopInput {
    id: Int
    title: String
  }

  input VendorInput {
    id: Int!
    firstName: String!
    lastName: String!
    vendorType: [VendorType]
  }

  type RootMutation {
    addShop (
      shop: ShopInput!,
      user: VendorInput!
    ): [Shop]
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default typeDefs;
