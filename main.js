$(document).ready(function(){
  // gán giá trị dữ liệu nhập từ input
       var i = 0;
       $('#sumit').click(function() {
           let na = document.getElementById("name").value;
           let ma = document.getElementById("math").value;
           let phy = document.getElementById("physical").value;
           let che = document.getElementById("chemical").value;
           i = i+1;
               // chèn dữ liệu vào bảng,thêm hàng vào bảng
               $("#table").append( "<tr> <td>" + i + "</td></tr>");
               $("tr:last-child").append("<td>" + na +"</td>");
               $("tr:last-child").append("<td>" + ma + "</td>"); 
               $("tr:last-child").append("<td>" + phy + "</td>");
               $("tr:last-child").append("<td>" + che + "</td>");
               $("tr:last-child").append("<td>" + "?" + "</td>");      
               // reset ô nhập dữ liệu sau khi nhấn button
               $("#name").val("");
               $("#math").val("");
               $("#physical").val("");
               $("#chemical").val("");
           });
   
   // Hàm tính điểm trung bình
   $("#avage").click(function() {      
       $("#table tr").each(function() {
           var math = $(this).find("td").eq(2).text();
           var phy  = $(this).find("td").eq(3).text();
           var chem = $(this).find("td").eq(4).text();
           var avg = (parseFloat(math)+ parseFloat(phy)+ parseFloat(chem))/3;
           $(this).find("td").eq(5).html(avg.toFixed(1));
       });
       });
   // Hàm xác nhận học sinh giỏi
   $("#gStudent").click(function(){
       $("#table tr").each(function(){
           if (parseFloat($(this).find("td").eq(5).text()) >= 8) {
               $(this).find("td").parent().css("color","red");
           } 
       });
   });
   });
   //Hàm xóa hàng
   function remove(){
       $('tr:last-child').remove();
   }