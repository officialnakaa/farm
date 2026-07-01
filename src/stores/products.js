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
                image: '/strawberries.jpg'
            },
            2:{
                id: 3,
                name: "Onion",
                category: "Vegetable",
                price: 175,
                availability: true,
                image: '/onion.jpg'
            },
            3:{
                id: 4,
                name: "Carrots",
                category: "Vegetable",
                price: 180,
                availability: true,
                image: '/carrots.jpg'
            },
            4:{
                id: 5,
                name: "Bell Peppers",
                category: "Vegetable",
                price: 300,
                availability: true,
                image: '/bellpeppers.jpg'
            },
            5:{
                id: 6,
                name: "Asparagus",
                category: "Vegetable",
                price: 200,
                availability: false,
                image: '/asparagus.jpg'
            },
            6:{
                id: 7,
                name: "Spinach",
                category: "Vegetable",
                price: 80,
                availability: true,
                image: '/spinach.jpg'
            },
            7:{
                id: 8,
                name: "Potatoes",
                category: "Vegetable",
                price: 150,
                availability: true,
                image: '/potatoes.jpg'
            },
            8:{
                id: 9,
                name: "Cucumbers",
                category: "Vegetable",
                price: 80,
                availability: true,
                image: '/cucumbers.jpg'
            },
            9:{
                id: 10,
                name: "Avocados",
                category: "Vegetable",
                price: 50,
                availability: false,
                image: '/avocados.jpg'
            },
            10:{
                id: 11,
                name: "Cabbage",
                category: "Vegetable",
                price: 150,
                availability: true,
                image: '/cabbage.jpg'
            },
            11:{
                id: 12,
                name: "Broccoli",
                category: "Vegetable",
                price: 375,
                availability: true,
                image: '/broccoli.jpg'
            },
            12:{
                id: 13,
                name: "Apples",
                category: "Fruit",
                price: 300,
                availability: true,
                image: '/apples.jpg'
            },
            13:{
                id: 14,
                name: "Oranges",
                category: "Fruit",
                price: 250,
                availability: true,
                image: '/oranges.jpg'
            },
            14:{
                id: 15,
                name: "Lemons",
                category: "Fruit",
                price: 50,
                availability: true,
                image: '/lemons.jpg'
            },
            15:{
                id: 16,
                name: "Milk",
                category: "Dairy",
                price: 120,
                availability: true,
                image: '/milk.jpg'
            },
            16:{
                id: 17,
                name: "Eggs",
                category: "Dairy",
                price: 550,
                availability: true,
                image: '/eggs.jpg'
            },
            17:{
                id: 18,
                name: "Butter",
                category: "Dairy",
                price: 350,
                availability: true,
                image: '/butter.jpg'
            },
            18:{
                id: 19,
                name: "Cheese",
                category: "Dairy",
                price: 400,
                availability: true,
                image: '/cheese.jpg'
            },
            19:{
                id: 20,
                name: "Yogurt",
                category: "Dairy",
                price: 200,
                availability: true,
                image: '/yogurt.jpg'
            },

        }
       
        return{
            products
        }
   },
   actions:{
       updateSelectedProduct (payload) {
      this.selectedProduct = payload
    }
   },
   persist: true,
})