const quotes = [{"Simplicity is the ultimate sophistication.":" Leonardo da Vinci"}, {"Do what you can, with what you have, where you are.":"Theodore Roosevelt"},{"Happiness depends upon ourselves.":"Aristotle"},{"In the middle of every difficulty lies opportunity.":"Albert Einstein"}, {"With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.":"Quaid-e-Azam Muhammad Ali Jinnah"}, {"Nations are born in the hearts of poets; they prosper and die in the hands of politicians.":"Allama Iqbal"},{"A country without a strong army is like a house without a roof.":"Liaquat Ali Khan"},{"The best among you are those who have the best manners and character.":"Hazrat Muhammad ﷺ"}, {"I do not believe in taking the right decision, I take a decision and make it right.":"Quaid-e-Azam Muhammad Ali Jinnah"}, {"He who is not courageous enough to take risks will accomplish nothing in life.":"((Often attributed in Islamic tradition, paraphrased)"}]

console.log(quotes[9])

const defQuote = ()=>{
     let randomNum = Math.floor(Math.random()*10) 
    let quote = document.getElementById("text")
    let author = document.getElementById("author")
    quote.innerHTML = Object.keys(quotes[randomNum])
    author.innerHTML = Object.values(quotes[randomNum])
}

const newQuote = ()=>{
    let randomNum = Math.floor(Math.random()*10) 
    let quote = document.getElementById("text")
    let author = document.getElementById("author")
    quote.innerHTML = Object.keys(quotes[randomNum])
    author.innerHTML = Object.values(quotes[randomNum])
}

defQuote()

let new_quote = document.getElementById("new-quote")
new_quote.addEventListener("click", newQuote)