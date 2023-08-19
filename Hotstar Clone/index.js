let movies = [
{
    name: 'Loki',
    des: 'hn j idkk miod,mdfo j okmdjmjcujmn jnedhn hd hcnjhd jhc hd nchu hcnhdj cnhdunmc hdnjcujd jhcbhdnjc jhdhdnc jhdujmksimnc yhftysb',
    image: 'images/slider 1.png'
},
{
    name: 'Falcon and the Winter Soldier',
    des: 'hn j idkk miod,mdfo j okmdjmjcujmn jnedhn hd hcnjhd jhc hd nchu hcnhdj cnhdunmc hdnjcujd jhcbhdnjc jhdhdnc jhdujmksimnc yhftysb',
    image: 'images/slider 2.png'
},
{
    name: 'Wanda Vision',
    des: 'hn j idkk miod,mdfo j okmdjmjcujmn jnedhn hd hcnjhd jhc hd nchu hcnhdj cnhdunmc hdnjcujd jhcbhdnjc jhdhdnc jhdujmksimnc yhftysb',
    image: 'images/slider 3.png'
},
{
    name: 'Raya and the Last Dragon',
    des: 'hn j idkk miod,mdfo j okmdjmjcujmn jnedhn hd hcnjhd jhc hd nchu hcnhdj cnhdunmc hdnjcujd jhcbhdnjc jhdhdnc jhdujmksimnc yhftysb',
    image: 'images/slider 4.png'
},
{
    name: 'Luca',
    des: 'hn j idkk miod,mdfo j okmdjmjcujmn jnedhn hd hcnjhd jhc hd nchu hcnhdj cnhdunmc hdnjcujd jhcbhdnjc jhdhdnc jhdujmksimnc yhftysb',
    image: 'images/slider 5.png'
}
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    };

    let slide= document.createElement('div');
    var  imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className= 'slider';
    content.className= 'slide_content';
    h1.className= 'movie_title';
    p.className= 'movie_des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
    
};

for(let i=0; i<3; i++) {
    createSlide();
};

setInterval(() => {
    createSlide();
}, 3000);


// video card container 
const videoCards= [...document.querySelectorAll('.video_card')];

videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    });
});

// card sliders
let cardContainers = [...document.querySelectorAll('.card_container')];
let prebtn = [...document.querySelectorAll('.pre_btn')];
let nxtbtn = [...document.querySelectorAll('.next_btn')];

cardContainers.forEach((item, i) => {
    let containerDimentions= item.getBoundingClientReact();
    let containerwidth= containerDimentions.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth - 200;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth + 200;
    })
})