var array = []
function myfunc() {
  var object =objects();
  if(temp == 1){
  array.push(object);
  append(array); 
}}
function objects(){
    var id = document.getElementById('id').value ;
    var name = document.getElementById('name').value ;
    var price = document.getElementById('price').value ;
    if (check(id, name, price) && validate(id,array)) {
        temp = 1
        // var objects = {}

        return { 'pro_id': id, 'pro_name': name, 'pro_price': price };
      }
      else{
          window.alert("pls enter valid  ");
          temp = 0 ;
      }
}
function check(id, name, price) {
  if (id == '') {
    alert('pls enter id!!')
    return false
  } else if (isNaN(id)) {
    alert('pls enter valid id')
    return false
  } else if (name == '') {
    alert('pls enter name!!')
    return false
  } else if (!isNaN(name)) {
    alert('pls enter valid name!!')
    return false
  } else if (price == '') {
    alert('pls enter price!!')
    return false
  } else if (isNaN(price)) {
    alert('pls enter valid price')
    return false
  } else {
    return true
  }
}
function validate(id,array){
    for (var i = 0; i< array.length; i++){
        if (id == array[i].pro_id){
            return false;
        }
    }
    return true;
}
// function logic(id, name, price) {
//   let product = { pro_id: id, pro_name: name, pro_price: price };
  
  
//   for(var i =0 ;i < arr.length ; i++){
//         if(arr[i].pro_id==id){
//             arr.pop();
//             alert("ujuhu")
//         }
//     //   for(var j = 0;j <arr.length;i++){
//     //       if(output.length == 0){
//     //          output.push(arr);
//     //       }
//     //       else if(output[])
//     //   }
 
//   }
  


// }
function append(arr) {
//   var table = document.getElementById("myTable");

  var html = '<tr>\
  <th>Product Id</th>\
  <th>Product Name</th>\
  <th>Product Price</th>\
</tr> ';

for (var i=0; i < array.length; i++){
  html += '<tr>\
  <td>'+array[i].pro_id+'</td>\
  <td>'+array[i].pro_name+'</td>\
  <td>'+array[i].pro_price+'</td>\
  <td><a href ="#" onclick = editForm('+array.pro_id+')>Edit</a></td>\
</tr>'
}
document.getElementById('Table').innerHTML = html;

}
// function edit(id){
//     var product = getProduct(id);
//     document.getElementById('id').value = product.pro_id ;
//     document.getElementById('updatebtn').style.display = 'block'
// }
// function getProduct(id){
// //  for()
// }
// function updateProduct(){
//     var pid = document.getElementById()
// }