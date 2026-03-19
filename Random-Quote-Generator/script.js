const quotes=[
    "a",
    "b",
    "c",
    "d"
];
const button = document.querySelector('button');
const quote=document.querySelector('h1');
button.addEventListener('click', () => {
    const index = Math.floor(Math.random()*4);
    quote.textContent=quotes[index]
})