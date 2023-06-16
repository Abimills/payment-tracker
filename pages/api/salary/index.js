// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../lib/db";
import Salary from "../model/Salary.js";

export default async function handler(req, res) {
  dbConnect();
  if (req.method === "GET") {
    if (req.query.id) {
      try {
        const salary = await Salary.findById(req.query.id);
        if (!salary) {
          res.status(404).json({
            success: false,
            message: "Salary information not found",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "fetched  salary on database",
            data: salary,
          });
        }
      } catch (error) {
        res.status(500).json({ message: "something went wrong", error });
      }
    }
    if (!req.query.time) {
      try {
        const allSalary = await Salary.find();
        if (!allSalary) {
          res.status(404).json({
            success: false,
            message: "All Salary information not found",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "fetched all salary on database",
            data: allSalary,
          });
        }
      } catch (error) {
        res.status(500).json({ message: "something went wrong", error });
      }
    } else {
      try {
        const salary = await Salary.findOne({ email: req.query.email });
        if (!salary || salary.length < 1) {
          res
            .status(404)
            .json({ success: false, message: "Sign in to get your salary" });
        } else if (salary) {
          const money = await Salary.find({
            today: req.query.time,
            email: req.query.email,
          });

          res.status(200).json({
            success: true,
            message: "successfully fetched",
            data: money,
          });
        }
      } catch (error) {
        res.status(500).json({
          error,
          message:
            "can not fetch salary, something went wrong please try again ",
        });
      }
    }
  }
  if (req.method === "POST") {
    try {
      const newSalary = await Salary.create(req.body);
      res.status(201).json({ success: true, data: newSalary });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  if (req.method === "PUT") {
    const { id } = req.query;
    console.log(req.query.id);
    console.log(req.body);
    if (id) {
      try {
        const salary = await Salary.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );
        // console.log(salary);
        res
          .status(200)
          .json({ success: true, message: "successful", data: salary });
      } catch (error) {
        res.status(500).json({ error });
      }
    }
  }
}
