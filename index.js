const searchProducts=()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(data=>showDetails(data))

}

//ifte variables...
//////////////////////////////
let nmode = 0; //l = 0, n = 1
let count_product = 0;
let total_cost = 0;
let delivary_cost = 0;
let m = [];
let card_array = [];  
for(let i=0 ; i<=100 ; i++) m[i]=0;
let money_ase = 1000;
let tk_dibe = 0;
let sortt = 3;
let p = 1;
let r = 1;
//////////////////////////////

//ifte function....
//////////////////////////////

// navingation bar
const body = document.getElementById('body');
const navbox = document.getElementById('navbar')  
const navRight = document.getElementById('nav_right');
const nav_name = document.getElementById('shop_name'); 
const slide_bar = document.getElementById('home');
const Pro = document.getElementById('Pro');
const total_product = document.getElementById('total_product');
const cost = document.getElementById('cost');
const product_left = document.getElementById('product_left');
const d_cost = document.getElementById('d_cost');
const pay = document.getElementById('t_cost');
const ord = document.getElementById('order_congo');
const od = document.getElementById('od');
const bal = document.getElementById('bal');
const rfilter = document.getElementById('rfilter');
const pfilter = document.getElementById('pfilter');
const nfilter = document.getElementById('nfilter');
const night_name = document.getElementById('night_name'); 
const contact= document.getElementById('contact');
const form= document.getElementById('form');
const box1= document.getElementById('box1');
const box2= document.getElementById('box2');
const box3= document.getElementById('box3');
const box4= document.getElementById('box4');

nav_name.innerHTML = "Meow Shop";
navbox.classList.add("text-center","sm:flex","sm:justify-between");

          
navbox.classList.add("bg-slate-950","py-5","fixed","w-full","px-10" ); 
nav_name.classList.add("text-yellow-500","text-3xl")
navRight.classList.add("sm:text-2xl","flex","text-gray-50","sm:gap-5","text-xl","gap-3");
     


function night()
{
     if(nmode==0) nmode = 1;
     else nmode = 0;
     night_mode();
}
   
 
function night_mode()
{
     //navbar : 
     if(nmode==0) 
     {
          navbox.classList.remove("bg-slate-950");
          nav_name.classList.remove("text-yellow-500");
          navbox.classList.add("bg-lime-500");
          nav_name.classList.add("text-gray-950");
          body.classList.remove("bg-slate-900","text-gray-50");
          body.classList.add("bg-gray-50","text-gray-950");
          product_left.classList.remove("bg-gray-50"); 
          product_left.classList.add("bg-green-100");
          night_name.innerHTML="Day";  
          contact.classList.remove("bg-gray-800","text-white");
          contact.classList.add("bg-gray-400","text-black");
          form.classList.remove("bg-slate-900");
          form.classList.add("bg-slate-300");
          form.classList.remove("text-white");
          form.classList.add("text-black");
          box1.classList.remove("bg-gray-500");
          box1.classList.add("bg-white");
          box2.classList.remove("bg-gray-500");
          box2.classList.add("bg-white");
          box3.classList.remove("bg-gray-500");
          box3.classList.add("bg-white");
          box4.classList.remove("bg-gray-500");
          box4.classList.add("bg-white");

          const target = document.getElementById("target").value;
          if(target.length>0) target_card(target);
          else show_card();
     }
     else 
     {
          nav_name.classList.remove("text-gray-950");
          navbox.classList.remove("bg-lime-500");
          navbox.classList.add("bg-slate-950");
          nav_name.classList.add("text-yellow-500");
          body.classList.remove("bg-gray-50","text-gray-950");
          body.classList.add("bg-slate-900","text-gray-50");
          product_left.classList.remove("bg-green-100");
          product_left.classList.add("bg-gray-50");
          night_name.innerHTML = "Night";  
          contact.classList.remove("bg-gray-400","text-black");
          contact.classList.add("bg-gray-800","text-white");
          form.classList.remove("bg-slate-300");
          form.classList.add("bg-slate-900");
          form.classList.remove("text-black");
          form.classList.add("text-white");
          box1.classList.remove("bg-white");
          box1.classList.add("bg-gray-500");
          box2.classList.remove("bg-white");
          box2.classList.add("bg-gray-500");
          box3.classList.remove("bg-white");
          box3.classList.add("bg-gray-500");
          box4.classList.remove("bg-white");
          box4.classList.add("bg-gray-500");

          const target = document.getElementById("target").value;
          if(target.length>0) target_card(target);
          else show_card();
     }

     //slide bar


     //product


     
}

