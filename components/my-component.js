export default {
    data() {
        return {
            lista: null,
            mapeo: [],
            name:' ',
            age:' ',
            num:''
        }
    },
    methods: {
        crearObjeto() {
            this.lista = []
        },
        añadir() {
            this.lista.push({
                name: this.nombre,
                age: this.edad
            });
            this.nombre = '';
            this.edad = ''
            console.log(this.lista);
        },
        eliminar() {
            this.lista.shift()
        },
        eliminarDos() {
            this.lista.pop()
        },
        eliminarSolo(num) {
            this.lista.splice(num, 1)
            this.num = ' '
        },
        anadirFin() {
            this.lista.unshift({
                name: this.nombre,
                age: this.edad
            })
            this.nombre = '';
            this.edad = ''
        },
        mape() {
            this.mapeo = this.lista.map((item) => ({ ...item }))

        }
    }
}



