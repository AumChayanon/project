import Vue from 'vue'
import App from './App.vue'
import router from './router'

//npm install --save firebase
import firebase from 'firebase'


import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.config.productionTip = false;

const Config = {
  apiKey: "AIzaSyAh_t-QZpesiDsNyWldSXmc_H2LHRPV2mA",
  authDomain: "pwaclubv.firebaseapp.com",
  databaseURL: "https://pwaclubv.firebaseio.com",
  projectId: "pwaclubv",
  storageBucket: "",
  messagingSenderId: "244164350217",
  appId: "1:244164350217:web:108974c271250506a0c3d8"
};
firebase.initializeApp(Config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
