const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxA = !this.boxA;
      } else if (box === "B") {
        this.boxB === !this.boxB;
      } else (box === "C") {
        this.boxC === !this.boxC;
      }
    },
  },
  computed: {
      boxAClasses(){
          return { active: this.boxA}
      }
  }
});

app.mount("#styling");
