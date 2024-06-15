var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


console.log(`author name is ${library[0].author} and ${library[0].title} and ${library[0].readingStatus}`);
console.log(`author name is ${library[1].author} and ${library[1].title} and ${library[1].readingStatus}`);
console.log(`author name is ${library[2].author} and ${library[2].title} and ${library[2].readingStatus}`);




function add(){

const fname=document.getElementById("fname").value;
const lname=document.getElementById("lname").value;
const des=document.getElementById("des").value;

const tb=document.getElementById("tb1");

const tr=document.createElement("tr");

const td=document.createElement("td");


const btn=document.createElement("button");
if(!fname || ! lname || !des)
    {
        alert("enter data!!");
        return;
    }

td.innerHTML=fname;
btn.innerHTML="detail";

btn.addEventListener("click",function()
{
        if(!fname || ! lname || !des)
            {
                alert("enter data!!");
                return;
            }
    const div=document.createElement("div");
    const div1=document.createElement("div");
    const div2=document.createElement("div");

    const sec=document.getElementById("sec");

    div.innerHTML=fname;
    div1.innerHTML=lname;
    div2.innerHTML=des;

    sec.appendChild(div);
    sec.appendChild(div1);
    sec.appendChild(div2);


    
})

tb.appendChild(tr);
tr.appendChild(td);
tr.appendChild(btn);


 document.getElementById("fname").value="";
 document.getElementById("lname").value="";
 document.getElementById("des").value="";

}

const fruits=['apple','banana','orange','mango'];

console.log(fruits.splice(2,1));
console.log(fruits);


