let newcommentForm1 = document.getElementById('comment11')
let newcommentForm2 = document.getElementById('comment22')
let newcommentForm3 = document.getElementById('comment3')
let postedComment1 = document.getElementById('comment1')
let postedComment2 = document.getElementById('comment2')
let postedComment3 = document.getElementById('com3')
var today = new Date();

var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

newcommentForm1.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName1 = document.getElementById('komentar1').value
    let txcomment1 = document.getElementById('komentar12').value

    html = `<div class="commentStyle">
    <h4>${commName1}:</h4>
    <p class="komentarr">${txcomment1}</p>
    <p class="dataa">${date}</p>
</div>`
postedComment1.innerHTML += html
})

newcommentForm2.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName2 = document.getElementById('komentar2').value 
    let txcomment2 = document.getElementById('komentar22').value

    html = `<div class="commentStyle">
    <h4>${commName2}:</h4>
    <p class="komentarr">${txcomment2}</p>
    <p class="dataa">${date}</p>
</div>`
postedComment2.innerHTML += html
})
newcommentForm3.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName3 = document.getElementById('komentar3').value
    let txcomment3 = document.getElementById('komentar32').value

    html = `<div class="commentStyle">
    <h4>${commName3}:</h4>
    <p class="komentarr">${txcomment3}</p>
    <p class="dataa">${date}</p>
</div>`
    postedComment3.innerHTML += html
})
