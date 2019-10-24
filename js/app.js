var app = new Vue({
    el: '#app',
    data: {
        descod: 'Saludos desde pluton', 
        cesar: '',
        des: 5
    },
    watch: {
      // whenever question changes, this function will run
      descod: function () {
          this.convertiraCesar();
      },
      des: function () {
        this.convertiraCesar();
      }
    },
    created: function () {
        this.convertiraCesar();
    },
    methods: {
      convertiraCesar: function () {
        this.cesar = '';
          this.cesar = this.descod.split('').map(c=>{
            let mayus = (c === c.toUpperCase()) ? true : false;
            let valorEntero = c.toLowerCase().charCodeAt(0);
            if(valorEntero >= 97 && valorEntero <= 122)
                {
                    
                    if(valorEntero + this.des > 122)
                        valorEntero = 97 + (valorEntero - 122) + this.des - 1;
                    else
                        valorEntero = valorEntero + this.des;
                }
        
                let cifrado = String.fromCharCode(valorEntero);
                return mayus ? cifrado.toUpperCase() : cifrado;
            }).join('');
      }
    }
  });