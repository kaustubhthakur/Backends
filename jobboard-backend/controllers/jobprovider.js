const Job = require('../models/Job')
const createJob = async (req, res, next) => {
    const newjob = new Job(req.body);

    try {
        const savejob = await newjob.save();
        res.status(200).json(savejob);
    } catch (error) {
        next(error);
    }
}
const updateJob = async (req, res, next) => {
    try {
        const updatedjob = await Job.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedjob);
    } catch (err) {
        next(err);
    }
}
const deleteJob = async (req, res, next) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
}

module.exports = { createJob, updateJob, deleteJob, }