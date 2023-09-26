import Orders from "../model/orderModel.js";
import User from "../model/user.js";

// View all orders (for Admin)

export const viewAllOrders = async (req, res) => {
  try {
    const viewOrder = await Orders.find()
      .populate("userId")
      .populate("products")
      .exec();

    res.status(200).json(viewOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// View users orders
export const userOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const currenUser = await User.findById(id);
    if (!currenUser) {
      return res.status(404).json("User not found");
    }
    const viewUserOrder = await Orders.find({ userId: currenUser._id });
    res.status(200).json(viewUserOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// View single order
export const singleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const viewSingleOrder = await Orders.findById(id)
      .populate("userId")
      .populate("products")
      .exec();
    res.status(200).json(viewSingleOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// creating new order
export const createOrder = async (req, res) => {
  try {
    const order = new Orders(req.body);
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// updating status of the order
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const statusUpdate = await Orders.findByIdAndUpdate(
      id,
      {
        $set: { status: req.body.status },
      },
      { new: true },
    );
    res.status(200).json(statusUpdate);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
