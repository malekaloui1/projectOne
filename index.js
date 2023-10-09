function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   
   if (predicate(element, index)) {
     
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }


function page1() {
    window.location.href = "file:///C:/Users/malek/OneDrive/Desktop/project1/projectOne/index1.html";
  }
function page2() {
    window.location.href = "file:///C:/Users/malek/OneDrive/Desktop/project1/projectOne/index2.html";
      }   

$(document).ready(function() {
        var imageUrls = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mommsen_p265.jpg/280px-Mommsen_p265.jpg",
            'https://study.com/cimages/multimages/16/hannibal_color2576148439539955103.jpg',
            'https://th.bing.com/th/id/OIP.X55evNhZ4E82-TEzurw68QHaJP?pid=ImgDet&rs=1',  
        ];
      
        var currentImageIndex = 0;
      
        var $bookimage1 = $('#img');
      
        
        $bookimage1.on('click', function() {
            currentImageIndex++;
      
            if (currentImageIndex >= imageUrls.length) {
                currentImageIndex = 0;
            }
            $bookimage1.attr('src', imageUrls[currentImageIndex]);
        });
  }); 

 function makeFamousMen(name,images,abouthim){
  return{
    name:name,
    images:images,
    abouthim:abouthim,
  }
} 

function MakeList1(name){
  return { 
  name:name, 
  list:[],
  add:add,
  removeElement:removeElement,
  }
  }
  
var add=function(name,images,abouthim){
  var item=makeFamousMen(name,images,abouthim)
  this.list.push(item)
    }

var removeElement=function(name){
  this.list =  filter(this.list,function(e,i){
  return e.name!==name
  })
     }   
     
function display(item){
  $('#m1').append(`<h3>${item.name}</h3>
  <img src=${item.images[0]} id="img">
  <p> ${item.abouthim}</p>`)
    }  
    
var listmen=MakeList1("lp")
    listmen.add("hannibal",["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mommsen_p265.jpg/280px-Mommsen_p265.jpg","https://study.com/cimages/multimages/16/hannibal_color2576148439539955103.jpg","https://th.bing.com/th/id/OIP.X55evNhZ4E82-TEzurw68QHaJP?pid=ImgDet&rs=1"],"Hannibal Barca was a legendary Carthaginian military commander known for his audacious tactics and famous crossing of the Alps during the Second Punic War against Rome. His victories, especially at Cannae, made him a formidable adversary, though he was ultimately defeated at Zama in 202 BC. Hannibal remains an enduring figure in military history.")
    listmen.add("ibn khaldoun",["https://i0.wp.com/ringmar.net/irhistorynew/wp-content/uploads/2018/10/ibnkhaldun.png","https://www.tunisiefocus.com/wp-content/uploads/2018/11/IBN-KHALDOUN-STATUE-TUNIS-730x430.jpg"],"Ibn Khaldun was a 14th-century Arab historian and scholar renowned for his pioneering work, The Muqaddimah This influential text introduced key concepts in historiography and sociology, such as historical cycles and the impact of economics and social structures on civilizations, leaving a lasting legacy in intellectual history.")
    listmen.add("khayreddine bacha",["https://th.bing.com/th/id/R.2e820d7a293826bb6a7baa0c9d40c515?rik=ppkFJ7BnhYcMnA&riu=http%3a%2f%2fwww.tunisienumerique.com%2fwp-content%2fuploads%2fkheireddine-pacha.png&ehk=B7dRVcIQbTrt6f2Gl3%2b7cbmkv9ypXR2VuBH0dDM7Bag%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/OIP.FWieaXasKEz3sBRUEnc0BQHaJm?pid=ImgDet&rs=1"],"Khayreddine Bacha, also known as Khayreddine Pasha, was a notable Tunisian military and political leader in the 19th century, recognized for his resistance against European colonialism, especially the French, in defense of Tunisia's sovereignty.")
    each(listmen.list,function(e,i){
      display(e)
    })      



    

    
