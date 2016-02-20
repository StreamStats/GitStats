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
         var Location = data['location'];
         var Url = data['html_url'];
         var lastPlayed = "None";
         var joined = data['created_at'];
         var html = '<center><img src="' + Avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1><span class="label label-success">' + Username + '</h1>';
         html += '<br>Location: ' + Location + '</br>';
         html += '<br>Joined Github: ' + joined + '</br>';
         // Center
         html += '<br><b>Url Link: </b>' + Url;
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Github user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
