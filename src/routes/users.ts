import express from "express";
import mongoose from "mongoose";

import User from "../models/user";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    User.find()
        .exec()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err));
});

router.get("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    // res.send(req.params)
    User.findById(id)
        .exec()
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ message: "User not found" })
            }
        })
        .catch(err => res.status(404).json({ message: "User not found" }))
});

router.post("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        createdAt: new Date()
    });

    user.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "User created",
                user: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "User not created",
                error: err
            });
        })
});

router.patch("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id;
    User.updateOne({ _id: id }, { $set: req.body })
        .exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err))
});

router.put("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    const updateOps: {[index: string]:any} = {}
    for (const [key, value] of Object.entries(req.body)) {
        updateOps[key] = value
    }
    User.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
});

router.delete("/:id", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id = req.params.id
    User.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => res.status(500).json(err))
});  


export = router;