
function Information(crust, topping,flavour,size) {
  this.crust = crust;
  this.topping = topping;
  this.flavour = flavour;
  this.size =size;
}

 Information.prototype.fullInformation= function() {
  return this.crust + " " + this.topping+" "+this.flavour+" "+this.size;
 }


function resetFields() {
  $("select#sel1").val("");
  $("select#sel2").val("");
  $("select#sel3").val("");
  $("select#sel4").val("");
  
}
 



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
         
              '<option value="neapolitian">neapolitian  $3</option>'+
         '<option value="new york style">new york style $3</option>'+
         '<option value="chicago deep dish">chicago deep dish $4</option>'+
         '<option value="flatbread/focaccia">flatbread/focaccia $2</option>'+
         '<option value="gluten-free">gluten-free $3</option>'+
         '<option value="vegan-friendly">vegan-friendly $4</option>'+
       '</select>'+
     '</div>'+

     '<div class="form-group">'+
    
     '<label for="sel1">Select Toppings you want:</label><br>'+
     '<select class="control" id="sel1">'+
          '<option value="vagetables">vegetables    $2</option>'+
          '<option value="nuts">nuts    $1 </option>'+
          '<option value="meats">meats    $3</option>'+
          '<option value="cheese">cheese    $1.50</option>'+
          '<option value="sea food">sea food    $2.00</option>'+
          '<option value="Herbs and Spîces">Herbs and Spîces    $1.50 </option>'+
        '</select>'+
      '</div>'+

      '<div class="form-group">'+
             
      '<label for="sel1">Select Flavours you want:</label><br>'+
      '<select class="control" id="sel1">'+
           '<option value="Double Cheese Pizza">Double Cheese Pizza    $3</option>'+
           '<option value="Gourmet"> Gourmet   $2</option>'+
           '<option value="Mexican Green Wave">Mexican Green Wave    $1.5</option>'+
           '<option value="Peppy Paneer"> Peppy Paneer    $1.5</option>'+
           '<option value=" Margherita Pizza"> Margherita Pizza    $1.5</option>'+
         '</select>'+
       '</div>'+

       '<div class="form-group">'+
    
       '<label for="sel1">Select Size you want:</label><br>'+
       '<select class="control" id="sel1">'+
            '<option value="Small">Small    $1.5</option>'+
            '<option value="Medium">Medium    $3</option>'+
            '<option value="Large">Large    $4.5</option>'+
            '<option value="Extra-large">Extra-large    $6</option>'+
          '</select>'+
        '</div>')
 
  });
  $("form#fill").submit(function(event) {
    event.preventDefault();

    var selectedCrust = $("select#sel1").val();
    console.log(selectedCrust);
    var selectedTopping=$("select#sel2").val();
    var selectedFlavour = $("select#sel3").val();
    var selectedSize = $("select#sel4").val();
    var newInformation = new Information(selectedCrust,selectedTopping,selectedFlavour,selectedSize);
  console.log(newInformation);


  $("ol#pizzas").append("<li><span" + newInformation.fullInformation() + "</span></li>");
    
    $("#sub").last().click(function() {
      $("#show-check").show();
      $("#show-check h3").text(newInformation.fullInformation());
      $(".crusters-now").text(newInformation.crust);
      $(".topping-now").text(newInformation.topping);
      $(".flavour-now").text(newInformation.flavour);
      $(".size-now").text(newInformation.size);
      
    });

    $("select#sel1").val();
    $("select#sel2").val();
    $("select#sel3").val();
    $("select#sel4").val();
 
  });

})
  



















