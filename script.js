let quantity = 1

// Slider
let slides = document.querySelectorAll(".slide")
let index = 0

document.querySelector(".next")?.addEventListener("click",()=>{

    slides[index].classList.remove("active")
    slides[index].classList.add("exit")
    index = (index + 1) % slides.length
    slides[index].classList.add("active")

    setTimeout(()=>{
        slides.forEach(s=>s.classList.remove("exit"))
    },600)
})

document.querySelector(".prev")?.addEventListener("click",()=>{

    slides[index].classList.remove("active")
    slides[index].classList.add("exit")
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add("active")

    setTimeout(()=>{
    slides.forEach(s=>s.classList.remove("exit"))
    },600)
})

// EVENTS DATA

const events = [
{
id:"weekend",
name:"The Weeknd | Mumbai",
category:"music",
date:"Aug 21",
venue:"DY Patil Stadium",
price:10000,
img:"images/weekend.png",
tickets:{ early:8000, regular:10000 }
},
{
id:"rollingloud",
name:"Rolling Loud India",
category:"music",
date:"Sep 10",
venue:"Narendra Modi Stadium",
price:7500,
img:"images/rolling loud.png",
tickets:{ early:7000, regular:10000, vip:15000 }
},
{
id:"biswa",
name:"Inventions by Biswa Kalyan Rath",
category:"comedy",
date:"June 14",
venue:"Habitat Mumbai",
price:1200,
img:"images/biswacrop.jpg",
tickets:{ general:1200, vip:2500, table:4000 }
},
{
id:"ipl",
name:"MI vs CSK | IPL",
category:"sports",
date:"May 18",
venue:"Wankhede Stadium, Mumbai",
price:2500,
img:"images/iplcrop.jpg",
tickets:{ stands:2500, vip:10000, box:20000 }
},
{
id:"sunburn",
name:"Sunburn Festival",
category:"festival",
date:"Dec 27",
venue:"Goa Beach",
price:5000,
img:"images/sunburn.jpg",
tickets:{ earlybird:4000, general:5000, vip:8000, fanpit:12000 }
},
{
id:"keinemusik",
name:"Keinemusik",
category:"nightlife",
date:"June 12",
venue:"Mahalaxmi Race Course",
price:2500,
img:"images/keinemusikcrop.jpg",
tickets:{ earlybird:1500, general:2500, vip:4000, fanpit:7500 }
},
{
id:"mochakk",
name:"Mochakk India Tour | Mumbai",
category:"music",
date:"May 8",
venue:"Bayview Lawns Mumbai",
price:2500,
img:"images/Mochakk.jpg",
tickets:{ general:2500, vip:4000 }
},
{
id:"aakash",
name:"Daily Ka Kaam Hai By Aakash Gupta - Mumbai",
category:"comedy",
date:"Mar 13",
venue:"Habitat Club Khar",
price:2000,
img:"images/aakashcrop.jpg",
tickets:{ general:2000, vip:3500 }
},
{
id:"anyma",
name:"ANYMA presents AEDEN - Mumbai",
category:"nightlife",
date:"Nov 21",
venue:"Toyroom Mumbai",
price:2500,
img:"images/anymacrop.jpg",
tickets:{ general:2500, vip:4500, table:12000 }
},
{
id:"dua",
name:"Dua Lipa Live | Mumbai",
category:"music",
date:"Oct 12",
venue:"Jio World Garden",
price:6000,
img:"images/dua.jpg",
tickets:{early:5000, regular:6000, vip:9000}
},
{
id:"citymadrid",
name:"Man City vs Real Madrid | UCL",
category:"sports",
date:"Apr 9",
venue:"Etihad Stadium, Manchester",
price:9000,
img:"images/citymadrid.jpg",
tickets:{ standard:9000, vip:20000, hospitality:35000 }
},
{
id:"elclasico",
name:"Barcelona vs Real Madrid | El Clasico",
category:"sports",
date:"Oct 26",
venue:"Bernabeau, Madrid",
price:12000,
img:"images/elclasico.jpg",
tickets:{ standard:12000, vip:25000, box:40000 }
},

{
id:"championsfinal",
name:"UEFA Champions League Final",
category:"sports",
date:"May 31",
venue:"Wembley Stadium, London",
price:15000,
img:"images/uclfinal.jpg",
tickets:{ standard:15000, vip:35000, hospitality:60000 }
},

{
id:"ye",
name:"Ye Live | Delhi",
category:"music",
date:"Nov 5",
venue:"Jawaharlal Nehru Stadium",
price:7000,
img:"images/ye.jpg",
tickets:{ early:6000, regular:7000, vip:12000 }
},

{
id:"travis",
name:"Travis Scott | Circus Maximus Tour",
category:"music",
date:"Sep 18",
venue:"Indira Gandhi Arena, Delhi",
price:8000,
img:"images/travis.jpg",
tickets:{ early:7000, regular:8000, vip:15000 }
},
{
id:"martingarrix",
name:"Martin Garrix Live",
category:"nightlife",
date:"Dec 6",
venue:"BKC Grounds, Mumbai",
price:3000,
img:"images/garrix.jpg",
tickets:{ earlybird:2500, general:3000, vip:6000, table:15000 }
},
{
id:"afterlife",
name:"Afterlife Festival",
category:"festival",
date:"Jan 10",
venue:"Expo Grounds, Dubai",
price:6000,
img:"images/afterlife.jpg",
tickets:{ earlybird:5000, general:6000, vip:9000, backstage:18000 }
},
{
id:"zomaland",
name:"Zomaland Food Festival",
category:"festival",
date:"Feb 2",
venue:"JLN Stadium, Delhi",
price:1500,
img:"images/zomaland.jpg",
tickets:{ earlybird:1200, general:1500, vip:3000 }
},
{
id:"zakir",
name:"Zakir Khan | Papa Yaar Tour",
category:"comedy",
date:"July 7",
venue:"Shanmukhananda Hall, Mumbai",
price:1800,
img:"images/zakir.jpg",
tickets:{ general:1800, premium:3000, vip:4500 }
},
]


