let t = [1, 2, 3];
t.filter(e => e < 2);

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('szoveg')!.addEventListener('input', (e) => {
        //Opció 1:
        //let elem = document.getElementById('szoveg') as HTMLInputElement;
        //document.body.style.backgroundColor = elem.value;

        //Opció 2:
        let elem = e.currentTarget as HTMLInputElement;
        document.body.style.background = elem.value;
    })
});