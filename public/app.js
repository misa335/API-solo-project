const getbtn = document.querySelector('.get');
const view1 = document.querySelector('.view1');

getbtn.addEventListener('click', async () => {
    await fetch('http://localhost:3000/api/cafe')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        view1.innerText = JSON.stringify(data);
    });
});

const getSglBtn = document.querySelector('.singleGet');

getSglBtn.addEventListener('click', async () => {
    let idOrName = document.getElementById('idName').value;
    await fetch(`http://localhost:3000/api/cafe/${idOrName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        view1.innerText = JSON.stringify(data);
    });
});

const postbtn = document.querySelector('.post');
postbtn.addEventListener('click', async (req, res) => {
    
    await fetch('http://localhost:3000/api/cafe')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        view1.innerText = JSON.stringify(data);
    });
});

const putbtn = document.querySelector('.put');
putbtn.addEventListener('click', async () => {

    await fetch('http://localhost:3000/api/cafe/post')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        view1.innerText = JSON.stringify(data);
    });
});


const deletebtn = document.querySelector('.delete');
deletebtn.addEventListener('click', async (req, res) => {
    let idOrName = document.getElementById('idName').value;
    console.log(idOrName);
    await fetch(`http://localhost:3000/api/cafe/delete/${idOrName}`)
    // .then(res.status(202));
    // await fetch('http://localhost:3000/api/cafe/post')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        view1.innerText = JSON.stringify(data);
    });
});