//product:
Pro.classList.add("py-20","text-center"); 
function showDetails(products){
    const details = document.getElementById('product_right');
    let ind = 0;
    products.forEach(element => { 
     card_array[ind]=[element.id,element.title.slice(0,20),element.price,element.image,element.rating.rate];
     ind++;
    });
    show_card();
}   
function sorting()
{
     // sortt = 1 (rating)
    // sortt = 2 (id)
    // sortt = 3 (price)
    if(sortt==1)
    {
          for(let i=0 ; i<card_array.length ; i++)
          {
               for(let j=0 ; j<card_array.length ; j++)
               {
                    if(r==0 && card_array[i][4]>card_array[j][4]) 
                    {
                         let box = card_array[i];
                         card_array[i]=card_array[j];
                         card_array[j]=box;
                    }
                    else if(r && card_array[i][4]<card_array[j][4]) 
                    {
                         let box = card_array[i];
                         card_array[i]=card_array[j];
                         card_array[j]=box;
                    }
               }
          }
          show_card();
    }
    else if(sortt==3)
    {
          for(let i=0 ; i<card_array.length ; i++)
          {
               for(let j=0 ; j<card_array.length ; j++)
               {
                    if(p==0 && card_array[i][2]>card_array[j][2]) 
                    {
                         let box = card_array[i];
                         card_array[i]=card_array[j];
                         card_array[j]=box;
                    }
                    else if(p && card_array[i][2]<card_array[j][2]) 
                    {
                         let box = card_array[i];
                         card_array[i]=card_array[j];
                         card_array[j]=box;
                    }
               }
          }
          show_card();
    } 
    else 
    {
          for(let i=0 ; i<card_array.length ; i++)
          {
               for(let j=0 ; j<card_array.length ; j++)
               {
                    if(card_array[i][0]>card_array[j][0]) 
                    {
                         let box = card_array[i];
                         card_array[i]=card_array[j];
                         card_array[j]=box;
                    }
               }
          }
          show_card();
    }
}
function pa()
{
     p = 1;
     sortt=3;
     document.getElementById("target").value=""; 
     sorting();
}
function pd()
{
     p = 0;
     sortt=3;
     document.getElementById("target").value=""; 
     sorting();
}
function ra()
{
     r = 1;
     sortt = 1;
     document.getElementById("target").value=""; 
     sorting();
}
function rd()
{
     r = 0;
     sortt = 1;
     document.getElementById("target").value=""; 
     sorting();
}
function normal()
{
     sortt = 2;
     document.getElementById("target").value=""; 
     sorting();
}
function search()
{
     document.getElementById("start").value="";
     document.getElementById("end").value="";
     const target = document.getElementById("target").value;
     if(target.length>0) target_card(target);
}
function range_price()
{
     const start = document.getElementById("start").value;
     const end = document.getElementById("end").value;
     document.getElementById("target").value=""; 
     if(start.length && end.length && start<=end) range_filter(start,end);
}
function star(value)
{
     if(value<=1) return "⭐";
     else if(value<=2) return "⭐⭐";
     else if(value<=3) return "⭐⭐⭐";
     else if(value<=4) return "⭐⭐⭐⭐";
     else return "⭐⭐⭐⭐⭐";
}
function remove(num,money)
{
     if(m[num]==0) {}
     else 
     {  
          m[num]--;
          total_cost -= money;
          if(total_cost<=0) total_cost = 0;
          count_product--;
          update();
     }
}

