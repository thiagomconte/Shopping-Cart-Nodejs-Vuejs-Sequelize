const router = require("express").Router();
const Comment = require("../Models/Comment");
const User = require("../Models/User");


//!POSTAR COMENTARIO
router.post("/", async (req, res) => {
    try {
        let { UserId, ProductId, content } = req.body;

        const comment = await Comment.create({
            content,
            UserId,
            ProductId,
        });
        res.json(comment);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
