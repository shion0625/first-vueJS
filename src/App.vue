<template>
  <div>
    <LikeHeader>
      <template>
        <h1>こんにちは</h1>
      </template>
    </LikeHeader>
    <LikeNumber :total-num = "number" @my-click= "incrementNumber"></LikeNumber>
    <button @click="currentComponent='Home'">Home</button>
    <button @click="currentComponent='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <div style="padding: 10rem;">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <label for="maxNumber">最大人数:</label>
      <input
        id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>

      <label for="host">主催者:</label>
      <input
        id="host" type="number" v-model.trim="eventData.host">
      <p>{{ eventData.host }}</p>

      <label for="detail">イベントの詳細:</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p>{{ eventData.detail }}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{eventData.target}}</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key=location>{{ location }}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
//ローカル登録
import LikeHeader from "./components/LikeHeader.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import EventTitle from "./components/EventTitle.vue"

export default {
  data(){
    return{
      number: 10,
      currentComponent: "Home",
      locations: ["東京","大阪","神奈川"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: "イベントの詳細を記入してください",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    incrementNumber(value) {
        this.number = value;
    }
  }
}
</script>