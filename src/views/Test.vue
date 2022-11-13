<template>
    <div>
        Testing!

    </div>
</template>

<script>
import { getDatabase, ref, onValue, child, get } from 'firebase/database';

export default {
    name: "Test",
    setup() {
        const db = getDatabase();
        return { db };
    },
    mounted() {
        this.getAllUniversities();
    }, 
    data() {
        return {
           
        }
    },
    methods: {
        async getAllUniversities() {
            const dbRef = ref(this.db);
            get(child(dbRef, `users/BgABSCLotMVtaZrygixpOkVTGLw1`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error)
            })
            console.log(dbRef);
        }
    }
}

</script>

<style>
</style>
