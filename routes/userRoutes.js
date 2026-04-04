const router = require("express").Router();
const ctrl = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.use(auth, role("admin"));

router.get("/", ctrl.getUsers);
router.post("/", ctrl.createUser);
router.patch("/:id", ctrl.updateUser);
router.delete("/:id", ctrl.deleteUser);

module.exports = router;
