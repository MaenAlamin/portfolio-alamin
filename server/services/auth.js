const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const namespace = "http://localhost:3000/";

//MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: "https://dev-26-h3fgi.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: "5ggUeuhKSzUnypxpI0lcPHumpGOu8X5l",
  issuer: "https://dev-26-h3fgi.eu.auth0.com/",
  algorithms: ["RS256"]
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[namespace + "role"] === role) {
    next();
  } else {
    return res
      .status(401)
      .send({ title: "Not Authorized", detail: "You are not authorized to view this data" });
  }
};
