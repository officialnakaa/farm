import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/tomato.jpg'
            },
            1:{
                id: 2,
                name: "Strawberries",
                category: "Fruit",
                price: 500,
                availability: false,
                image: '/strawberry.jpg'
            },
            2:{
                id: 3,
                name: "Onion",
                category: "Vegetable",
                price: 250,
                availability: true,
                image: '/onion.jpg'
            },
            2:{
                id: 3,
                name: "Carrots",
                category: "Vegetable",
                price: 300,
                availability: true,
                image: '/carrots.jpg'
            },
            3:{
                id: 4,
                name: "Green Bell Pepper",
                category: "Vegetable",
                price: 150,
                availability: true,
                image: '/greenbellpepper.jpg'
            },
            4:{
                id: 5,
                name: "Asparagus",
                category: "Vegetable",
                price: 375,
                availability: false,
                image: '/asparagus.jpg'
            },
            5:{
                id: 6,
                name: "Spinach",
                category: "Vegetable",
                price: 450,
                availability: true,
                image: '/spinach.jpg'
            }

        }
       
        return{
            products
        }
   },
   actions:{
       
   },
   persist: true,
})