const container = document.getElementById('container');

for(i=0; i<16; i++){
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('row')
    div.classList.add('a')
    
    container.appendChild(div)
}
const row = container.querySelectorAll('div.flex.row');
console.log(row)
console.log(row[2])


    
    
for(i=0; i<row.length; i++){
    for(j=0; j<16; j++){
        const div = document.createElement('div')
        div.classList.add('b')
        row[i].appendChild(div)
    }
}
    
const cells = document.querySelectorAll('.b')
for(i=0; i<cells.length; i++){
    cells[i].addEventListener('click', () => alert('hey'));
    cells[i].addEventListener('mouseover', e => e.target.classList.add('color'))
    
}

/*
for (const cell in cells){
    cell.addEventListener('click', () => alert('hey'))
}
this doesn't work
*/

/*
cells.forEach(cell => cell.addEventListener('click', () => alert('hey')))
using the above, clicking once results in a myriad of alerts that say 'hey'
*/


