document.addEventListener('DOMContentLoaded', (e) => {

const comForm = document.querySelector("form")
comForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const comOnDom = document.querySelector("#comment-div")
    const comH5 = document.createElement("h3")
    comH5.textContent = e.target.comment.value

    comOnDom.append(comH5)
})

fetch('http://localhost:3000/fruitArray')
.then((res) => {return res.json()})
.then((res) => {renderImages(res)})

function renderImages(fruitData) {
    fruitData.forEach(data => {
        const imagesOnDom = document.querySelector("#fruit-menu")
        const fruitImgs = document.createElement("img")
        fruitImgs.src = data.image
        
        imagesOnDom.append(fruitImgs)

        fruitImgs.addEventListener('click', (e) => {
            const detailH2 = document.querySelector("#detail-name")
            const detailImg = document.querySelector("#detail-img")
            const detailDesc = document.querySelector("#desc-blurb")
            const detailCarb = document.querySelector("#carbs")
            const detailProt = document.querySelector("#prot")
            const detailSug = document.querySelector("#sugar")
            const detailCal = document.querySelector("#cals")

            detailH2.textContent = data.name
            detailImg.src = data.image
            detailDesc.textContent = data.desc
            detailCarb.textContent = data.carb 
            detailProt.textContent = data.prot 
            detailSug.textContent = data.sug 
            detailCal.textContent = data.cal
  
        })
    })
}



fetch("https://foodish-api.herokuapp.com/api/")
.then((res) => {return res.json()})
.then((res) => {renderApi(res)})

function renderApi(apiData) {
    const footerSponsor = document.querySelector("#footer-img")
     footerSponsor.src = apiData.image
     footerSponsor.addEventListener('mouseover', (e) => {

        fetch("https://foodish-api.herokuapp.com/api/")
        .then((res) => {return res.json()})
        .then((res) => {renderNewApi(res)})
        function renderNewApi(newApi) {
             footerSponsor.src = newApi.image
        }
})
}
})