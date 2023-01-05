<template>
  <form @submit.prevent="sendMessage()" class="text-chat">
    <VueEditor v-model.trim="messageValue" button-text="Custom Save Message" />
    <button
      class="btn-primary btn w-100 mt-3 px-3 py-2"
      :disabled="messageValue.length && sender.length ? false : true"
    >
      Send
    </button>
  </form>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    sender: { type: String, default: "" },
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      messageValue: "",
    };
  },
  methods: {
    sendMessage() {
      this.$socket.emit("send", {
        id: uuidv4(),
        message: this.messageValue,
        sender: this.sender,
        time: this.$moment().format("hh:mm"),
      });
      this.messageValue = "";
    },
  },
};
</script>

<style>
.btn-send {
  background-color: rgb(0, 15, 63);
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
  border: 1px solid transparent;
}
.btn-send:not(:disabled):hover {
  color: rgb(0, 15, 63);
  background-color: #fff;
  border: 1px solid rgb(0, 15, 63);
}
.btn-send:disabled {
  cursor: not-allowed;
  background-color: rgb(233, 233, 233);
  color: #000;
}
</style>