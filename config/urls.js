// export default {
//     githubAuth: {
//         GithubAuthScreenUrl: `https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.GITHUB_CLIENT}`,
//         getTokenUrl: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT}&client_secret=${process.env.GITHUB_TOKEN}`,
//         getUserinfoUrl: 'https://api.github.com/user',
//         getUserEmailUrl: 'https://api.github.com/user/emails',
//     },
// };

module.exports = {
  mongoConfigs: {
    URI: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.y5ruq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
};
