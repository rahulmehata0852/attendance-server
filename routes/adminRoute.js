const { getBatch, addBatch, deleteBatch, UpdateBatch, getstudents, addstudents, deletestudents, updatestudents, getAttendance, addattendace, deleteattendace, updateattendace, getstudentsByBatch } = require("../controlle/adminController")

const router = require("express").Router()



router
    .get("/batch", getBatch)
    .post("/batch-add", addBatch)
    .delete("/batch-delete/:batchId", deleteBatch)
    .put("/batch-update/:batchId", UpdateBatch)

    .get("/students", getstudents)
    .get("/student/:batchId", getstudentsByBatch)
    .post("/student-add", addstudents)
    .delete("/student-delete/:studentId", deletestudents)
    .put("/student-update/:studentId", updatestudents)


    .get("/attendance/:studId", getAttendance)
    .post("/attendance-add", addattendace)
    .delete("/attendance-delete", deleteattendace)
    .put("/attendance-update/:attendaceId", updateattendace)





module.exports = router