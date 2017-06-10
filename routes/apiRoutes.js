import express from "express";

import articlesController from "../controllers/articlesController";

var router = new express.Router();

router.get("/articles/:id?", articlesController.index);
router.post("/articles", articlesController.create);
router.patch("/articles/:id", articlesController.update);
router.delete("/articles/:id", articlesController.destroy);

module.exports = router;
