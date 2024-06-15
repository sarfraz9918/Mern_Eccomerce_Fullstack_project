const express= require("express");
const router= express.Router();

const productController= require("../controllers/productController");


router.post("/productsave", productController.productSave);

router.get("/featureproduct", productController.fetureProductDisplay);
router.get("/topsellingroduct", productController.topsellingProductDisplay);
router.get("/trendingproduct", productController.trendingProductDisplay);

router.get("/totalproduct", productController.allProductDisplay);
router.get("/Menproduct", productController. MenProductDisplay);
router.get("/femaleproduct", productController. FemaleProductDisplay);
router.get("/babycollectionproduct", productController. babycollectionProductDisplay);
router.get("/customerorder", productController.showCustomerProduct);
router.put('/customerorder/:id',productController. customerOrder)
router.get("/updateproduct", productController.updateProduct);
router.post("/productdelete", productController. productdeleted);
router.post("/proedit", productController.ProductEdit);
router.post("/editDataSave", productController.stueditSave);
router.post("/productsearch", productController.productSearch);


module.exports=router;


