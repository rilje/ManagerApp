<template>
    
    <div class="bg-light p-4 col-md-5 d-flex flex-wrap justify-content-center">
        <div class="col-md-12">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input v-model="korisik.email" type="email" class="form-control text-center  border-black" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input v-model="korisik.password" type="password" class="form-control border-black" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Repeat Password</label>
                <input  v-model="korisik.repassword" type="password" class="form-control  border-black" id="exampleFormControlInput1">
            </div>
        </div>
        <hr class="col-md-12">
        <div class="col-md-12 text-center">
            <button @click="registrujKorisnika" class="btn btn-outline-primary">Register</button>
        </div>
        
        <p><i><small>Already have an account? <RouterLink :to="'/log-in'"> Login instead...</RouterLink></small></i></p>
    </div>
</template>
<script>
export default {
    name: 'RegisterForma',
    data() {
        return {
            podaci: [],
            korisik: {
                id: null,
                email: '',
                password: '',
                repassword: '',
            }
        }
    },
    methods: {
        dohvatiPodatke(){
            this.podaci = JSON.parse(localStorage.getItem('korisnici') || {})
            console.log(this.podaci)
        },
        registrujKorisnika(){
            console.log('registrujem...')
            
            this.korisik.id = Date.now()
            

            if(this.korisik.email == '' || this.korisik.password == '' || this.korisik.repassword == ''){
                this.$toast.error('Please, fill out all the fields.')
                return
            }
            if(this.korisik.password !== this.korisik.repassword){
                this.$toast.error('Passwords does not match.')
                return
            }
            
            // Validacija da li je email vec u upotrebi
            for (const korisnik of this.podaci) {
                if(korisnik.email == this.korisik.email){
                    this.$toast.error('Email already in use.')
                    return
                }
            }

            
            this.podaci.push(this.korisik)
            localStorage.setItem('korisnici', JSON.stringify(this.podaci))
            this.$toast.success('You have successfuly registered.')
            this.$router.push('/log-in')
            


            
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    .mb-3{
        text-align: center;
    }
</style>