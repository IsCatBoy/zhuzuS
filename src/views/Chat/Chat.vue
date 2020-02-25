<template>
  <div class="page test3">
    <input type="text" v-model="name" />
    <button>链接</button>
    <div class="msg" ref="box">
      <div v-for="(item, index) in list" :class="[item.type, 'msg-item']" :key="index">
        <p>{{ item.content }}</p>
      </div>
    </div>
    <div class="input-group">
      <input type="text" v-model="contentText" />
      <button @click="sendText">发送</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {
      name: "",
      list: [], //聊天记录的数组
      contentText: "",
      ws: null
    };
  },
  methods: {
    //链接
    sendText() {
      let that = this;
      if (window.WebSocket) {
        var ws = new WebSocket("ws://192.168.101.108:8001");

        ws.onopen = function(e) {
          console.log("连接服务器成功");
          // 向服务器发送消息
          ws.send(that.contentText);
        };
        ws.onclose = function(e) {
          console.log("服务器关闭");
        };
        ws.onerror = function() {
          console.log("连接出错");
        };
        // 接收服务器的消息
        ws.onmessage = function(e) {
          let message = "message:" + e.data + "";
          console.log(message);
        };
      }
    }
    //发送聊天信息
    // sendText() {
    //   let that = this;
    //   this.list = [...this.list, { type: "mine", content: this.contentText }]; //通过type字段进行区分是自己（mine）发的还是系统（robot）返回的
    //   this.backText(function() {
    //     that.contentText = ""; //加回调在得到返回数据的时候清除输入框的内容
    //   });
    // },
    // backText(callback) {
    //   let that = this;
    //   if (window.WebSocket) {
    //     let ws = new WebSocket("ws://192.168.101.108:8001");
    //     ws.onopen = function(e) {
    //       console.log("链接服务器成功");
    //       console.log("that.contentText is", that.contentText);
    //       that.ws.send(that.contentText);
    //       callback();
    //     };
    //     ws.onclose = function(e) {
    //       console.log("服务器关闭");
    //     };
    //     ws.onerror = function() {
    //       console.log("服务器出错");
    //     };
    //     ws.onmessage = function(e) {
    //       that.list = [...that.list, { type: "robot", content: e.data }];
    //     };
    //   }
    // }
  }
};
</script>
<style scoped lang="scss">
.test3 {
  text-align: center;
}

.msg {
  width: 100%;
  height: 300px;
  overflow: auto;
  padding-top: 5px;
  //   border: 1px solid red;
  display: inline-block;
  margin-bottom: 6px;

  .msg-item {
    position: relative;
    overflow: hidden;
    p {
      display: inline-block;
      border-radius: 40px;
      background: #3c3d5a;
      color: white;
      float: left;
      padding: 2px 12px;
      margin: 0 0 2px 0;
      max-width: 70%;
      text-align: left;
      box-sizing: border-box;
    }

    &.mine {
      p {
        float: right;
        background: aquamarine;
        color: white;
      }
    }
  }
}
</style>
