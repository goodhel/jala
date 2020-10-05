<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-black navbar-dark">
    <div class="container">
      <!-- <span class="brand-text font-w700">JALA</span> -->
      <router-link class="navbar-brand" to="/"> 
        <img class="brand-image" v-bind:src="'https://demo.jala.tech/images/' + hello"/>
        <!-- <span class="brand-text font-w700 ">JALA</span> -->
      </router-link>
      <!-- Left navbar links -->
      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li> -->
          <li class="nav-item d-none d-sm-inline-block">
            <!-- <a href="index3.html" class="nav-link">Pilih Lokasi</a> -->
            <!-- <router-link class="nav-link" to="/"> Pilih Lokasi </router-link> -->
          </li>
          <!-- <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contact</a>
                    </li> -->
        </ul>
        <!-- SEARCH FORM -->
        <form class="form-inline ml-3">
          <div class="input-group input-group-sm">
            <!-- <input
              class="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </nav>
  <!-- /.navbar -->
</template>
<script>
import 'vue-select/dist/vue-select.css';
export default {
  data() {
    return {
        hello: 'logo.svg',
    };
  },
};
</script>