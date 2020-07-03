<script>
  import { store } from "../../../store.js";
  import { notify } from "../../../Notify/store.js";
  import axios from "axios";
  let loading = false;
  const RAZORPAY = "razorpay";

  const options = {
    key: process.env.RAZORPAY_KEY,
    name: "Bitfumes",
    prefill: {
      email: $store.user.email
    },
    image: "/static/images/logo-48.gif",
    theme: {
      color: "#1D2581"
    }
  };

  function pay() {
    loading = true;
    axios
      .post(`${process.env.API_URL}/payment/pay`, {
        service: RAZORPAY,
        amount: $store.course.finalPrice * 100,
        currency: "USD",
        payment_capture: 1
      })
      .then(res => {
        var rzp1 = new Razorpay({
          ...options,
          amount: $store.course.finalPrice * 100,
          service: RAZORPAY,
          currency: "USD",
          receipt: 1,
          order_id: res.data.id,
          description: `Pay for ${$store.course.title} course`,
          handler: res => handleVerify(res)
        });
        rzp1.open();
      })
      .catch(err => {
        loading = false;
        notify({
          message:
            "There is some issue, please write us at support@bitfumes.com",
          type: "error",
          fly: {
            y: 100,
            duration: 1000
          }
        });
      });
  }

  function handleVerify(res) {
    let data = {
      ...res,
      service: RAZORPAY,
      amount: $store.course.finalPrice * 100,
      coupon: $store.course.coupon,
      description: `Pay for ${$store.course.title} course`,
      item_id: $store.course.id,
      email: $store.user.email,
      name: $store.user.name
    };

    try {
      const res = axios.post(`${process.env.API_URL}/payment/verify`, data);
      notify({
        message: "Congrats! you have this course now. Please check your email",
        type: "success",
        fly: {
          y: 100,
          duration: 1000
        }
      });
      store.update(n => {
        return { ...n, isPayModalOpen: false };
      });
      window.location = "https://bitfumes.com/my-courses";
      loading = false;
    } catch (error) {
      notify({
        message:
          "There is some problem, please contact us at support@bitfumes.com",
        type: "error",
        fly: {
          y: 100,
          duration: 1000
        }
      });
      loading = false;
    }
  }
</script>

<div class="w-full lg:w-10/12">
  <p class="font-bold text-gray-600 text-sm">Just click and go.</p>
  <button
    class="w-full mt-10 py-3 bg-white rounded-lg text-xl border-2
    border-teal-600 shadow hover:shadow-xl"
    on:click={pay}>
    {#if loading}
      <span class="fas fa-circle-notch fa-spin text-gray-500" />
    {:else}
      <span>Place Order</span>
    {/if}
  </button>
</div>
