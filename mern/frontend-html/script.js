document.getElementById("name").value;
document.getElementById("msg").innerText="hello";
fetch("/students")
.then(res=>res.json())
.then(data=>console.log(data));