const CoinMarketCap = require("coinmarketcap-api");

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const apiKey = process.env.coinMarketApiKey;

exports.fetchData = catchAsync(async (req, res, next) => {
    const client = new CoinMarketCap(apiKey);
    const data = await client.getTickers({ limit: 100 });


    if (!data) {
        return next(new AppError("something went wrong", 404))
    }
    res.status(200).json({
        status: "success",
        data
    })
});
