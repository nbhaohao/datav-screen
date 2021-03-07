<template>
  <div id="#app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <test-component></test-component>
    <Icon name="more" width="30" height="30" style="color: red" />
    <Icon name="filledArrowRight" width="30" height="30" style="color: green" />
    <Icon name="arrowRight" width="30" height="30" style="color: blue" />
    <router-view />
  </div>
</template>

<style></style>
