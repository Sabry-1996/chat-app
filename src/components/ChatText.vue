<template>
  <div>
    <div
      :class="{ active: message.sender === sender }"
      class="message"
      v-for="(message, key) in messages"
      :key="key"
    >
      <div class="sender-user">
        <span>
          {{ message.sender }}
        </span>
        <span>
          {{ message.time }}
        </span>
      </div>
      <p class="message-text" v-html="message.message"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    sender: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.message {
  width: fit-content;
  min-width: 200px;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  border-end-end-radius: 0;
  margin-bottom: 10px;
  margin-left: auto;
  background-color: rgb(129, 129, 129);
  color: #fff;
}
.message.active {
  background-color: rgb(12, 23, 180);
  margin-left: 0;
  margin-right: auto;
  border-end-start-radius: 0;
  border-end-end-radius: 8px;
}
.message::before {
  content: "";
  position: absolute;
  bottom: 20px;
  border: 10px solid;
  border-color: transparent transparent transparent rgb(129, 129, 129);
  right: -20px;
}
.message.active::before {
  border-color: transparent rgb(12, 23, 180) transparent transparent;
  left: -20px;
  right: auto;
}
</style>