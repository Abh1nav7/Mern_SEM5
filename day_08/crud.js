//json -->javascript object notation 
// json server--> this gives feature to create database locally 

fetch("http://localhost:3000/students")
.then(res => res.json())
.then(data => {
    const tableBody = document.getElementById("tableBody");
    data.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
        `;
        tableBody.appendChild(row);
    });
});