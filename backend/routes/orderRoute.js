import exppres from 'express';
import {placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus,verifyRazorpay} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = exppres.Router();

orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

orderRouter.post('/place',authUser, placeOrder);
orderRouter.post('/razorpay',authUser, placeOrderRazorpay);
orderRouter.post('/userorders',authUser, userOrders);

orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay);

export default orderRouter;
