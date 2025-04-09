// export express
import express, { Router }  from "express";
import { formDataCreate } from "../controllers/adminController.js";



const router = express.Router()

// create routes
router.post('/createData', formDataCreate)


export default router;