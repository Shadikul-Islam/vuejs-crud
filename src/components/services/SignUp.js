import axios from "axios";
export default {
  Name: "SignUp",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async SignUp() {
      // console.warn("Signup", this.fullname, this.email, this.password)
      let result = await axios.post("http://localhost:3000/users", {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      });

      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("users-info", JSON.stringify(result.data));
        this.$router.push({name: 'Home'})
      }
    },
  },
};
