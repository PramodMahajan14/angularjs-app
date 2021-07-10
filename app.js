
 var app = angular.module('country_app',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/",{
    template:"<spacific-Country></spacific-Country>"
  })
  

 
})
/* this custom directive*/
 app.directive('spacificCountry',function(){
  return{
    template:    
    "<div id='headbar'><h1>{{sel_con.name}}</h1></div>"+
    "<div id='btn'><button id='back' ng-click='goback()'>back</button></div>"+
                "<div id='flag_view'><img src='{{sel_con.flag}}'></img></div>"+
                "<div id='infobox'><table id='tel'>"+
                "<tr >"+
                     "<td><h2>Capitals</h2></td><td><h2 style='margin-left:40px;margin-top:45px'> {{sel_con.capital}}</h2></td>"+
                 "</tr>"+ 
                 "<tr>"+  
                     "<td><h2>Region</h2></td><td><h2 style='margin-left:40px;margin-top:45px'> {{sel_con.region}}</h2></td>"+
                     "</tr>"+  
                     "<tr>"+  
                     "<td><h2>Sub-Region </h2></td><td><h2 style='margin-left:40px;margin-top:45px'>{{sel_con.subregion}}</h2></td>"+
                     "</tr>"+  
                     "<tr>"+  
                     "<td><h2>Population</h2></td><td><h2 style='margin-left:40px; margin-top:45px'>{{sel_con.population}}</h2></td>"+
                     "</tr>"+  
                     "<tr>"+  
                     "<td><h2>Border </h2></td><td><h2 style='margin-left:40px; margin-top:45px'>{{sel_con.borders.toString()}}</h2></td>"+
                     "</tr>"+
                     "<tr>"+  
                     "<td><h2>Calling-Code </h2></td><td><h2 style='margin-left:40px; margin-top:45px'>{{sel_con.callingCodes.toString()}}</h2></td>"+ 
                     "</tr>" +
                     "<tr>"+
                     "<td><h2>NativeName</h2></td><td><h2 style='margin-left:40px; margin-top:45px'>{{sel_con.nativeName}}</h2></td>"+ 
                     "</tr>" +
                     "<tr>"+
                     "<td><h2>Time Zone </h2></td><td><h2 style='margin-left:40px; margin-top:45px'>{{sel_con.timezones}}</h2></td>"+ 
                     "</tr>" +
                   "</ul</tr></table."+
                "</div>"
  }                   


  
})
const themeSwitch = document.querySelector('.check');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

$(document).ready(function(){
  $(".flip").click(function(){
    $("panel").slideDown("slow");
  });
});
          