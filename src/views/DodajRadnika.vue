<template >
    <div>
        <div class="d-flex justify-content-center gap-2">
            <div class="col-md-6">
                <div class="form-control">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Ime i prezime</label>
                        <input v-model="noviRadnik.imePrezime" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Pozicija</label>
                        <select v-model="noviRadnik.pozicija" class="form-select" aria-label="Default select example">
                            <option selected>Odaberite poziciju radnika</option>
                            <option value="Menadzment">Menadzment</option>
                            <option value="Poslovodja">Poslovodja</option>
                            <option value="Zavarivac">Zavarivac</option>
                            <option value="Cevar">Cevar</option>
                            <option value="Bravar">Bravar</option>
                            <option value="HSE">HSE</option>
                            <option value="IWE">IWE</option>
                            <option value="Dizalicar">Dizalicar</option>
                            <option value="Viljuskarista">Viljuskarista</option>
                            <option value="Magacioner">Magacioner</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Licna karta</label>
                        <input v-model="noviRadnik.licnaKarta" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Obuka (dd.mm.yyyy)</label>
                        <input v-model="noviRadnik.obuka" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Lekarski (dd.mm.yyyy)</label>
                        <input type="text" v-model="noviRadnik.lekarski" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    
                    <button @click="dodajRadnika" type="submit" class="btn btn-primary">Dodaj radnika</button>
                </div>
            </div>
            <div class="col-md-4 border p-2">
                <h6>Projekti</h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DodajRadnikaView',
    data() {
        return {
            noviRadnik: {
                id: Date.now(),
                imePrezime: '',
                pozicija: '',
                rasporedjen: false,
                licnaKarta: Date.now(),
                lekarski: null,
                obuka: null,
                projekti: [],
            },
            radnici: [],
            projekti: [],
        }
    },
    methods: {

        dohvatiPodatke(){
            this.radnici = JSON.parse(localStorage.getItem('Radnici'))
            
        },  


        dodajRadnika(){
            console.log('dodajem radnika')
            // osnovna validacija: 
            if(this.noviRadnik.imePrezime == '' || this.noviRadnik.pozicija == '' || this.noviRadnik.obuka == '' || this.noviRadnik.lekarski == ''){
                this.$toast.error('Please, fill out all fields.')
                return 
            }
            this.radnici.push(this.noviRadnik)
            localStorage.setItem('Radnici', JSON.stringify(this.radnici))
            


        }
    },
    mounted() {
        this.dohvatiPodatke()
    },
}
</script>
<style>
    
</style>