<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Home from "./Pages/Home.svelte";
  import ThankYou from "./Pages/ThankYou.svelte";
  import Notify from "./Notify/NotifyComponent.svelte";
  import { Router, Link, Route } from "svelte-routing";
  const PAYPAL_ID = process.env.PAYPAL_ID;
  export let url = "";
</script>

<main>
  <Notify />
  <Router {url}>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/thank-you">
      <ThankYou />
    </Route>
  </Router>
  <script src="https://checkout.razorpay.com/v1/checkout.js">

  </script>
  <script src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_ID}`}>

  </script>
</main>
