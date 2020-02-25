<template>
  <div class="page Chat">
    <div class="web-im">
      <!--<div class="header im-title">聊天室</div>-->
      <div class="content im-record" ref="chatContent">
        <div
          class="li"
          :class="{ user: item.uid == uid }"
          v-for="(item, index) in messageList"
          :key="index"
        >
          <template v-if="item.type === 1">
            <p class="join-tips">{{ item.msg }}</p>
          </template>
          <template v-else>
            <div class="img">
              <img src="../../assets/indexPage/tou3@3x.png" alt />
            </div>
            <div class="message-box">{{ item.msg }}</div>
          </template>
        </div>
      </div>
      <div class="footer im-input">
        <input type="text" v-model="msg" placeholder="请输入内容" />
        <button @click="send">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  name: "Chat",
  data() {
    return {
      title: "群聊",
      uid: "",
      nickname: "",
      socket: "",
      msg: "",
      // 当前用户所有消息
      messageList: [],
      users: [],
      bridge: []
    };
  },
  created() {
    // this.showDialog();
  },
  mounted() {
    this.scrollToBottom();

    let vm = this;
    let user = localStorage.getItem("WEB_IM_USER");

    user = (user && JSON.parse(user)) || {};
    console.log(user);
    vm.uid = user.uid;
    vm.nickname = user.nickname;
    if (!vm.uid) {
      vm.showDialog();
    } else {
      vm.conWebSocket();
    }
    document.onkeydown = function(event) {
      var e = event || window.event;
      if (e && e.keyCode == 13) {
        //回车键的键值为13
        vm.send();
      }
    };
  },
  updated() {
    this.scrollToBottom();
  },
  computed: {
    // 当前对话渲染的msg列表
    currentMessage() {
      let vm = this;
      // 筛选只有bridge相同的对话，展示出来
      // 数组比较，先转成字符串
      let data = vm.messageList.filter(item => {
        return item.bridge.sort().join(",") == vm.bridge.sort().join(",");
      });
      return data;
    }
  },
  methods: {
    //实现滚动默认下方
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
      });
    },
    //展示弹框
    showDialog() {
      let vm = this;
      MessageBox.prompt("Please tell me your name", {
        inputValidator: val => {
          let a = "";
          if (val != null) {
            a = val;
          }
          return !(a.length < 4 || a.length > 6);
        },
        inputErrorMessage: "名字长度必须在4~6位"
      })
        .then(a => {
          console.log(a);
          if (a.action == "confirm") {
            //确认的回调
            vm.nickname = a.value;
            console.log(1);
            vm.conWebSocket();
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
            console.log(2);
          }
        });
    },
    send() {
      if (!this.msg) {
        return;
      }
      this.sendMessage(2, this.msg);
    },
    sendMessage(type, msg) {
      this.socket.send(
        JSON.stringify({
          uid: this.uid,
          type: type,
          nickname: this.nickname,
          msg: msg
        })
      );
      this.msg = "";
    },
    conWebSocket() {
      let vm = this;
      if (window.WebSocket) {
        vm.socket = new WebSocket("ws://175.24.82.120:8001");
        let socket = vm.socket;

        socket.onopen = function(e) {
          console.log("连接服务器成功");
          if (!vm.uid) {
            // 生成新的用户id,并存入localStorage
            // eslint-disable-next-line no-undef
            vm.uid = "web_im_" + vm.nickname;
            localStorage.setItem(
              "WEB_IM_USER",
              JSON.stringify({
                uid: vm.uid,
                nickname: vm.nickname
              })
            );
            vm.sendMessage(1);
          }
        };
        socket.onclose = function(e) {
          console.log("服务器关闭");
        };
        socket.onerror = function() {
          console.log("连接出错");
        };
        // 接收服务器的消息
        socket.onmessage = function(e) {
          let message = JSON.parse(e.data);
          vm.messageList.push(message);
        };
      }
    },
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
.Chat {
  position: relative;
  .web-im {
    height: 100%;
  }
  .content {
    padding: 0 0.175rem;
    font-size: 0.8em;
    height: calc(100% - 0.485rem);
    overflow: auto;
    background-color: #f5f5f5;
    .li {
      margin: 0.175rem 0;
      display: flex;
      //   align-items: center;
      .join-tips {
        margin: 0 auto;
        color: #cccccc;
      }
      .img {
        width: 0.3rem;
        height: 0.3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        img {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .message-box {
        border-radius: 0.15rem;
        padding: 0 0.15rem;
        line-height: 0.3rem;
        margin: 0 0 0 0.125rem;
        letter-spacing: 0.1em;
        background-color: #ffffff;
        max-width: calc(100% - 0.125rem - 0.735rem);
      }
    }
    .user {
      flex-direction: row-reverse;
      .message-box {
        margin: 0 0.125rem 0 0;
        background-color: #6fa7dd;
      }
    }
  }
  .footer {
    height: 0.485rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      font-size: 0.755em;
      padding: 0;
      padding: 0 0.1rem;
      margin: 0;
      height: 70%;
      border: none;
      outline: none;
      border: 0.005rem solid #dadada;
      width: calc(100% - 0.485rem);
      border-radius: 0.485rem;
    }
    button {
      font-size: 12.5px;
      height: 70%;
      width: 0.485rem;
    }
  }
}
</style>
