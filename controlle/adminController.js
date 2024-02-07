const asynHandler = require("express-async-handler")
const Batch = require("../models/Batch")
const Attendance = require("../models/Attendance")
const Students = require("../models/Students")



// Batch --------------------------------------------..........----------

exports.getBatch = asynHandler(async (req, res) => {
    const result = await Batch.find()
    res.status(200).json({ message: "Batch fetch succes", result })
})

exports.addBatch = asynHandler(async (req, res) => {
    await Batch.create(req.body)
    res.status(201).json({ message: "Batch add succes" })
})

exports.UpdateBatch = asynHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndUpdate(batchId, req.body, { runValidators: true })
    res.status(200).json({ message: "Batch Update succes" })
})

exports.deleteBatch = asynHandler(async (req, res) => {
    const { batchId } = req.params
    await Batch.findByIdAndDelete(batchId)
    res.status(200).json({ message: "Batch delete succes" })
})


// Students ---------------------------------------------


exports.getstudents = asynHandler(async (req, res) => {
    const result = await Students.find()
    res.status(200).json({ message: "student fetch succes", result })
})

exports.getstudentsByBatch = asynHandler(async (req, res) => {
    const { batchId } = req.params
    const result = await Students.find({ batchId })
    res.status(200).json({ message: "Batch wise student fetch succes", result })
})

exports.addstudents = asynHandler(async (req, res) => {
    await Students.create(req.body)
    res.status(201).json({ message: "student add succes" })
})

exports.updatestudents = asynHandler(async (req, res) => {
    const { studentId } = req.params
    await Students.findByIdAndUpdate(studentId, req.body, { runValidators: true })
    res.status(200).json({ message: "student Update succes" })
})

exports.deletestudents = asynHandler(async (req, res) => {
    const { studentId } = req.params
    await Students.findByIdAndDelete(studentId)
    res.status(200).json({ message: "student delete succes" })
})





// Attendance---------------------------------------------------


exports.getAttendance = asynHandler(async (req, res) => {
    const { studId } = req.params
    const result = await Attendance.find({ studId })
    res.status(200).json({ message: "attendace fetch succes", result })
})

exports.addattendace = asynHandler(async (req, res) => {
    const x = req.body.map(item => {
        return {
            studId: item.studId,
            date: item.date,
            isPresent: item.isPresent
        }
    })

    const result = await Attendance.findOne({ studId: x[0].studId, date: x[0].date })

    if (result) {
        return res.status(400).json({ message: "Duplicate attendace" })
    }

    await Attendance.create(x)
    res.status(201).json({ message: "attendace add succes" })
})

exports.updateattendace = asynHandler(async (req, res) => {
    const { attendaceId } = req.params
    await Attendance.findByIdAndUpdate(attendaceId, req.body, { runValidators: true })
    res.status(200).json({ message: "attendace Update succes" })
})

exports.deleteattendace = asynHandler(async (req, res) => {
    // const { attendaceId } = req.params
    await Attendance.deleteMany()
    res.status(200).json({ message: "attendace delete succes" })
})




