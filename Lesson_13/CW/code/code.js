// let url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
// let rec = new XMLHttpRequest();


// rec.open("GET", url);


// rec.addEventListener("readystatechange", () =>{
// 	if(rec.readyState === 4 && rec.status >= 200 && rec.status < 300){
// 		showCurency(JSON.parse(rec.responseText));
// 	}
	
// });

// rec.send();
// function showCurency (arr){
//     arr.forEach(element => { 
// 		const {txt, rate} = element
// 		console.log(txt)
// 		const tr =document.createElement("tr");
// 		const txtTd =document.createElement ("td");
// 		const rateTd =document.createElement ("td");
// 		txtTd.innerText=txt;
// 		rateTd.innerText=rate;
// 		tr.append(txtTd, rateTd);
// 		document.querySelector("tbody").append(tr);
// 		});
	
// }
 let url ="https://swapi.dev/api/planets";
//створюємо запит на сервер за допомогою fetch
 const data =fetch(url, {method:"get"});
 //робота з запитом, обробка як Promise
 let data1 = data.then((rez)=> rez.json(), (error) => console.error(error));

 data1.then((rez1)=>{
	document.write(rez1.results)
	console.log (rez1)
 })
