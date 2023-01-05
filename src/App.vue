<template>
  <div id="app">
    <div class="container">
      <div
        class="
          form-login
          text-center
          row
          justify-content-center
          align-items-center
        "
        v-if="!isLogin"
      >
        <div class="col-lg-6">
          <div class="user-login shadow border rounded-3 p-4 bg-white py-5">
            <input
              type="text"
              v-model="sender"
              class="form-control"
              placeholder="Please enter your name"
            />
            <button class="btn btn-primary mt-3 w-100" @click="login">
              Login
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="chat-app" v-if="isLogin">
            <div class="my-5 bg-white p-4 rounded-4">
              <chat-text
                class="chat-text"
                :messages="messages"
                :sender="sender"
              />
              <text-form :sender="sender" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatText from "./components/ChatText.vue";
import TextForm from "./components/TextForm.vue";

export default {
  components: { TextForm, ChatText },
  name: "App",
  data() {
    return {
      messages: [],
      sender: "",
      isLogin: false,
    };
  },
  mounted() {
    this.$socket.on("update", (data) => {
      this.messages = data;
    });
  },
  methods: {
    login() {
      if (this.sender.length) {
        this.isLogin = true;
      }
    },
  },
};
</script>

<style>
#app {
  background: #95447d;
  background: -webkit-radial-gradient(bottom right, #95447d, #5e5883);
  background: -moz-radial-gradient(bottom right, #95447d, #5e5883);
  background: radial-gradient(to top left, #95447d, #5e5883);
}
.form-login {
  height: 100vh;
}
.chat-app {
  height: 100vh;
  position: relative;
}
.chat-text {
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 40px;
}
</style>
