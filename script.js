const container = document.getElementById('container');

for(i=0; i<16; i++){
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('row')
    
    container.appendChild(div)
}
const row = container.querySelectorAll('div.flex.row');
console.log(row)
console.log(row[2])


    
    
for(i=0; i<row.length; i++){
    for(j=0; j<16; j++){
        const div = document.createElement('div')
        row[i].appendChild(div)
    }
}
    


