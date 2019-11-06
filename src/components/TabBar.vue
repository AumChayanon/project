<template>
  <!-- Listen to before and after tab change events -->
  <ion-tabs>

    <ion-tab
      tab="home"/>
    <ion-tab
      tab="about"/>
    <ion-tab
      tab="report"/>

    <template slot="bottom">
      <ion-tab-bar >

        <ion-tab-button tab="home">
          <ion-label>ชนิดพืชไร่</ion-label>
            <!--
          <ion-icon name="home"/>
            -->
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="about">
            <!--
          <ion-icon name="contacts"/>
            -->
          <ion-label>อัปโหลด</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="report">
            <ion-label>ประวัติ</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style>

</style>