const router = require("express").Router();
const Product = require("../Models/Product");
const Comment = require("../Models/Comment");
const User = require("../Models/User");
const Auth = require("../Authorization/Auth");


//!CRIAR PRODUTO
router.post("/", Auth, async (req, res) => {
    try {
        let { name, description, price, photo } = req.body;

        if (!name || !description || !price || !photo) {
            return res.status(400).json("Preencha todos os campos");
        }
        const product = await Product.create({
            name,
            description,
            price,
            photo,
            UserId: req.decoded.id,
        });
        res.json(product);
    } catch (error) {
        res.json(error);
    }
});

router.get("/", async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(400).json(error)
    }
})

//!EDITAR PRODUTO
router.put("/:slug", async (req, res) => {
    try {
        let { name, description, price, photo } = req.body;

        const product = await Product.findOne({
            where: { slug: req.params.slug },
        });

        if (!product) return res.status(404).json("Produto não foi encontrado");

        product.name = name;
        product.description = description;
        product.price = price;
        product.photo = photo;

        const productUpdated = await product.save();
        res.json(productUpdated);
    } catch (error) {
        res.status(400).json(error);
    }
});


//!BUSCAR PRODUTO ESPECIFICO
router.get("/:slug", async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                slug: req.params.slug,
            },
            include: [{ model: Comment, include: [{model: User, attributes: ['name']}] }],
        });
        res.json(product);
    } catch (error) {
        res.status(400).json(error);
    }
});


//!DELETAR PRODUTO
router.delete("/:id", async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.json("Produto deletado com sucesso");
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
