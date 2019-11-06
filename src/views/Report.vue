<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <TabBar/>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>This is an report page</h1>
    </ion-content>
    <ion-foot>
    </ion-foot>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '../components/TabBar'

export default {
  name: 'report',
  components: {
    TabBar
  }
}
</script>