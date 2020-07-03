<script>
  const items = [
    {
      title: "Acquaintance with the laravel",
      details:
        "How to get started with laravel and understand its directory structure. Where is various configurations are available in laravel and how laravel handle so many services from just one .env file."
    },
    {
      title: "What are MVC",
      details:
        "You will learn about MVC (Model-View-Controller) and how it is implemented in Laravel. Once you get MVC then it will be very easy to use laravel for any project."
    },
    {
      title: "How to upload image/file",
      details:
        "Every user has avatar images, so we will write necessary code to upload image, handle it on laravel and save it. Also if user replace avatar then delete old photo."
    },
    {
      title: "Project 1 - Advanced Todo App using Livewire",
      details:
        "I know you have made many todo lists but this one is different, we will have steps for every todo list and using laravel livewire to make 'add step' task dynamic and user friendly. Also write user->todo-list eloquent relationship to create todo item for authenticated user only."
    },
    {
      title: "Project 2 - URL shortener using Vuejs",
      details:
        "Create an application using laravel to shorten big url into short url. We will also track the number of clicks and area from where short url is clicked. Using integrated Vuejs we will create Single Page Application to hit laravel endpoints."
    },
    {
      title: "Project 3 - Eventile - An Event Ticket App API",
      details:
        "Laravel can handle API endpoints to be used by various external applications, let's create a simple project which handle request from outside world and manage everything. Sending Email, Integrating Stripe Payment gateway and Authentication using Sanctum are the best part of this project. Using Nuxtjs we create a saperate Single Page Application(SPA) to sell tickets and notify user via Laravel Notification."
    },
    {
      title: "Project 4 - Test Driven Blog",
      details:
        "Laravel makes testing super easy and if you don't know testing then you are not a good developer. Creating a blog with TDD (Test Driven Development) approach. How to think about writing tests. How testing help you to refactor code and why testing boost up your confidence."
    },
    {
      title: "Project 5 - Support Ticket system with Laravel Livewire",
      details:
        "Creating a Single Page Application without writing any javascript that is using Laravel Livewire. Real Time Validation, Events, Pagination and lots of fun part."
    },
    {
      title: "Deploying every project on server",
      details:
        'Untill project is not live, developer can not take a deep breath. So using Digital Ocean and AWS we will upload/Deploy all projects and connect with real domain. First we see how to install manually using Digital Ocean server and then use <a href="https://forge.laravel.com" class="text-blue-600" target="_blank"> Laravel Forge</a> to make our life easier.'
    }
    // {
    //   title: "Laravel Interview Questions",
    //   details:
    //     'I know if you are investing your time and money for this course, you must want to be prepared for getting a good job after this course. So I have decided to dedicate a modules just for this. I answer various common php and laravel quesions like <a href="https://laravel.com/docs/7.x/facades" class="text-blue-600" target="_blank">laravel facades </a>, <a href="https://laravel.com/docs/7.x/providers" class="text-blue-600" target="_blank">service Provider</a>, <a href="https://en.wikipedia.org/wiki/SOLID" class="text-blue-600" target="_blank">SOLID principle</a> and many more.'
    // },
    // {
    //   title: "Social media presence and Job preparation",
    //   details:
    //     "Continuing last module to serve you better content, I can help you to make your github profile better and incresing your social media presence. Also I will share some tips to create your resume stands out and various ways and portals to apply for laravel developer jobs."
    // }
  ];
</script>

<section class="px-8 py-24 flex flex-wrap justify-center">
  <div class="py-10" id="what-your-will-learn">
    <div class="bg-orange-500 h-4 rounded-full relative" />
    <h2 class="text-4xl text-center font-serif font-bold md:text-5xl">
      What you will learn
    </h2>
  </div>
  <div class="lg:flex justify-center lg:text-center">
    <h3 class="text-xl text-gray-900 lg:w-3/4">
      Here are just a few topics we will be covering in this course. Everything
      is described considering students as a beginner, so you can skip or fast
      forward some videos if you want. For CSS designing we will use
      <a href="https://tailwindcss.com/" class="text-blue-600" target="_blank">
        tailwindcss
      </a>
      for entire course.
    </h3>
  </div>
  <div class="flex flex-wrap lg:w-10/12 justify-around">
    {#each items as item}
      <div class="py-5 lg:w-1/2 lg:px-10">
        <p class="italic text-gray-800 font-semibold text-2xl py-3">
          {item.title}
        </p>
        <p class="text-xl text-gray-700">
          {@html item.details}
        </p>
      </div>
    {/each}
  </div>
</section>
