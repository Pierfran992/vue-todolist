// richiamo Vuejs
const {createApp} = Vue;

createApp({
    data () {
        return {
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
        addAnime() {
            this.listAnime.push(this.newAnime)
            console.log(this.listAnime);
        }
    }

}).mount("#myapp");