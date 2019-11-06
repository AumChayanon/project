<template>
  <div class="ion-page">
    <div v-if="user === ' '"><Login/>
    </div>
    <div v-else>
        <ion-header>
        <ion-toolbar>
        <TabBar/>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-row>
          <ion-button v-on:click="mockupdata" text-capitalize="false">Add data</ion-button>
          <ion-button v-on:click="clrLS" text-capitalize="false">Clear LocalStorage</ion-button>
          <ion-button v-on:click="showLS" text-capitalize="false">Show LocalStorage</ion-button>
        </ion-row>
        <ion-text color="primary">
          <p>Add mock up data from random person API</p>
        </ion-text>
        <ion-slides pager :options="slideOpts">
          <ion-slide v-for="person in persons" :key="person.key">
            <ion-card>
              <img v-bind:src="person.picture.large" expend="full">
              <ion-card-header>
                <ion-card-title>{{person.name.first}}</ion-card-title>
                <ion-card-subtitle>{{person.name.title}} {{person.name.first}} {{person.name.last}}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <ion-button v-on:click="onClick(person)">
                  Click me
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </ion-content>
      <ion-foot>
      </ion-foot>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '../components/TabBar'
import Login from '../components/Login'

export default {
  name: 'home',
  components: {
    TabBar,
    Login
  },
  data() {
    return {
      persons: [],
      /*status: {
        online: navigator.onLine
      },*/
      slideOpts: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30
      },
      user: ' ',
    }
  },
  /*mounted() {
    window.addEventListener('load', function() {
      this.updateStatus();
      window.addEventListener('online', this.updateStatus);
      window.addEventListener('offline', this.updateStatus);
    });
  },
  beforeDestroy() {
      window.removeEventListener('online', this.updateStatus);
      window.removeEventListener('offline', this.updateStatus);
  },*/
  created: function() {
    this.persons = JSON.parse(
      localStorage.getItem("tmp") || "[]"
    );
  },
  watch: {
    persons: {
      handler() {
        this.localstore();
      },
      deep: true
    }
  },
  methods: {
    getName: function(){
      this.user = this.obj.fullname
      //return this.user
      alert(this.user)
    },
    mockupdata: /*async*/ function() {
      /* async */fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then((data) => {
        this.persons = data.results;
      })
      // eslint-disable-next-line
      //console.log(JSON.stringify(this.persons));
    },
    localstore: function() {
      localStorage.setItem("tmp", JSON.stringify(this.persons));
    },
    clrLS: function() {
      localStorage.clear();
    },
    showLS: function() {
      // eslint-disable-next-line
      console.log(localStorage.getItem("tmp"));
    },
    /*updateStatus: function() {
      this.state.online = navigator.onLine || false
      this.$emit('detected-condition', this.state.online);
      if (this.status.online == true) {
        const toast = this.$ionic.toastController.create({
          message: 'online',
          position: "bottom",
          duration: 3000
        });
        toast.present();
      } else {
        const toast = this.$ionic.toastController.create({
          message: 'offline',
          position: "bottom",
          duration: 3000
        });
        toast.present();
      }
    },*/
    onClick(person) {
      alert(person.name.first);
    }
  }
}
</script>