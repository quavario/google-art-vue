<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.item-container {
  position: relative;
  cursor: pointer;
}

.item-container > img {
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.item-container > img:hover {
  opacity: 0.9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.sub-item-container {
  /* position: relative; */
  /* line-height: 30%; */
  height: 40%;
  cursor: pointer;
}

.sub-item-container > img {
  height: 250px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.sub-item-container > div {
  margin-top: 10px;
  /* margin-left: 0px; */
}

.sub-item-container > div > a {
  font-size: 18px;
  font-weight: 500;
  text-align: start;
  display: block;
}

.sub-item-container > div > i {
  float: right;
  font-size: 20px;
  font-weight: 100;
}

a {
  cursor: pointer;
}

.sub-item-container > img:hover {
  opacity: 0.9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.text-item {
  position: absolute;
  left: 0;
  top: 70%;
  /* text-align: center; */
  font-size: 2.75rem;
  font-weight: 400;
  max-width: 70%;
  color: white;
  margin-left: 5%;
  /* margin-bottom: 3%; */
}
</style>
