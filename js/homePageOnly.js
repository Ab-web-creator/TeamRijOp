const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')

const pageOnePlaceHolderV = document.querySelector('.pageOnePlaceHolderV')



const button1_1 = document.createElement("div") 
 button1_1.classList.add("button1_1")

const button1_2 = document.createElement("div")
 button1_2.classList.add("button1_2")

const button1_3 = document.createElement("div")
 button1_3.classList.add("button1_3")


const button2_1 = document.createElement("div")
 button2_1.classList.add("button1_1")

const button2_2 = document.createElement("div")
 button2_2.classList.add("button1_2")

const button2_3 = document.createElement("div")
 button2_3.classList.add("button1_3")

 
const button3_1 = document.createElement("div")
 button3_1.classList.add("button1_1")

const button3_2 = document.createElement("div")
 button3_2.classList.add("button1_2")

const button3_3 = document.createElement("div")
 button3_3.classList.add("button1_3")

 
const button4_1 = document.createElement("div")
 button4_1.classList.add("button1_1")

const button4_2 = document.createElement("div")
 button4_2.classList.add("button1_2")

const button4_3 = document.createElement("div")
 button4_3.classList.add("button1_3")
 
pageOnePlaceHolderV.style.display = 'inline'

button1_1.display = 'initial'
button1_2.display = 'initial'
button1_3.display = 'initial'

button2_1.style.display = 'none'
button2_2.style.display = 'none'
button2_3.style.display = 'none'

button3_1.style.display = 'none'
button3_2.style.display = 'none'
button3_3.style.display = 'none'

button4_1.style.display = 'none'
button4_2.style.display = 'none'
button4_3.style.display = 'none'


const Vinbutton1_1 = document.querySelector('.Vinbutton1_1')
 Vinbutton1_1.classList.add("Vinbutton1_1")
 Vinbutton1_1.innerText = ""
 Vinbutton1_1.addEventListener('click', function() {
	 
	 
    Vinbutton1_1.classList.toggle("Vinbutton1_1wide")
    Vinbutton1_2.classList.remove("Vinbutton1_2wide") 
	Vinbutton1_3.classList.remove("Vinbutton1_3wide")
 textInButton1_1.classList.toggle("textInButton1_1Expand")
 textInButton1_2.classList.remove("textInButton1_2Expand")
 textInButton1_3.classList.remove("textInButton1_3Expand")
    Vinbutton1_2.classList.remove("Vinbutton1_2high1")
	Vinbutton1_1.classList.remove("Vinbutton1_1high1")
	
})

const Vinbutton1_2 = document.querySelector('.Vinbutton1_2')
 Vinbutton1_2.classList.add("Vinbutton1_2")
 Vinbutton1_2.innerText = ""
 Vinbutton1_2.addEventListener('click', function() {
	  
    Vinbutton1_1.classList.remove("Vinbutton1_1wide")
    Vinbutton1_2.classList.toggle("Vinbutton1_2wide") 
	Vinbutton1_3.classList.remove("Vinbutton1_3wide")
 textInButton1_1.classList.remove("textInButton1_1Expand")
 textInButton1_2.classList.toggle("textInButton1_2Expand")
 textInButton1_3.classList.remove("textInButton1_3Expand")
    Vinbutton1_1.classList.toggle("Vinbutton1_1high1")
    Vinbutton1_2.classList.remove("Vinbutton1_2high1")
})

const Vinbutton1_3 = document.querySelector('.Vinbutton1_3')
 Vinbutton1_3.classList.add("Vinbutton1_3")
 Vinbutton1_3.innerText = ""
 Vinbutton1_3.addEventListener('click', function() {
	 
     Vinbutton1_1.classList.remove("Vinbutton1_1wide")
    Vinbutton1_2.classList.remove("Vinbutton1_2wide") 
	Vinbutton1_3.classList.toggle("Vinbutton1_3wide")
 textInButton1_1.classList.remove("textInButton1_1Expand")
 textInButton1_2.classList.remove("textInButton1_2Expand")
 textInButton1_3.classList.toggle("textInButton1_3Expand")
	 
	Vinbutton1_1.classList.toggle("Vinbutton1_1high1")
	Vinbutton1_2.classList.toggle("Vinbutton1_2high1")
})





const textInButton1_1 = document.createElement("div")
 textInButton1_1.classList.add("textInButton1_1")
//  textInButton1_1.classList.add("textInButton1_1Expand")


const textInButton1_2 = document.createElement("div")
 textInButton1_2.classList.add("textInButton1_2")

const textInButton1_3 = document.createElement("div")
 textInButton1_3.classList.add("textInButton1_3")


const textInButton2_1 = document.createElement("div")
 textInButton2_1.classList.add("textInButton1_1")

const textInButton2_2 = document.createElement("div")
 textInButton2_2.classList.add("textInButton1_2")

const textInButton2_3 = document.createElement("div")
 textInButton2_3.classList.add("textInButton1_3")


const textInButton3_1 = document.createElement("div")
 textInButton3_1.classList.add("textInButton1_1")

const textInButton3_2 = document.createElement("div")
 textInButton3_2.classList.add("textInButton1_2")

const textInButton3_3 = document.createElement("div")
 textInButton3_3.classList.add("textInButton1_3")


