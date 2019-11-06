<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="login">
      <h1 >เข้าสู่ระบบ</h1>
    </div>
    <div class="divbtn">
      <section>
        <button class="btn" @click="socialFacecbookLogin" expand="block"><ion-icon name="logo-facebook"></ion-icon>Facebook</button>
    </section>
    <section>
        <button class="btn" @click="socialGoogleLogin" expand="block"><ion-icon name="logo-google"></ion-icon>Google</button>
    </section>
    <h1 >เก็บข้อมูลพืชไร่</h1>
    <h1>{{ obj }}</h1>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data: function () {
    return {
      count: 0,
      obj: '',
      a: '',
    }
  },
  methods: {
    socialGoogleLogin: function() {
      const provide = new firebase.auth.GoogleAuthProvider().addScope("email");
      firebase
        .auth()
        .signInWithPopup(provide)
        .then(result => {
          // create user in db
          this.obj = {
            google_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.additionalUserInfo.profile.picture,
            user_type_id: 1
          }; 
          //console.log(obj);
          this.$router.push('Home') 
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    socialFacecbookLogin: function() {
      const provide = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provide)
        .then(result => {
          // create user in db
          this.obj = {
            facebook_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.user.photoURL + "?height=500",
            user_type_id: 1
          };
          //console.log(obj);
          this.$router.push('Home') 
        }) 
        .catch(err => {
          alert("Oops. " + err.message);
        });
       
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: 'EkkamaiNew';
    src: url('EkkamaiNew-Regular.ttf');
}
body{
  width: 100%;
   font-family:EkkamaiNew;
}
.login{
  text-align: center;
  padding: 10%;
}
.divbtn{
  text-align: center;
}
.btn{
  width: 80%;
  background-color: white; /* Green */
  border: none;
  color: rgb(126, 199, 66);
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 9px 5px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgb(216, 216, 216);
}
</style>