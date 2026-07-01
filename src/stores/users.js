import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users',  {
   state: () => {
        const users= {
            0:{
                id: 1,
                firstname: "Jane",
                lastname: "Doe",
                email: "janedoe@example.com",
                phonenumber: "07081234567",
                location: "Westlands",
                address: "123, Main St"
            },
            1:{
                id: 2,
                firstname: "John",
                lastname: "Doe",
                email: "johndoe@example.com",
                phonenumber: "07081234567",
                location: "Langata",
                address: "226 Langata Rd"
            },
            2:{
                id: 3,
                firstname: "James",
                lastname: "Doe",
                email: "jamesdoe@example.com",
                phonenumber: "0712345678",
                location: "Embakasi North",
                address: "334 North St"
            },
            3:{
                id: 4,
                firstname: "Janice",
                lastname: "Doe",
                email: "janicedoe@example.com",
                phonenumber: "0723456789",
                location: "Embakasi South",
                address: "101 South St"
            },
            4:{
                id: 5,
                firstname: "Jim",
                lastname: "Doe",
                email: "jimdoe@example.com",
                phone: "0734567891",
                location: "Embakasi East",
                address: "345 East St"
            },
            5:{
                id: 6,
                firstname: "Jackson",
                lastname: "Doe",
                email: "jacksondoe@example.com",
                phonenumber: "0745678912",
                location: "Embakasi West",
                address: "567 West St"
            },
            6:{
                id: 7,
                firstname: "Jannet",
                lastname: "Doe",
                email: "jannetdoe@example.com",
                phonenumber: "0756789123",
                location: "Embakasi Central",
                address: "789 Central Ave"
            },
            7:{
                id: 8,
                firstname: "Jill",
                lastname: "Doe",
                email: "jilldoe@example.com",
                phonenumber: "0767891234",
                location: "Embakasi Central",
                address: "999 Central Ave"
            }
        }

        return{
            users
        }
   },
   actions:{
    addUser(payload) {
            //get the last key in the users object
            const existingKeys = Object.keys(this.users).map(Number);
            const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
            const nextKey = maxKey + 1;

            //insert into object
            this.users[nextKey] = {
                ...payload,
                id: nextKey
            };
        },
    editUser(id, payload) {
            // find the book in the object
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id //compare the ids
            );

            if (!user) {
                console.error(`No user found with id: ${id}`);
                return;
            }

            const [objectKey] = user;

            //replace the existing user data with what was received in payload
            this.users[objectKey] = {
                ...this.users[objectKey], 
                ...payload
            };
        },
    deleteUser(id) {
            const user = Object.entries(this.users).find(
                ([key, item]) => item.id === id
            );
            if (!user) {
                console.error(`Cannot delete: No user found id: ${id}`);
                return;
            }
            const [objectKey] = user;
            delete this.users[objectKey];
        }
   },
   persist: true,
})