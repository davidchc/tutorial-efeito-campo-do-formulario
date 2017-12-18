document.addEventListener('DOMContentLoaded', e => {

    let fields = document.querySelectorAll('.fields');

    fields.forEach( element => {
        let input = element.querySelector('.input');
        let highlight = element.querySelector('.highlight');
        
        input.addEventListener('keyup', e => {
            let value = input.value;
            highlight.innerHTML = value;
        });
    });

});

 /*
fields.forEach(function(element){
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
    input.addEventListener('keyup', function() {
        let value = this.value;
        highlight.innerHTML = value;
    });
});*/