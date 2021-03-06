const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.deleteOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.Id);

        if (!doc) {
            return next(new AppError("No document found with that Id", 404));
        }
        res.status(204).json({
            status: "successful",
            data: null
        });
    });

exports.updateOne = Model => catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!doc) {
            return next(new AppError("No document found with that Id", 404));
        }
        res.status(201).json({
            status: "successful",
            data: doc
        });
});

exports.createOne = Model => catchAsync( async (req, res, next) => {
   const doc = await Model.create(req.body);

    if(!doc) {
        return next(new AppError("No document found with that Id", 404));
    }
   res.status(201).json({
       status: "success",
       data: doc
   })
});

exports.getOne = (Model, popOptions) => catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc){
        return next(new AppError("no document found with that Id", 404))
    }
    res.status(200).json({
        status: "success",
        data: doc
    })
});
