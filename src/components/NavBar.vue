<script setup>
 
</script>
 
<template>
   <v-app-bar color="primary">
        <v-app-bar-title>  
            <router-link to="/">
            <v-img src="/logo.png" width="8%" height="8%"></v-img>
            </router-link></v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/admin">Admin</v-btn>
        <v-btn to="/profile">Profile</v-btn>
        <v-btn to="/product">Product</v-btn>
        <v-btn to="/product_detail">Product Detail</v-btn>
        <v-btn to="/seller_view">Seller View</v-btn>
        <v-btn to="/login">Login</v-btn>
        
    </v-app-bar>
</template>
 