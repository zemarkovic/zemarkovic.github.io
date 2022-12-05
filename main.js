

function tombol_map() {

    let kali = document.getElementById('tanda-kali');
    let tambah = document.getElementById('tanda-tambah');
    let kurang = document.getElementById('tanda-kurang');
    let bagi = document.getElementById('tanda-bagi');
    let satu = document.getElementById('angka-satu');
    let dua  = document.getElementById('angka-dua');
    let tiga  = document.getElementById('angka-tiga');
    let empat  = document.getElementById('angka-empat');
    let lima  = document.getElementById('angka-lima');
    let panel = document.getElementById('panel-kalkulator');




    // perulangan
    let number = Array.prototype.slice.call( document.querySelectorAll('.angka'))

    number.forEach( item => {
        
        item.addEventListener('click', ()=> {
            let current_value = panel.value;
            let current_number = item.dataset.number;
            panel.value = current_value+current_number;
    
        })
    });


    // perulangan
    let symbol = Array.prototype.slice.call( document.querySelectorAll('.simbol'))

    symbol.forEach( item => {
        
        item.addEventListener('click', ()=> {
            let current_value = panel.value;
            let current_symbol = item.dataset.symbol;
            panel.value = current_value+current_symbol;
    
        })
    });

   

}

tombol_map();



