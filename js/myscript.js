// richiamo Vuejs
const {createApp} = Vue;

createApp({
    data () {
        return {
            error: false,

            newAnime: 
                {
                    title: "",
                    done: false
                },
            
            listAnime: [
                {
                    title: "Made in Abyss",
                    done: false
                },
                {
                    title: "High School DxD",
                    done: false
                },
                {
                    title: "Tokyo Ghoul",
                    done: false
                },
            ]
        }
    },
    methods: {
        // metodi
        // metodo per aggiungere un elemento alla lista
        addAnime() {
            // creo la condizione se l'user non inserisce niente nell'input
            if (this.newAnime.title === '') {
                this.error = true;
            
            // creo la condizione se l'user inserisce il nome di un anime nell'input
            } else {
                this.error = false;
                let newObject = {...this.newAnime};
                this.listAnime.push(newObject);
                console.log(this.listAnime);
            }

            // svuoto l'input una volta che il nuovo oggetto è stato aggiunto alla lista
            this.newAnime.title = '';
        },

        // metodo per eliminare un elemento dalla lista
        removeAnime(index) {
            this.listAnime.splice(index, 1);
        },

    }

}).mount("#myapp");