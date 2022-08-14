
document.getElementById("myButton").onclick = function () {
    location.href = "www.yoursite.com";
};
document.getElementById("myButton1").onclick = function () {
    location.href = "www.yoursite.com";
};




let email = document.getElementById("email");
let send_btn = document.getElementById("submit");

let table_data = document.querySelector(".table_data");
const datas = [];
let id = 0;
function sendData() {
    if (
        email.value != "") {
        id++;
        let obj = {
            id: id,
            email: email.value,
        };
        datas.push(obj);
        let json_data = JSON.stringify(datas);
        localStorage.setItem("datas", json_data);
        let get_datas = localStorage.getItem("datas");
        let json_parse = JSON.parse(get_datas);

        let table = document.getElementById("table");
        table.remove();

        let new_table = document.createElement("table");
        new_table.setAttribute("id", "table");

        let tr_th = document.createElement("tr");
        let th_email = document.createElement("th");
        th_email.innerHTML = "Email";

        tr_th.append(
            th_email,

        );
        new_table.append(tr_th);

        for (let i = 0; i < json_parse.length; i++) {
            let tr_td = document.createElement("tr");

            let td_email = document.createElement("td");
            td_email.innerHTML = datas[i].email;

            tr_td.append(
                td_email,
            );
            new_table.append(tr_td);
        }

        table_data.append(new_table);

        email.value = "";
    } else {
        alert("Fill in the inputs !!!");
    }
    console.log(datas);
}

send_btn.addEventListener("click", sendData);

let table = document.getElementById("table");
let get_datas = localStorage.getItem("datas");
let json_parse = JSON.parse(get_datas);

for (let i = 0; i < json_parse.length; i++) {
    let tr_td = document.createElement("tr");

    let td_email = document.createElement("td");
    td_email.innerHTML = json_parse[i].email;
    tr_td.append(
        td_email,
        table.append(tr_td));
}


