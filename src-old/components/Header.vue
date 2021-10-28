<template>
<header id="myHeader" >
    <b-navbar toggleable="lg" >
        <b-navbar-toggle target="nav-text-collapse"><i class="fa fa-bars" aria-hidden="true"></i></b-navbar-toggle>

        <b-navbar-brand><a href="#">Gloveler</a></b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-text><a href="#">List of property</a></b-nav-text>
                <b-nav-text><a href="#">How Glover works?</a></b-nav-text>
                <b-nav-text><a href="#">Help</a></b-nav-text>
                <b-nav-text><a href="#"><i class="fa fa-globe" aria-hidden="true"></i></a></b-nav-text>
                 <b-nav-text><a href="#" class="login"><b-button variant="outline-primary">Log in</b-button></a></b-nav-text>
                 <b-nav-text><a href="#" class="register"><b-button>Register now</b-button></a></b-nav-text>
                 
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</header>
</template>

<script>
export default {
    name: "Header"
}


</script>
