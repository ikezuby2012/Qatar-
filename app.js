const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const compression = require("compression");

//routes
const userRouter = require("./routes/userRoute.js");
const utilRouter = require("./routes/utilRoute");
const errorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const walletRouter = require("./routes/walletRoute");
const transactionRouter = require("./routes/transactionRoute");
const newsletterRouter = require("./routes/newsletterRoute");

const app = express();

//<-- serving static files
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") console.log(process.memoryUsage());

//cors
app.use(cors());
//<-- parsing data to the backend
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
if (process.env.NODE_ENV === "production") {
// data sanitization against noSql query injection
app.use(mongoSanitize());
//<-- data sanitisation against xss attacks
app.use(xss());
}



app.use(compression());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
//<-- limit request from the same api
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour"
});
app.use("/api", limiter);

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/util", utilRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/wallet", walletRouter);
app.use("/api/v1/newsletter", newsletterRouter);

//ping if api is working
app.get("/", (req, res) => {
    res.send("server is working!");
});

// const logs = [];
// app.get("/heap", (req, res) => {
//     logs.push({ url: req.url, date: new Date() });
//     res.send(JSON.stringify(logs));
// })

//ROUTE HANDLER NOT SPECIFIED 
app.all("*", (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;