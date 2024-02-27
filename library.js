let library = [];

function addBook (title, authtor, year, genre, pages) {
library.push({title, authtor, year, genre, pages});
}

function removeBook (bookTitle) {
	library = library.filter(book => book.title !== bookTitle);
}

function findBooksByAuthor (author) {
	return library.filter(book => book.author === author);
}

function filterBooksByGenre (genre) {
	return library.filter(book => book.genre === genre);
}

function genreReport () {
	const report = {};
	library.forEach(book => {
		report[book.genre] = (report[book.genre] || 0) + 1;
	});
	return report;
}

function averagePagesReport () {
	if (library.length === 0) return 0;
	const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
	return totalPages / library.length;
}

function booksSortedByYear () {
	return library.sort((a, b) => b.year - a.year);
}

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
console.log(filterBooksByGenre("Фэнтези"));
console.log(genreReport());
console.log(`Среднее количество страниц: ${averagePagesReport()}`);

