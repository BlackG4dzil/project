let box1 = document.querySelector('.box')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let logo = document.querySelector('.logo')
let mid = document.querySelector('.mid')
let description = document.querySelector('.description')
let big_pepsi = document.querySelector('#big-pepsi')
let right = document.querySelector('.right')
let open_two = document.querySelector('#open-two')
let sidenav = document.querySelector('.sidenav')
let wrap = document.querySelector('.wrap')
let screen_three = document.querySelector('.screen-three')
let black = document.querySelector('.black')
let pink = document.querySelector('.pink')
let wrapper = document.querySelector('.wrapper')
let imges1 = document.querySelectorAll('.img1');
let imges = document.querySelectorAll('.img2');
let bio = document.querySelectorAll('.bio');
let message = document.querySelector('.message');
let data = document.querySelector('#data');
let sport = document.querySelector('#sport');
let look = document.querySelector('#look');

// for (let item1 of imges1) {
//     item1.onmouseenter = () =>{
//         item1.classList.add('active_animation')
//     }
// }
// for (let item of imges) {
//     item.onmouseleave = () =>{
//         for (let item1 of imges1) {
//             item1.classList.remove('active_animation')
//         }
//     }
// }




let elements = document.querySelectorAll('.item2');

const open_another_page = (page_number) =>{
    let screens = document.querySelectorAll('.screen')
    for(let item of screens){
        item.classList.remove('screen-active')
    }
    
    screens[page_number - 1].classList.add('screen-active')
    if(screens.classList = 'screen-active'){
        for (let i = 0; i < elements.length; i++) {
            setTimeout(() =>{
                elements[i].classList.add('active')
            },1000)
        }
    }
   
}





open_two.onclick = () =>{
    setTimeout(() =>{
        box3.classList.add('active2')
        setTimeout(() =>{
            box2.classList.add('active2')
            setTimeout(() =>{
                box1.classList.add('active2')
                setTimeout(() =>{
                        description.classList.add('active2')
                        setTimeout(() =>{
                            big_pepsi.classList.add('active2')
                        }, 100)
                    }, 100)
            }, 100)
        }, 100)
    }, 100)
    setTimeout(() =>{
        look.classList.add('active')
    },300)
    setTimeout(() =>{
        open_another_page(2)
    }, 1000)
}

data.onclick = () =>{
    setTimeout(() =>{
        box3.classList.add('active2')
        setTimeout(() =>{
            box2.classList.add('active2')
            setTimeout(() =>{
                box1.classList.add('active2')
                setTimeout(() =>{
                        description.classList.add('active2')
                        setTimeout(() =>{
                            big_pepsi.classList.add('active2')
                        }, 100)
                    }, 100)
            }, 100)
        }, 100)
    }, 100)
    setTimeout(() =>{
        look.classList.add('active')
    },300)
    setTimeout(() =>{
        open_another_page(2)
    }, 1000)
}


right.onclick = () =>{
    open_another_page(1)
}
for (let i = 0; i < elements.length; i++) {
    sport.onclick = function(){
        setTimeout(() =>{
            box3.classList.add('active2')
            setTimeout(() =>{
                box2.classList.add('active2')
                setTimeout(() =>{
                    box1.classList.add('active2')
                    setTimeout(() =>{
                            description.classList.add('active2')
                            setTimeout(() =>{
                                big_pepsi.classList.add('active2')
                            }, 100)
                        }, 100)
                }, 100)
            }, 100)
        }, 100)
        setTimeout(() =>{
            open_another_page(3)
            setTimeout(() =>{
                wrap.classList.add('active')
                black.classList.add('active')
                pink.classList.add('active')
                message.classList.add('active_3')
            },1000)
        }, 1000)
        for (let i = 0; i < elements.length; i++) {
            setTimeout(() =>{
                elements[i].classList.add('active2')
            },400)
            setTimeout(() =>{
                look.classList.add('active2')
            })
        }
    }
}


setTimeout(() =>{
    box3.classList.add('active')
    setTimeout(() =>{
        box2.classList.add('active')
        setTimeout(() =>{
            box1.classList.add('active')
            logo.classList.add('active')
            setTimeout(() =>{
                mid.classList.add('active')
                right.classList.add('active')
                sidenav.classList.add('active')
                setTimeout(() =>{
                    description.classList.add('active')
                    setTimeout(() =>{
                        big_pepsi.classList.add('active')
                    }, 300)
                }, 300)
            }, 500)
        }, 500)
    }, 500)
}, 2000)