// Tickets Page

const params = new URLSearchParams(window.location.search)
const eventId = params.get("id")
const event = events.find(e => e.id === eventId)

if(event){
    document.getElementById("eventName").innerText = event.name
    const select = document.getElementById("ticketType")
    select.innerHTML = ""
    for(const type in event.tickets)
    {
        const price = event.tickets[type]

        select.innerHTML += `
        <option value="${price}">
        ${type.toUpperCase()} ₹${price}
        </option>
        `
    }

    select.addEventListener("change", updatePrice)
    document.getElementById("qty").innerText = quantity
    updatePrice()
}

// Events Page

const container = document.getElementById("eventsContainer")

if(container){
function displayEvents(list){
    container.innerHTML=""
    list.forEach(e=>{

        container.innerHTML += `

        <div class="event-card">
        <img src="${e.img}">
        <div class="event-info">
        <h3>${e.name}</h3>
        <p>${e.venue}</p>
        <p>${e.date}</p>
        <p>₹${e.price}</p>
        <a href="tickets.html?id=${e.id}">Book Ticket</a>
        </div>
        </div>
        `

    })
}
displayEvents(events)
} 

// Category Filter

document.querySelectorAll(".category-card").forEach(card=>{
    card.addEventListener("click",()=>{

        document.querySelectorAll(".category-card").forEach(c=>c.classList.remove("active"))
        card.classList.add("active")

        let category = card.dataset.category

        if(category==="all")
        {
        displayEvents(events)
        }
        else
        {
        displayEvents(events.filter(e=>e.category===category))
        }
    })
})

// Mobile Auto Slider

function nextSlide(){
    slides[index].classList.remove("active")
    slides[index].classList.add("exit")
    index=(index+1)%slides.length
    slides[index].classList.add("active")

    setTimeout(()=>{
    slides.forEach(s=>s.classList.remove("exit"))
    },600)
}

if(window.innerWidth<=768)
{
    setInterval(nextSlide,4000)
}

// Price Calculations & Quantity
function updatePrice(){
    let price = Number(document.getElementById("ticketType")?.value)

    if(!isNaN(price))
    {
        document.getElementById("total").innerText = price * quantity
        document.getElementById("qty").innerText = quantity
    }
}

function increase(){
    quantity++
    updatePrice()
}

function decrease(){
    if(quantity>1)
    {
        quantity--
        updatePrice()
    }
}