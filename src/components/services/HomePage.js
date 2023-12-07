export default {
  name: "HomePage",

  mounted() {
    let user = localStorage.getItem("users-info")
    if(!user)
    {
      this.$router.push({ name: 'SignUp' })
    }
  },
};
