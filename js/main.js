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
         var Repository = data['public_repos'];
         var Company = data['company'];
         var Followers = data['followers'];
         var Url = data['html_url'];
         var joined = data['created_at'];
         var html = '<center><img src="' + Avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1><span class="label label-success">' + Username + '</h1>';
         html += '<br><b><span class="label label-primary"style="color: white;">Followers: ' + Followers +'</b>';
         html += '<br><b><span class="label label-primary"style="color: white;">Company: ' + Company +'</b>';
         html += '<br><b><span class="label label-primary"style="color: white;">Repositorys: ' + Repository +'</b>';
         html += '<br><b><span class="label label-primary"style="color: white;">Location: ' + Location +'</b>';
         html += '<br><b><span class="label label-primary"style="color: black;">Joined: ' + joined +'</b>';
         // Center
                   html += '<br><b><span class="label label-primary"><font size="3" color="white">Url Link: <a href="https://github.com/' + Username + '">GitHub.com/'+ Username +'</a></b>';
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Github user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}
