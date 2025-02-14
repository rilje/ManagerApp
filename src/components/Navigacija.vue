<template>
    <div class="border">
        <nav class="navbar bg-body-tertiary border">
            <div class="container d-flex justify-content-between">
                <div>
                    <RouterLink v-for="item,index in meni" :key="index" class="navbar-brand border p-2" :to="item.url">
                    {{ item.name }}
                    </RouterLink>
                </div>
                <div class="d-flex gap-2">
                    <span class=" ">User: {{ this.sessionEmail }}</span>
                    <button @click="logOut" class="btn btn-outline-danger btn-sm ">Log Out</button>

                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navigacija',
    data() {
        return {
            meni: [
                
                {
                    name: 'Projekti',
                    url: '/projects'
                },
                {
                    name: 'Radnici',
                    url: `/svi-radnici`
                },
            ],
            sessionEmail: ''
        }
    },
    methods: {
        logOut(){
            localStorage.removeItem('sesija')
            this.$router.push('/log-in')
        },
    },
    computed: {
        proveriSesiju(){
            const sesija = JSON.parse(localStorage.getItem('sesija'))
            if(sesija){
                this.sessionEmail = sesija.email
                console.log(this.sessionEmail)
                return
            }
            console.log('Podaci o sesiji nisu pronadjeni')
            return
        }
    },
    mounted() {
        this.proveriSesiju
    },
}
</script>
<style>
    
</style>