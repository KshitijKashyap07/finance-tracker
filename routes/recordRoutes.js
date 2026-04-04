const router = require("express").Router();
const ctrl = require("../controllers/recordController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.use(auth);

router.post("/", ctrl.createRecord);
router.get("/", ctrl.getRecords);
router.delete("/:id", ctrl.deleteRecord);
router.patch("/:id", role("admin"), ctrl.updateRecord);

module.exports = router;
