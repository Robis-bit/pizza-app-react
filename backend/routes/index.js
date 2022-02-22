




const express=require('express')
const router=express.Router()
const registerController=require('../controllers/auth/registerController')
const loginController=require('../controllers/auth/loginController')
const userController=require('../controllers/auth/userController')
const refreshController=require('../controllers/auth/refreshController')
const productController=require('../controllers/productController')
const auth=require('../middlewares/auth')
const admin=require('../middlewares/admin')


router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);


router.post('/products/cart-items', productController.getProducts);

router.post('/products', [auth, admin], productController.store);
router.put('/products/:id', [auth, admin], productController.update);
router.delete('/products/:id', [auth, admin], productController.destroy);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);



module.exports= router;