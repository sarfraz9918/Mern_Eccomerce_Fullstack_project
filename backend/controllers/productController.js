const productModel = require("../models/productModel");
const paymentModel = require("../models/payment");

const productSave = async (req, res) => {
    try {
        let { pname, pbrand, description, category, subcategory, tags, price, imgpath } = req.body;

        const Product = await productModel.create({
            name: pname,
            brand: pbrand,
            description: description,
            category: category,
            subcategory: subcategory,
            tags: tags,
            price: price,
            imagepath: imgpath
        });

        res.send("Data saved!!!");
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const fetureProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ tags: "feature" }).sort({ _id: -1 }).limit(5);
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching feature products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const topsellingProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ tags: "topselling" }).sort({ _id: -1 }).limit(5);
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching top selling products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const trendingProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ tags: "trending" }).sort({ _id: -1 }).limit(5);
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching trending products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const allProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find();
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching all products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const MenProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ category: "Male" });
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching men's products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const FemaleProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ category: "Female" });
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching female products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const babycollectionProductDisplay = async (req, res) => {
    try {
        const response = await productModel.find({ category: "Kids" });
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching baby collection products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const showCustomerProduct = async (req, res) => {
    try {
        const response = await paymentModel.find();
        res.status(200).json({ response });
    } catch (error) {
        console.error("Error fetching customer products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const customerOrder = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const order = await paymentModel.findByIdAndUpdate(id, { status }, { new: true });
        res.json(order);
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ message: "An error occurred while updating the status." });
    }
};


const    updateProduct= async (req, res) => {
    try {
        const response = await productModel.find();
        res.status(200).json({ product: response });
    } catch (error) {
        console.error("Error fetching all products:", error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};

const productdeleted = async (req, res) => {
    let o = req.body.id;
    try {
        const data = await productModel.findByIdAndDelete(o);
        if (data) {
            res.status(200).json({ msg: "Data successfully deleted" });
        } else {
            res.status(404).json({ msg: "Product not found" });
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const ProductEdit = (req, res, next) => {
    const { id } = req.body;

    productModel.findById(id)
        .then(data => {
            if (!data) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.json(data);
        })
        .catch(next);
};

  const stueditSave = (req, res) => {
    const { id, pname, pbrand , category,  price, } = req.body;

    productModel.findByIdAndUpdate(
        id,
        {
            name: pname,
            brand: pbrand,
            category: category,
            price: price,
        
        },
        
    )
    .then(updatedProduct => {
        
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.send("Data updated successfully!");
    })
    
};


const productSearch = async (req, res) => {
    try {
        const { pname } = req.body;
        const data = await productModel.find({ name: { $regex: pname, $options: "i" } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ msg: "Error searching data", error });
    }
};


module.exports = {
    productSave,
    fetureProductDisplay,
    topsellingProductDisplay,
    trendingProductDisplay,
    allProductDisplay,
    MenProductDisplay,
    FemaleProductDisplay,
    babycollectionProductDisplay,
    showCustomerProduct,
    customerOrder,
    updateProduct,
    productdeleted,
    ProductEdit,
    stueditSave,
    productSearch

};
