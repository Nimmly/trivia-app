<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand">Trivia App</a>
      <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/chuck">Chuck</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/trivias">Trivias</router-link>
          </li>
      </ul>
      </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  
}
</script>

<style>

</style>
