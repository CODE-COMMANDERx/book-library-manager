displayBook();
function save(){
	let bookName = document.getElementById("name").value;
	let bookAuthor = document.getElementById("author").value;
	let bookPrice = document.getElementById("price").value;

	if (bookName=='' || bookPrice == '' || bookAuthor == '')
	{
		let data = "<br><span class=\"red\">Empty Boxes Not allowed.</span>";
		document.getElementById("price").insertAdjacentHTML("afterend",data);
	}
	else{
	let oldBooks = localStorage.getItem("bookName");
	let oldBook = JSON.parse(oldBooks);

	if (oldBooks == null) {
			let books = [{"bookName":bookName,"bookPrice":bookPrice,"bookAuthor":bookAuthor}];
			let bookStr = JSON.stringify(books);
			localStorage.setItem("bookName",bookStr);
			displayBook();
	}
	else{
			let books = {"bookName":bookName,"bookPrice":bookPrice,"bookAuthor":bookAuthor};
			oldBook.push(books);
			let bookStr = JSON.stringify(oldBook);
			localStorage.setItem("bookName",bookStr);
			displayBook();
			document.getElementById("name").value = '';
					
	}
	}
}
function displayBook(){
	
	let books = localStorage.getItem("bookName");
	if (books == null)
	{
		let data = "<h2>Nothing To Show.</h2>";
		document.getElementById("table").innerHTML=data;
	}
		else{
			let book = JSON.parse(books);
			let data='';
			for(let i=0;i < book.length; i++)
			{
				data += "<tr><td>"+ (i+1) +"</td><td>"+book[i].bookName+"</td><td>"+book[i].bookAuthor+"</td><td>"+book[i].bookPrice+"</td></tr>";	
			}
			document.getElementById("table").innerHTML = data;
		}
}

function removeBook(){
	localStorage.removeItem("bookName");
	displayBook();
	}