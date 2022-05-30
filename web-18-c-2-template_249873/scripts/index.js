// Add the coffee to local storage with key "coffee"

let arr=JSON.parse(localStorage.getItem("coffee"))||[];
console.log(arr)
async function getData()
{
let url="https://masai-mock-api.herokuapp.com/coffee/menu";
 let res=await fetch(url);
 let maindata=await res.json();
 append(maindata.menu.data);
 localStorage.setItem("coffee",JSON.stringify(arr))
console.log(maindata.menu.data)
}
getData();
function append(coffeeData){
    if(coffeeData===undefined)
    {
        return false;
    }
    coffeeData.forEach(function(ele){
        let img_box=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src","ele.image");
        
        img_box.append(image);
        let price=document.createElement("p");
        price.innerText=ele.price;

        let add=document.createElement("button");
        add.setAttribute("id","add_to_bucket");
        add.innerText="Add to bucket";
        add.addEventListener("click",function(){
            myFunc(ele);
        });

        

        let cards=document.createElement("div");
        cards.setAttribute("id","cards");
        cards.append(img_box,price,add)
        arr.push(ele);
        document.getElementById("menu").append(cards);
    })
}
function myFunc(ele)
{
   console.log(ele)
}