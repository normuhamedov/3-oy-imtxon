var elMoviesList = document.querySelector(".card_list")
elMoviesList.innerHTML = null
var moviesArray = movies.slice(0, 50)


var Lengs = document.querySelector(".lengs")
var allres = moviesArray.length;
var minres = `Search result: ${allres}`;
Lengs.innerHTML = minres



function render(params) {
    for (const item of moviesArray) {
        
        var wachTrailerA = document.createElement("a")
        wachTrailerA.href = `https://www.youtube.com/watch?v=${item.ytid}`
        wachTrailerA.setAttribute("class", "btn btn-outline-primary")
        wachTrailerA.setAttribute("target", "_blank")
        wachTrailerA.textContent = "Watch trailer"
        
        
        var moreInfoBtn = document.createElement("button")
        moreInfoBtn.type = "button"
        moreInfoBtn.setAttribute("class", "btn btn-outline-secondary")
        moreInfoBtn.textContent = "More info"
        
        var bookmarkBtn = document.createElement("button")
        bookmarkBtn.type = "button"
        bookmarkBtn.setAttribute("class", "btn btn-outline-success")
        bookmarkBtn.textContent = "Bookmark"
        
        var buttonWrapper = document.createElement("div")
        buttonWrapper.setAttribute("class", "d-flex justify-content-between flex-column flex-xl-row")
        
        buttonWrapper.appendChild(wachTrailerA);
        buttonWrapper.appendChild(moreInfoBtn);
        buttonWrapper.appendChild(bookmarkBtn);
        
        
        
        
        var h5Heading = document.createElement("h5")
        h5Heading.textContent = item.Title
        h5Heading.classList.add("card-title")
        
        
        
        var year_m = document.createElement("span")
        year_m.textContent = item.movie_year
        year_m.classList.add("mb-5")
        
        var Imdb_rating = document.createElement("span")
        Imdb_rating.textContent = item.imdb_rating
        Imdb_rating.classList.add("d-flex", "mb-10")
        
        var Categories = document.createElement("span")
        Categories.textContent = item.Categories
        Categories.classList.add("d-flex", "mb-10")
        
        var cardBodyWrapper = document.createElement("div")
        cardBodyWrapper.setAttribute("class", "card-body")
        
        
        cardBodyWrapper.appendChild(h5Heading)
        cardBodyWrapper.appendChild(year_m)
        
        cardBodyWrapper.appendChild(Imdb_rating)
        cardBodyWrapper.appendChild(Categories)
        cardBodyWrapper.appendChild(buttonWrapper)
        
        var cardImg = document.createElement("IMG")
        cardImg.src = `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`
        cardImg.classList.add("card-img-top")
        
        var card = document.createElement("div")
        card.classList.add("card")
        
        card.appendChild(cardImg)
        card.appendChild(cardBodyWrapper)
        
        var newLi = document.createElement("li")
        newLi.setAttribute("class", "col-sm-6 mb-3")
        
        newLi.appendChild(card)
        
        elMoviesList.appendChild(newLi)
    }
}

render(moviesArray)

