<template>
    <div>
        <div class="d-flex gap-1">
            <div class="card col-md-7">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="m-3 card-title">Dodavanje novog projekta</h5>
                    <div class="row m-1">
                        <div class="col-md-4">
                            <input type="text" v-model="noviProjekat.brojUgovora" class="form-control" placeholder="Broj projekta" aria-label="First name">
                        </div>
                        <div class="col">
                            <input v-model="noviProjekat.naziv" type="text" class="form-control" placeholder="Naziv projekta" aria-label="Last name">
                        </div>
                        
                    </div>
                    <div class="row m-1">
                        <div class="col-md-12">

                            <textarea v-model="noviProjekat.opis" name="" rows="6" class="form-control" placeholder="Unesite opis radova" id=""></textarea>
                        </div>
                    </div>
                    <div class="row m-1">
                        <div class="col">
                            <input v-model="noviProjekat.naruciocRadova" type="text" class="form-control" placeholder="Naručioc radova" aria-label="First name">
                        </div>
                    </div>
                    <div class="row m-1">
                        <div class="col">
                            <input v-model="noviProjekat.lokacija" type="text" class="form-control" placeholder="Lokacija radova" aria-label="First name">
                        </div>
                    </div>
                    <div class="row m-1">
                        <div class="col-md-6">
                            <input v-model="noviProjekat.vrednost" type="number" class="form-control" placeholder="Vrednost projekta (u RSD)" aria-label="First name" step="1000">
                        </div>
                    </div>
                    <hr>
                    <div class="row m-1">
                        <div class="col">
                            <input type="text" v-model="noviProjekat.pocetakRadova" class="form-control" placeholder="Pocetak radova (dd.mm.yyyy)" aria-label="First name">
                        </div>
                        <div class="col">
                            <input type="text" v-model="noviProjekat.krajRadova" class="form-control" placeholder="Kraj radova (dd.mm.yyyy)" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row m-1">
                        <h6>Rukovodioc radova</h6>
                        <div class="col">
                            <input v-model="noviProjekat.rukovodiocRadova.ime" type="text" class="form-control" placeholder="Ime rukovodioca" aria-label="First name">
                        </div>
                        <div class="col">
                            <input v-model="noviProjekat.rukovodiocRadova.telefon" type="text" class="form-control" placeholder="Broj telefona" aria-label="Last name">
                        </div>
                    </div>
                    <div class="row m-1">
                        <h6>Nadzor</h6>
                        <div class="col">
                            <input v-model="noviProjekat.nadzor.ime" type="text" class="form-control" placeholder="Ime nadzora" aria-label="First name">
                        </div>
                        <div class="col">
                            <input v-model="noviProjekat.nadzor.telefon" type="text" class="form-control" placeholder="Broj telefona" aria-label="Last name">
                        </div>
                    </div>
                </div>
                <div class="text-center p-2">
                    <button @click="dodajProjekat" class="btn btn-outline-primary btn-sm col-md-5">Dodaj novi projekat</button>
                </div>
            </div>
            <div class="col-md-5  ">
                <div  v-for="projekat,index in projekti" :key="projekat.brojUgovora" class="card">
                    <div class="card-header">
                        Broj ugovora: {{ projekat.brojUgovora }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ projekat.naziv }}</h5>
                        <p class="card-text"><small>{{ projekat.pocetakRadova }} - {{ projekat.krajRadova }}</small></p>
                        <!-- <h6 class="card-text">{{ projekat.opis }}</h6> -->
                        <p class="card-text d-flex justify-content-between"><small class="col-md-6">Naručilac radova: <b>{{ projekat.naruciocRadova }}</b></small> <small>Vrednost: <b>{{ projekat.vrednost }} RSD</b></small></p>
                        <RouterLink :to="`/single-project/${index}`" class="btn btn-outline-primary btn-sm">Pogledaj detalje</RouterLink>
                    </div>
                </div>
                <br>
                <div class="text-end">
                    <a href="#" @click="sacuvajProjekat" class="btn btn-success btn-sm">Sačuvaj projekte</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectsAddView',
    data() {
        return {
            projekti: [],
            noviProjekat: {
                brojUgovora: '',
                naziv: '',
                opis: '',
                lokacija: '',
                pocetakRadova: '',
                krajRadova: '',
                naruciocRadova: '',
                rukovodiocRadova: {ime: '', telefon: ''},
                nadzor: {ime: '', telefon: ''},
                radnici: [],
                chat: [],

            },
        }
    },
    methods: {
        dohvatiPodatke(){
            this.projekti = JSON.parse(localStorage.getItem('projekti-dmmont') || {})
        },
        dodajProjekat(){
            console.log('dodajem')

            // Validacija
            if(this.noviProjekat.brojUgovora == ''){
                this.$toast.error('Unesite broj ugovora.')
                return
            }
            if(this.noviProjekat.naziv == ''){
                this.$toast.error('Unesite naziv projekta.')
                return
            }
            if(this.noviProjekat.opis == ''){
                this.$toast.error('Unesite opis radova.')
                return
            }
            if(this.noviProjekat.naruciocRadova == ''){
                this.$toast.error('Unesite naručioca radova.')
                return
            }
            if(this.noviProjekat.lokacija == ''){
                this.$toast.error('Unesite lokaciju radova.')
                return
            }
            if(this.noviProjekat.vrednost == ''){
                this.$toast.error('Unesite vrednost projekta.')
                return
            }
            if(this.noviProjekat.pocetakRadova == ''){
                this.$toast.error('Unesite datum početka projekta.')
                return
            }
            if(this.noviProjekat.krajRadova == ''){
                this.$toast.error('Unesite datum završetka projekta.')
                return
            }
            if(this.noviProjekat.rukovodiocRadova.ime == ''){
                this.$toast.error('Unesite ime rukovodioca radova projekta.')
                return
            }
            if(this.noviProjekat.rukovodiocRadova.telefon == ''){
                this.$toast.error('Unesite telefon rukovodioca radova projekta.')
                return
            }
            if(this.noviProjekat.nadzor.ime == ''){
                this.$toast.error('Unesite ime nadzora projekta.')
                return
            }
            if(this.noviProjekat.nadzor.telefon == ''){
                this.$toast.error('Unesite telefon nadzora projekta.')
                return
            }

            // ako je sve proslo kako treba hocu da dodam projekat u niz, a zatim taj niz ponovo da upisem u local storage ALI TEK KADA SE KLIKNE NA SACUVAJ PROJEKTE 
            this.projekti.push(this.noviProjekat)
        },
        sacuvajProjekat(){
            localStorage.setItem('projekti-dmmont', JSON.stringify(this.projekti))
            this.$router.push('/projects')
        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style>
    
</style>