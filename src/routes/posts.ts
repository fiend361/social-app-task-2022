import express from "express";

import multer from "multer";
import Post from "../models/post";
import config from "../config/config";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./images/");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user_id = req.query.user
    if (user_id) {
        Post.find({ user: user_id })
            .exec()
            .then(posts => res.status(200).json(posts))
            .catch(err => res.status(500).json(err));
    } else {
        Post.find()
            .exec()
            .then(posts => res.status(200).json(posts))
            .catch(err => res.status(500).json(err));
    }
});

router.post("/", upload.single('image'), (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const post = new Post({
        text: req.body.text,
        image: `${config.server.hostname}/images/${req.file?.filename}`,
        user: req.body.user,
        createdAt: new Date()
    });

    post.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Post created",
                post: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Post not created",
                error: err
            });
        })
});

router.put("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    const updateOps = {text: req.body.text};
    Post.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
});


router.delete("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    Post.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
});  


export = router;