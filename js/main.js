$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
    $.get('https://api.github.com/users/' + $('#inputText').val(), "", function(data){
         var Avatar = data['avatar_url'];
         var Username = data['login'];
         var url = data['html_url'];
         var lastPlayed = "None";
         var joined = data['createdAt'];
         var html = '<center><img src="' + Avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<br>Name:' + Username + '</br>';
         // Center
         html += '<br><b>url: </b>' + url;
         $('.profile').html(html);
      });;
}
