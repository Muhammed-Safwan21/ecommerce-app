
import { protect } from "../middleware/authMiddleware.js";
import express from 'express'
import { createOrder, capturePayment } from "../controllers/paymentController.js"

const router = express.Router()

router.get("/order/:totalAmt",protect, createOrder)
router.post("/capture/:paymentId",protect,capturePayment)

export default router