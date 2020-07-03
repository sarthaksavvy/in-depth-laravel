<script>
  import { onMount } from "svelte";
  import { store } from "../../../store.js";
  import { notify } from "../../../Notify/store.js";
  import Axios from "axios";

  const PAYPAL = "paypal";
  let loading = false;

  onMount(async () => {
    paypal
      .Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: $store.course.finalPrice
                }
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            loading = true;
            Axios.post(`${process.env.API_URL}/payment/pay`, {
              service: PAYPAL,
              orderId: data.orderID,
              coupon: $store.coupon,
              amount: $store.course.finalPrice * 100,
              description: $store.course.title,
              item_id: $store.course.id,
              email: $store.user.email,
              name: $store.user.name
            })
              .then(res => {
                notify({
                  message:
                    "Congrats! you have this course now. Please check your email",
                  type: "success",
                  fly: {
                    y: 100,
                    duration: 1000
                  }
                });
                store.update(n => {
                  return { ...n, isPayModalOpen: false };
                });
                loading = false;
                window.location = "https://bitfumes.com/my-courses";
              })
              .catch(err => {
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
              });
          });
        }
      })
      .render("#paypal-button-container");
  });
</script>

<div class="w-full lg:w-10/12">
  <div class={`${loading ? '' : 'hidden'}`}>
    <i class="fas fa-circle-notch fa-spin" />
  </div>
  <div class={`${loading ? 'hidden' : ''}`}>
    <p class="font-bold text-gray-600 text-sm">
      This will take you to paypal website.
    </p>
    <div id="paypal-button-container" />
  </div>
</div>
