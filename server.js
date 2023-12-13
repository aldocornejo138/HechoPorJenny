const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OMEiVI1zNR8sZYDhbr9NCc7zuiymsX9kFPFLf73mubeF28mu2nrjFspwD70eBu5hRXDpCUUGhCZgOlGVDUnxjLT00i5i8Davv"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);

  const cartItems = req.body.cartItems;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).send("Invalid request: No items in the cart.");
  }

  const lineItems = cartItems.map((item) => ({
    price: item.id,
    quantity: item.quantity,
  }));

  console.log("lineItems", lineItems);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://hecho-por-jenny-aldocornejo138.vercel.app/success",
      cancel_url: "https://hecho-por-jenny-aldocornejo138.vercel.app/cancel",
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
