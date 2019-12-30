"use strict";

const path = require("path");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectRedis = require("connect-redis");
const session = require("express-session");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const config = require("./config/environment");
const redis = require("./config/redis");

const app = express();

const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

//models
const User = require('./models/User');
const Customer = require('./models/Customer');
const Product = require('./models/Product');
const Category = require('./models/Category');
const Order = require('./models/Order');
const Payment = require('./models/Payment');

const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({
    typeDefs: importSchema('./server/graphql/schema.graphql'),
    resolvers,
    context: {
      User,
      Customer,
      Product,
      Category,
      Order,
      Payment
    }
  });
  
  server.applyMiddleware({ app });

if (config.env !== "development") {
  app.set("trust proxy", 1);
  app.use(morgan("tiny"));
} else {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(config.root, config.staticPath)));
app.use(
  session({
    name: "sid",
    secret: config.sessionKey,
    resave: true,
    saveUninitialized: true,
    store: new (connectRedis(session))({ client: redis }),
    cookie: {
      httpOnly: true,
      secure: config.env === "production",
      maxAge: 14 * 24 * 60 * 60 * 1000 // Expires in 14 days
    }
  })
);
app.use(passport.initialize());

module.exports = app;