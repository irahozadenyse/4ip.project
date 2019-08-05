
//bussiness logic
function Information(crust, topping,flavour,size) {
  this.crust = crust;
  this.topping = topping;
  this.flavour = flavour;
  this.size =size;
}

 Information.prototype.fullInformation= function() {
  return this.crust + " " + this.topping+"  "+ this.flavour +"  "+ this.size;
 }

function resetFields() {
  $("select#sel1").val("");
  $("select#sel2").val("");
  $("select#sel3").val("");
  $("select#sel4").val("");
  
}
 

//user iterface logic
var selectedCrust;
var selectedTopping;
var selectedFlavour;
var selectedSize;
$(document).ready(function(){
  $("#piz").hide();
  $(".top").css({
    opacity:1
})
$(".img1").hover(function(){
  $(this).css({opacity:.8});
  $("#piz").fadeIn();
},function(){
  $(this).stop().css({opacity:1})
  $("#piz").fadeOut();
});



  $("#add-menu").click(function() {
    $(".yes").append('<div class="form-group">'+
              '<label for="sel1">Sellect Crusters you want:</label><br>'+
              '<select class="control" id="sel1">'+
         
              '<option value="neapolitian">neapolitian </option>'+
         '<option value="newyorkstyle">newyorkstyle </option>'+
         '<option value="chicagodeepdish">chicagodeepdish </option>'+
         '<option value="flatbreadFocaccia">flatbreadFocaccia </option>'+
         '<option value="glutenfree">glutenfree </option>'+
         '<option value="veganfriendly">veganfriendly </option>'+
       '</select>'+
     '</div>'+

     '<div class="form-group">'+
    
     '<label for="sel1">Select Toppings you want:</label><br>'+
     '<select class="control" id="sel1">'+
          '<option value="vegetables">vegetables</option>'+
          '<option value="nuts">nuts  </option>'+
          '<option value="meats">meats  </option>'+
          '<option value="cheese">cheese  </option>'+
          '<option value="seafood">seafood  </option>'+
          '<option value="HerbsandSpices">HerbsandSpices </option>'+
        '</select>'+
      '</div>'+

      '<div class="form-group">'+
             
      '<label for="sel1">Select Flavours you want:</label><br>'+
      '<select class="control" id="sel1">'+
           '<option value="DoubleCheesePizza">DoubleCheesePizza   </option>'+
           '<option value="Gourmet"> Gourmet   </option>'+
           '<option value="MexicanGreenWave">MexicanGreenWave  </option>'+
           '<option value="PeppyPaneer"> PeppyPaneer </option>'+
           '<option value=" MargheritaPizza"> MargheritaPizza </option>'+
         '</select>'+
       '</div>'+

       '<div class="form-group">'+
    
       '<label for="sel1">Select Size you want:</label><br>'+
       '<select class="control" id="sel1">'+
            '<option value="Small">Small  </option>'+
            '<option value="Medium">Medium  </option>'+
            '<option value="Large">Large </option>Ex'+
            '<option value="Extralarge">Extralarge </option>'+
          '</select>'+
        '</div>')
 
  });
  $("form#fill").submit(function(event) {
    event.preventDefault();
   j=0;
    selectedCrust = $("select#sel1").val();
    console.log(selectedCrust);
    var selectedTopping=$("select#sel2").val();
    var selectedFlavour = $("select#sel3").val();
    var selectedSize = $("select#sel4").val();
    var newInformation = new Information(selectedCrust,selectedTopping,selectedFlavour,selectedSize);
  console.log(newInformation);

   
  $("ol#pizzas").append("<li><span>" + newInformation.fullInformation() + "</span></li>");
    
    $("#sub").last().click(function() {
      $("#show-check").show();
      $("#show-check h2").text(newInformation.fullInformation());
      $(".crusters-now").text(newInformation.crust);
      $(".topping-now").text(newInformation.topping);
      $(".flavour-now").text(newInformation.flavour);
      $(".size-now").text(newInformation.size);
      
    });

    // if(selectedCrust == "neapolitian" && selectedSize == "Small" && selectedFlavour == "DoubleCheesePizza" && selectedTopping == "vegetables"){
    //   console.log(5)
    // }
    // else if(selectedCrust=="newyorkstyle"){
    //   console.log(6)
    // }
    
 

// if(newInformation.size=='extralarge'){
//   j=10;
//   $("span.price").text(j +'$')
// }
// else if(newInformation.size=='large'){
//   j=7;
//   $("span.price").text(j +'$')
// }
// else if(newInformation.size=='medium'){
// j=5;
// $("span.price").text(j +'$')
// }
// else if(newInformation.size=='small'){
//   j=3;
//   $("span.price").text(j +'$')
// }





// )
var priCrust={
  neapolitian:3,
  newyorkstyle:3,
  chicagodeepdish:4,
  flatbreadFocaccia:4,
  glutenfree:3,
  veganfriendly:4

}

// console.log(priCrust.neapolitian)
var priTopping={
  vegetables :2,
  nuts:1,
  meats:3,
  cheese :3,
  seafood:2,
  HerbsandSpices:1
}
var priFlavour={
  DoubleCheesePizza :3,
  Gourmet :3,
  MexicanGreenWave:1.5,
  PeppyPaneer :1.5,
  MargheritaPizza :1.5
}
// console.log(priFlavour.DoubleCheesePizza)
var priSize={
  Small:1.5,
  Medium:3,
  Large:4.5,
  Extralarge:6
}
 if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Small"){
  j=7;
  $("span.price" ).text (j +'$')
}else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "nuts" || selectedTopping=="HerbsandSpices" && selectedFlavour === "MexicanGreenWave" || selectedFlavour=="PeppyPaneer" || selectedFlavour=="MargheritaPizza" && selectedSize === "Small"){
j=5;
$("span.price" ).text (j +'$')
}
else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "meats" || selectedTopping=="cheese" && selectedFlavour === "MexicanGreenWave" || selectedFlavour=="PeppyPaneer" || selectedFlavour=="MargheritaPizza" && selectedSize === "Small"){ 
  j=6;
  $("span.price" ).text ( j +'$')
}
else if(selectedCrust === "chicagodeepdish" || selectedCrust== "flatbreadFocaccia"  && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Small"){ 
  j=10;
  $("span.price" ).text (j +'$')
}
else if(selectedCrust === "chicagodeepdish" || selectedCrust== "flatbreadFocaccia"  && selectedTopping === "nuts" || selectedTopping=="HerbsandSpices" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Small"){ 
  j=8
  $("span.price" ).text (j +'$')
}
else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Medium"){ 
    j=8.5;
    $("span.price" ).text (j +'$')
}
else if( selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "nuts" || selectedTopping=="HerbsandSpices" && selectedFlavour === "MexicanGreenWave" || selectedFlavour=="PeppyPaneer" || selectedFlavour=="MargheritaPizza" && selectedSize === "Medium"){
    j=9;
    $("span.price" ).text (j +'$')
}
else if(selectedCrust === "chicagodeepdish" || selectedCrust== "flatbreadFocaccia"  && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Mediu"){ 
  j=9.5;
  $("span.price" ).text (j +'$')
}   

