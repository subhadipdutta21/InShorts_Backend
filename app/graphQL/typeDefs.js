const { gql } = require("apollo-server");

module.exports = gql`
  # types -------------
  type News {
    _id: ID!
    desc: String!
    categories: [ID]
    newsDate: String!
    imageURL: String
    sourceURL: String!
    headLine: String!
    level: String!
  }

  type Category {
    _id: ID!
    categoryName: String!
  }

  # after user gets verified then only it can add bookmarks and pref
  type User {
    username: String!
    email: String!
    preferences: [userPref]
    verified: String!
    bookmarks: [ID]
  }

  type userPref {
    catID: ID!
    level: String! ## [all,major,no]
  }

  type fetchNewsResponse {
    data: [News]
    statusCode: Int!
    statusMsg: String!
  }

  type fetchCategoriesResponse {
    categories: [Category]
    statusCode: Int!
    statusMsg: String!
  }

  type createNewsResponse {
    _id: ID
    statusCode: Int!
    statusMsg: String!
  }

  type createUserResponse {
    statusCode: Int!
    statusMsg: String!
  }

  type verificationResponse {
    statusCode: Int!
    statusMsg: String!
  }

  # input types -------
  input fetchNewsInput {
    searchString: String
    categories: [ID]
    limit: Int
    offset: Int
  }

  input createNewsInput {
    desc: String!
    categories: [ID]
    newsDate: String
    imageURL: String
    sourceURL: String!
    headLine: String!
  }

  input createUserInput {
    email: String!
  }

  input verificationInput {
    userID: ID!
    code: Int!
  }

  # query -------------
  type Query {
    fetchNews(input: fetchNewsInput): fetchNewsResponse!
    fetchCategories: fetchCategoriesResponse!
  }
  # mutations ---------
  type Mutation {
    createNews(input: createNewsInput!): createNewsResponse!
    createUser(input: createUserInput!): createUserResponse!
    verifyUser(input: verificationInput!): verificationResponse!
  }
`;
