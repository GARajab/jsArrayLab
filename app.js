const movies = ["Barbie", "Arrival", "Get Out", "Coco"]

movies[0] = "hamada"

movies.pop()

movies.push("hamada")

const firstIndex = movies[0]

movies.push("Parasite", "Dune")
movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']

movies.unshift("Jungle Book", "Jungle Book")
movies.shift()

console.log(movies)

console.log(firstIndex.substring(0, 3))

as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

for (let movie of movies) {
  console.log(movie)
}

for (let idx = 0; idx < movies.length; idx++) {
  console.log(`${idx + 1}. ${movies[idx]}`)
  console.log(movies.indexOf("Arrival"))
}

for (let movie of movies) {
  console.log(movie)
}

const books = []
books.push("The Shining", "Pride and Prejudice", "quran", "sunna")
console.log(books[1])
books[1] = "Dune"
console.log(books)

for (let i = 0; i < books.length; i++) {
  console.log(books[i])
}

for (let book of books) {
  console.log(book)
}