else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "nuts" || selectedTopping=="HerbsandSpices" && selectedFlavour === "MexicanGreenWave" || selectedFlavour=="PeppyPaneer" || selectedFlavour=="MargheritaPizza" && selectedSize === "Large"){
  j=10;
  $("span.price" ).text (j +'$')
  }

  else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Large"){ 
    j=10.5;
    $("span.price" ).text (j +'$')
}

else if(selectedCrust === "chicagodeepdish" || selectedCrust== "flatbreadFocaccia"  && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Large"){ 
  j=11;
  $("span.price" ).text (j +'$')
}   
else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "nuts" || selectedTopping=="HerbsandSpices" && selectedFlavour === "MexicanGreenWave" || selectedFlavour=="PeppyPaneer" || selectedFlavour=="MargheritaPizza" && selectedSize === "Extralarge"){
  j=11.5;
  $("span.price" ).text (j +'$')
  }

  else if(selectedCrust === "neapolitian" || selectedCrust== "newyorkstyle" || selectedCrust=="glutenfree" && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Extralarge"){ 
    j=12;
    $("span.price" ).text (j +'$')
}

else if(selectedCrust === "chicagodeepdish" || selectedCrust== "flatbreadFocaccia"  && selectedTopping === "vegetables" || selectedTopping=="seafood" && selectedFlavour === "DoubleCheesePizza" || selectedFlavour=="Gourmet" && selectedSize === "Extralarge"){ 
  j=12.5;
  $("span.price" ).text (j +'$')
}  

$("button#yes").click(function(){
  prompt("enter your name and address");
  alert("you are going to get it soon");
  alert("thank you")
});
$("button#no").click(function(){
  // prompt("enter your name and address");
  alert("we are not going to deliver pizza to you ");
  alert("thank you")
});

resetFields();
});
});









