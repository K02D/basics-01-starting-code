const app = Vue.createApp({
  // data is a function
  // data(){} is shorthand for data: function() {}
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      courseGoalA: "Master Vue and build amazing apps!",
      courseGoalB: "Learn Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // 'this' refers to the global Vue instance that has the properties in data()
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

// connect Vue to the user-goal element in our HTML DOM
app.mount("#user-goal");
