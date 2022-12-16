const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      url : 'https://i.picsum.photos/id/362/200/300.jpg?hmac=YjZiJWaqrdKL4xFhgrjDw4Ic2tPzNLV975FWRb8td0s'
    }
  }
}).mount('#app')