function add(num,money)
{
     m[num]++;
     total_cost += money;
     count_product++;
     update();
}
function update()
{
     total_product.innerHTML = count_product;
     if(count_product==0) 
     {
          d_cost.innerHTML = 0+'$';
          delivary_cost = 0;
     }
     else 
     {
          d_cost.innerHTML = 100+'$';
          delivary_cost = 100;
     }

     cost.innerHTML = total_cost.toFixed(2)+'$';
     if(total_cost>200 && total_cost<=500) 
     {
          let bad = ((total_cost*4)/100);
          
          let box = total_cost+delivary_cost-bad;
          tk_dibe = box;
          pay.innerHTML = box.toFixed(2)+'$';
     } 
     else if(total_cost>500)
     {
          let bad = ((total_cost*8)/100);
           
          let box = total_cost+delivary_cost-bad;
          tk_dibe = box;
          pay.innerHTML = box.toFixed(2)+'$';
     }
     else 
     {
          let box = total_cost+delivary_cost;
          tk_dibe = box;
          pay.innerHTML = box.toFixed(2)+'$';
     }

}
function order()
{
     if(count_product==0) {}
     else if(tk_dibe<=money_ase) alert("Thank you for showping!!!");
     else alert("Payment failed");
} 
function range_filter(start,end)
{
     if(nmode==0)
     {
          const details = document.getElementById('product_right');
          details.innerHTML = ''; // clear old cards
          for(let i=0 ; i<card_array.length ; i++)
          {
               if(card_array[i][2]>=start && card_array[i][2]<=end) {}
               else continue;
               const rating_star = star(card_array[i][4]);
               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-green-100 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
     else 
     {
          const details = document.getElementById('product_right');
          details.innerHTML = ''; // clear old cards
          for(let i=0 ; i<card_array.length ; i++)
          {
               if(card_array[i][2]>=start && card_array[i][2]<=end) {}
               else continue;
               const rating_star = star(card_array[i][4]);
               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-slate-950 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
}
function target_card(name)
{
     if(nmode==0)
     {
          const details = document.getElementById('product_right');
          details.innerHTML = ''; // clear old cards
          for(let i=0 ; i<card_array.length ; i++)
          {
               if(card_array[i][1].includes(name)==false) continue;
               
               const rating_star = star(card_array[i][4]);

               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-green-100 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
     else 
     {
          const details = document.getElementById('product_right');
          details.innerHTML = '';  
          for(let i=0 ; i<card_array.length ; i++)
          {
               if(card_array[i][1].includes(name)==false) continue;
               
               const rating_star = star(card_array[i][4]);

               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-slate-950 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-600 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
}
function show_card()
{
     if(nmode==0)
     {
          const details = document.getElementById('product_right');
          details.innerHTML = '';  
          for(let i=0 ; i<card_array.length ; i++)
          {
               const rating_star = star(card_array[i][4]);
               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-green-100 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-500 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-500 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
     else 
     {
          const details = document.getElementById('product_right');
          details.innerHTML = '';  
          for(let i=0 ; i<card_array.length ; i++)
          {
               const rating_star = star(card_array[i][4]);
               const div = document.createElement('div'); 
               div.innerHTML = `
                    <div class="border-0 shadow h-150 rounded-md bg-slate-950 sm:text-xl xl:text-2xl hover:scale-105 duration-500">
                    <div class="p-5">
                    <img src="${card_array[i][3]}"  class="lg:w-90 lg:h-90 w-80 h-80">
                    </div>
                    <div class="text-center">
                    <p class="text-center">${card_array[i][1]}</p>
                    <p class="text-center fw-bold">$<span>${card_array[i][2]}</span></p> 
                    <p>${rating_star}</p>
                    <div class=" lg:flex lg:justify-center gap-3 py-2">
                              <button onclick="add(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-500 rounded-md px-3 hover:scale-110">Add</button>
                              <button onclick="remove(${card_array[i][0]},${card_array[i][2]})" class="py-2 bg-yellow-500 rounded-md px-3 hover:scale-110">Remove</button>
                    </div>
                    </div>
                    </div>
               `;
               details.appendChild(div);
          }
     }
}


///////////////////////////////////////////////////
//araphat code....
function loadReviews() {
     fetch('https://dummyjson.com/comments')
     .then(res => res.json())
     .then(data => renderReviews(data))
}

function renderReviews(review)
{
     
     const reviews = document.getElementById('reviews');
     const allreviews = review.comments.slice(0,5);
     
     allreviews.forEach(r => {
          const div = document.createElement('div');
          div.className = "bg-gray-500 p-10 text-black m-10 rounded-lg w-[400px] flex-shrink-0";
          div.innerHTML = `
          <div class="flex items-center gap-2 text-white">
               <img src="photo/image10.png" alt="" class=" w-15 rounded-full">
               <p>${r.user.fullName}</p>
          </div>
          <p class="text-2xl mt-[30px]">${r.body}</p>
          <div class="flex gap-2 mt-[30px] items-center">
               <p class="bg-gray-200 p-2 rounded-3xl">
                    ${r.likes} likes 
               </p>
               <p class="bg-gray-300 border border-2 ml-[10px] rounded-full p-2 border-blue-900 cursor-pointer hover:bg-black hover:text-white">
                    helpful
               </p>
               <p class="bg-gray-300 ml-[10px] border border-2 rounded-full p-2 border-blue-900 cursor-pointer hover:bg-black duration-300 hover:text-white duration-300">
                    report</p>
          </div>
          `;
          reviews.appendChild(div);
     });
     
}

function message_submit()
{
     const show_message=document.getElementById("show_message")
     const name=document.getElementById("name");
     const email=document.getElementById("mail");
     const message=document.getElementById("message");
     const div=document.createElement('div');

     show_message.innerHTML='';

     if(name.value.length==0 || email.value.length==0 || message.value.length==0)
     {
          div.innerHTML='fill up the form correctly'
          show_message.appendChild(div)
     }
     else{
          div.innerHTML='Thanks you for fill up the form'
          show_message.appendChild(div)
     }

}

loadReviews();
show_card();
searchProducts();
night_mode();