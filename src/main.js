// import { bind } from 'core-js/core/function';
import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false
// グローバル登録（すべてのvueインスタンスでLikeNumberが使える）
Vue.component('LikeNumber', LikeNumber);
// グローバルに関数を登録
Vue.filter("upperCase", function(value){
  return value.toUpperCase()
});
//カスタムディレクティブ
//Vue.directive("border",function(el,binding) {
  // el.style.border ="solid black 2px"
  // el.style.borderWidth = binding.value.width;
  // el.style.borderColor = binding.value.color;
  // el.style.borderStyle = binding.arg;
  // if(binding.modifiers.round) {
  //   el.style.borderRadius = "0.5rem"
  // }
  // if(binding.modifiers.shadow) {
  //   el.style.boxShadow = "0 3px 0px rgba(0,0,0,0.26)"
  // }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')
