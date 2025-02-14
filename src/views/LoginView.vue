<template>
    <div>
    
        <div class="bg-light p-3 col-md-5 d-flex flex-wrap justify-content-center wrap">
        <div class="col-md-12">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input v-model="korisnik.email" type="email" class="form-control text-center  border-black" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input v-model="korisnik.password" type="password" class="form-control border-black" id="exampleFormControlInput1">
            </div>

        </div>
        <hr class="col-md-12">
        <div class="col-md-12 text-center d-flex justify-content-center align-items-center flex-wrap">
            <button @click="logIn" class="btn btn-outline-primary">Log In</button>

            <div class="col-md-12 d-flex justify-content-center align-items-center gap-1">
                <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    <i><small> Keep me signed in</small></i>
                </label>
            </div>
        </div>
       

        <hr class="col-md-12">
        <p><i><small>Not member yet? <RouterLink :to="'/registracija'"> Register here...</RouterLink></small></i></p>
    </div>
    </div>
</template>
<script>
export default {
    name: 'LoginView',
    data() {
        return {
            korisnik: {
                email: '',
                password: '',
            },
            podaci: []
            
        }
    },
    methods: {
        dohvatiPodatke(){
            this.podaci = JSON.parse(localStorage.getItem('korisnici'))
            console.log(this.podaci)
        },
        logIn(){
            console.log('log-in')
            // moram nadjem korisnika sa tim emailom.
            const trenutniKorisnik = this.podaci.find((korisnik) => korisnik.email == this.korisnik.email)
            if(trenutniKorisnik){
                // ako korisnik postoji proveri da li je sifra dobra
                if(this.korisnik.password != trenutniKorisnik.password){
                    this.$toast.error('Invalid password.')
                    this.korisnik.password = ''
                    return
                }
                const sesija = {email: trenutniKorisnik.email, token: Date.now()}
                localStorage.setItem('sesija',JSON.stringify(sesija))
                this.$router.push({name: 'projects-all'})
                return
            }

            
            

            this.$toast.error('Email not found.')
            return

        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style scoped>
    .wrap{
        margin: 0 auto;
    }
</style>