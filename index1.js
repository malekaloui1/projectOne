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
        var imageUrls = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_55-66_HDR_PAN.jpg/260px-Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_55-66_HDR_PAN.jpg",
        "https://th.bing.com/th/id/OIP.JpIeYPPnUBly2qztxRFb5AHaE8?pid=ImgDet&rs=1"]
            
      
        var currentImageIndex = 0;
      
        var $bookimage1 = $('#img5');
      
        
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
  $('#m2').append(`<h3>${item.name}</h3>
  <img src=${item.images[0]} id="img5">
  <p> ${item.abouthim}</p>`)
    }  
    
var listmen=MakeList1("lp")
    listmen.add("Amphitheatre of El Jem",["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_55-66_HDR_PAN.jpg/260px-Anfiteatro%2C_El_Jem%2C_T%C3%BAnez%2C_2016-09-04%2C_DD_55-66_HDR_PAN.jpg","https://th.bing.com/th/id/OIP.JpIeYPPnUBly2qztxRFb5AHaE8?pid=ImgDet&rs=1"],"The Amphitheatre of El Djem, located in Tunisia, is a well-preserved ancient Roman amphitheater. It is renowned for its impressive size and architecture, often compared to the Colosseum in Rome. This remarkable structure serves as a testament to the rich history and Roman influence in North Africa.")
    listmen.add("bardo meseum",["https://cdn.audleytravel.com/-/-/79/118040174221124149009115125057033052024238243004.jpg"],"The Bardo Museum, situated in Tunis, Tunisia, is a renowned cultural institution housing an extensive collection of ancient and medieval art and artifacts. It is famous for its exceptional collection of Roman mosaics, making it one of the world's most significant repositories of Roman antiquities. The museum's exhibits offer a fascinating glimpse into Tunisia's historical and artistic heritage.")
    listmen.add("Sufetula",["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sbeitla_Temples_of_the_Gods.jpg/800px-Sbeitla_Temples_of_the_Gods.jpg"],"Sufetula, also known as Sbeitla, is an ancient Roman archaeological site in Tunisia. It boasts well-preserved ruins, including temples, baths, and an impressive Roman forum. Sufetula offers a captivating window into Tunisia's Roman history, showcasing the architectural and cultural legacy of the Roman Empire in North Africa.")
    each(listmen.list,function(e,i){
      display(e)
    })      