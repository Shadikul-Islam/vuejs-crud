import axios from "axios";
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async login(){
            console.log(this.email, this.password);
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.log(result);
            if (result.status == 200 && result.data.length>0) {
                localStorage.setItem("users-info", JSON.stringify(result.data));
                this.$router.push({name: 'HomePage'})
              }
        }
    },

    mounted() {
      let user = localStorage.getItem("users-info")
      if(user)
      {
        this.$router.push({ name: 'HomePage' })
      }
    },
};