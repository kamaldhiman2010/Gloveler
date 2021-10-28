<template>
<div>
  <header id="myHeader" :class="{'inner-pg-header':innerHeader}">
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-text-collapse"
        ><i class="fa fa-bars" aria-hidden="true"></i
      ></b-navbar-toggle>

      <b-navbar-brand><router-link to="/">Gloveler</router-link></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text><router-link to="/prop_list">List of property</router-link></b-nav-text>
          <b-nav-text><a href="#">How Glover works?</a></b-nav-text>
          <b-nav-text><a href="#">Help</a></b-nav-text>
          <b-nav-text
            ><a href="#"><i class="fa fa-globe" aria-hidden="true"></i></a
          ></b-nav-text>
          <b-nav-text
            ><a href="#" class="login"
              ><b-button variant="outline-primary">Log in</b-button></a
            ></b-nav-text
          >
          <b-nav-text
            ><a href="#" class="register"
              ><b-button>Register now</b-button></a
            ></b-nav-text
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
  <b-breadcrumb v-if="innerHeader">
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
    <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
    <b-breadcrumb-item active>Baz</b-breadcrumb-item>
  </b-breadcrumb>
</div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
export default {
    name: "Header",
    components: {
      BIcon,
    },
    data(){
        return{
            innerHeader:true,
            
        };
    },
    watch:{
        '$route'(){
            
            if(this.$route.name== "landing-page"){
                this.innerHeader=false
            }
            else this.innerHeader=true
        }
    }
    
}


</script>
