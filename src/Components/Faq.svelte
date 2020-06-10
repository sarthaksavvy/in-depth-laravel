<script>
  const questions = [
    {
      title: "Wait, why I can't search tutorials on youtube.",
      answer:
        "Yeahh sure, you can do that and you can get many videos from this course also. But here you will get the full content with all the modules."
    },
    {
      title: "What I can get after this course.",
      answer:
        "Once you complete the course you will get the <strong>Certificate of Completion</strong> so that you can easily share your accomplishment with your friends, relatives, co-workers and potential employers or can shared on Facebook, Twitter, and LinkedIn directly from Bitfumes"
    },
    {
      title: "Will there be updates to the material ?",
      answer:
        "Sure! with every release of laravel, I plan to review and update the course and keep it up to date and having the code in sync with is the best way the course should be taught."
    },
    {
      title: "What if I don't like this course ?",
      answer:
        "I have created this course with full passion and enthusiasm to help other not just to make money. You can simply email me with proper reason and I will give full refund to you."
    },
    {
      title: "Can I use paypal to purchase this course ?",
      answer:
        "Yes ofcourse, you can choose paypal as the payment method in checkout step."
    },
    {
      title: "You didn't answer my question...",
      answer:
        "Email me at sarthak@bitfumes.com and I'll do my best to answer your questions. Or you can tweet your question directly to me."
    }
  ];
</script>

<section
  class="text-center bg-gray-100 px-8 py-24 flex flex-wrap justify-center
  relative">
  <div class="my-5">
    <div>
      <div class="bg-purple-500 h-4 rounded-full relative" />
      <h2 class="text-4xl font-bold font-serif p-4 md:text-5xl">
        All Your questions, Answered here.
      </h2>
    </div>
  </div>
  <div class="lg:w-10/12 flex flex-wrap justify-between">
    {#each questions as question}
      <div class="py-4 lg:w-1/2 lg:px-10">
        <p class="italic text-2xl font-semibold text-gray-900 py-2">
          {question.title}
        </p>
        <p class="text-gray-800 text-xl">
          {@html question.answer}
        </p>
      </div>
    {/each}
  </div>
</section>
