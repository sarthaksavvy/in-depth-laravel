<section class="text-center bg-gray-100 px-8 py-24 flex flex-wrap justify-center">
  <div class="my-5">
    <div>
      <div class="bg-purple-500 h-4 rounded-full relative" />
      <h2 class="text-4xl font-bold font-serif p-4">
        All Your questions, Answered here.
      </h2>
    </div>
  </div>
  <div class="lg:w-10/12 flex flex-wrap justify-between">
    {#each questions as question}
      <div class="py-4 lg:w-1/2 lg:px-10">
        <p class="italic text-2xl text-gray-900 py-2">
          {question.title}
        </p>
        <p class="text-gray-800 text-xl">
          {question.answer}
        </p>
      </div>
    {/each}
  </div>
</section>

<script>

  const questions = [
  {
    title:"Wait, why I can't search tutorials on youtube.",
    answer: 'Yeahh sure, you can do that and you can get many videos from this course also. But here you will get the full content with all the modules.'
  },
  {title:"Can I use paypal to purchase this course ?",
  answer:"Yes ofcourse, you can choose paypal as the payment method in the process of checkout."
}
]
</script>
