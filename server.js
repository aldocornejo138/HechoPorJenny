//sk_test_51OMEiVI1zNR8sZYDhbr9NCc7zuiymsX9kFPFLf73mubeF28mu2nrjFspwD70eBu5hRXDpCUUGhCZgOlGVDUnxjLT00i5i8Davv;

//Product 1: price_1OMEvyI1zNR8sZYDu7Iv8yqk
//Product 2: price_1OMEy0I1zNR8sZYD2Przz5fx

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

  const lineItems = cartItems.map((item) => {
    return {
      price: item.id, // Assuming item.price contains the ID of your Stripe price
      quantity: item.quantity,
    };
  });

  console.log("lineItems", lineItems);

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://hecho-por-jenny-aldocornejo138.vercel.app/success",
    cancel_url: "https://hecho-por-jenny-aldocornejo138.vercel.app/cancel",
  });

  res.json({
    url: session.url,
  });
});

app.listen(4000, () => console.log("Listening on port 4000!"));