const textInButton4_1 = document.createElement("div")
 textInButton4_1.classList.add("textInButton1_1")

const textInButton4_2 = document.createElement("div")
 textInButton4_2.classList.add("textInButton1_2")

const textInButton4_3 = document.createElement("div")
 textInButton4_3.classList.add("textInButton1_3")



 pageOnePlaceHolder.appendChild(button1_1)
 pageOnePlaceHolder.appendChild(button1_2)
 pageOnePlaceHolder.appendChild(button1_3)
 
 pageOnePlaceHolder.appendChild(button2_1)
 pageOnePlaceHolder.appendChild(button2_2)
 pageOnePlaceHolder.appendChild(button2_3)

 pageOnePlaceHolder.appendChild(button3_1)
 pageOnePlaceHolder.appendChild(button3_2)
 pageOnePlaceHolder.appendChild(button3_3)

 pageOnePlaceHolder.appendChild(button4_1)
 pageOnePlaceHolder.appendChild(button4_2)
 pageOnePlaceHolder.appendChild(button4_3)



 button1_1.appendChild(textInButton1_1)
 button1_2.appendChild(textInButton1_2)
 button1_3.appendChild(textInButton1_3)

 button2_1.appendChild(textInButton2_1)
 button2_2.appendChild(textInButton2_2)
 button2_3.appendChild(textInButton2_3)

 button3_1.appendChild(textInButton3_1)
 button3_2.appendChild(textInButton3_2)
 button3_3.appendChild(textInButton3_3)

 button4_1.appendChild(textInButton4_1)
 button4_2.appendChild(textInButton4_2)
 button4_3.appendChild(textInButton4_3)



textInButton1_1.innerText = 'Unieke haal en  breng service \n   Een goede rijong is ger \n onderdeel sluit ke haal en  breng service\n Een goede rijopleiding is ger \n onderdeel slui'
textInButton1_2.innerText = 'U haal en  breng service \n   Een goede rijong is ger \n onderdeel sluit ke haal en  breng service\n Een goede rijopleiding is ger \n onderdeel slui'
textInButton1_3.innerText = 'breng service \n   Een goede rijong is ger \n onderdeel sluit ke haal en  breng service\n Een goede rijopleiding is ger \n onderdeel slui'

textInButton2_1.innerText = 'Text2_1'
textInButton2_2.innerText = 'Text2_2'
textInButton2_3.innerText = 'Text2_3'

textInButton3_1.innerText = 'Text3_1'
textInButton3_2.innerText = 'Text3_2'
textInButton3_3.innerText = 'Text3_3'

textInButton4_1.innerText = 'Text4_1'
textInButton4_2.innerText = 'Text4_2'
textInButton4_3.innerText = 'Text4_3'





const arrowcha = document.querySelector('.arrow')

const mainDiv = document.querySelector('.section-container')
const dynamicContainer = document.querySelector('.dynamicContainer')

const pageLogo = document.createElement('img')
pageLogo.setAttribute('class', 'pageLogo')
pageLogo.src = './images/logoRijopleiding.png'

dynamicContainer.appendChild(pageLogo)

const blueZoneContainer = document.querySelector('.blueZoneContainer')

const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false

// const closeLink = document.querySelector('.closeLink')
// closeLink.disabled = true

function linkImageSource(link1, link2, link3) {
  imageResult1.src = link1
  imageResult2.src = link2
  imageResult3.src = link3
}

let isDescOpen = false


const blur2 = document.querySelector('.blur2')

const link1 = document.querySelector('.link_1_1')
const link2 = document.querySelector('.link_1_2')
const link3 = document.querySelector('.link_1_3')

const plus_sign = document.querySelector('.plus_sign')
const plus_sign1 = document.querySelector('.plus_sign1')
const plus_sign2 = document.querySelector('.plus_sign2')
const plus_sign3 = document.querySelector('.plus_sign3')


mainDiv.addEventListener('scroll', () => {
  
	const scrolledHeight = mainDiv.scrollTop

  blur2.style.display = 'none'
	
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 0.1) {
	pageOnePlaceHolderV.style.display = 'initial'}
  
  if (scrolledHeight >= 0.1 && scrolledHeight <= page1.scrollHeight * 0.9) {pageOnePlaceHolderV.style.display = 'none'
		
    textInButton1_1.classList.remove("textInButton1_1Expand")
	textInButton1_2.classList.remove("textInButton1_2Expand")
	textInButton1_3.classList.remove("textInButton1_3Expand")				}
																			
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 0.5) { 
  button1_1.style.display = ''
  button1_2.style.display = ''
  button1_3.style.display = ''
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none' 
	  
	  
	  
	  
  }
	
 if (scrolledHeight > page1.scrollHeight * 0.5 &&
    scrolledHeight <= page1.scrollHeight * 1.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = ''
  button2_2.style.display = ''
  button2_3.style.display = ''
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none'
  }

if (scrolledHeight > page1.scrollHeight * 1.5 &&
    scrolledHeight <= page1.scrollHeight * 2.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = ''
  button3_2.style.display = ''
  button3_3.style.display = ''
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none'
  }
  
if (scrolledHeight > page1.scrollHeight * 2.5 &&
    scrolledHeight <= page1.scrollHeight * 3.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = ''
  button4_2.style.display = ''
  button4_3.style.display = ''
  }


})




