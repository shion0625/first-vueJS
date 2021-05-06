<template>
<div>
  <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">{{tmpData}}</p>
  <h2>{{ title | upperCase }}</h2>
  <p>{{subtitle | lowerCase}}</p>
  <p>{{number}}</p>
  <button @click="number++">+1</button>
  <hr>
  <CountNumber></CountNumber>
</div>

</template>
<script>
import CountNumber from "./CountNumber.vue"
import {tokyoNumber} from "@/tokyoNumber"

export default {
  mixins:[tokyoNumber],
  data(){
    return {
      title: "こんにちは",
      tmpData: "hello",
    }
  },
  components: {
    CountNumber
  },
  directives: {
    border(el,binding){
      el.style.border ="solid black 2px"
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round) {
        el.style.borderRadius = "0.5rem"
      }
      if(binding.modifiers.shadow) {
        el.style.boxShadow = "0 3px 0px rgba(0,0,0,0.26)"
      }
    }
  }
};
</script>