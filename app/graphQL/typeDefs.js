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
  }

  type Category {
    _id: ID!
    categoryName: String!
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
  # query -------------
  type Query {
    fetchNews(input: fetchNewsInput): fetchNewsResponse!
    fetchCategories: fetchCategoriesResponse!
  }
  # mutations ---------
  type Mutation {
    createNews(input: createNewsInput!): createNewsResponse!
  }
`;
