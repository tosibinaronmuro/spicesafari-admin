import { useIncreaseCartMutation } from "./cartSlice";

// Inside an async function:
export async function increaseQuantt({ user, product }) {
  try {
    const [increaseQuant] = useIncreaseCartMutation({
      userId: user,
      productId: product,
    });

    await increaseQuant({ user, product }).unwrap();
    // Handle the data or result here
    console.log("Quantity increased:", increaseQuant);
  } catch (error) {
    // Handle errors here
    console.error("Error increasing quantity:", error);
  }
}
