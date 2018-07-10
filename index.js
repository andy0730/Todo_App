// $(document.ready(function(){
//     $("ul").on("click",input[type="checkbox"],function(){
//         $(this).closest("li").togleClass("completed-todo")}}
        

    console.log ("hello world");
   
    var pomodoros= $("#pomodoros").val(); 
    
    var name_of_todo= $("#name_of_todo").val();

    // $(document).ready(console.log("Hello World"));
    
    // $(document).ready($("#add_to_do_button").click(function(){console.log("this works");}))
    
    // $(document).ready(function(){console.log("this works");
    // $("add_to_do_button").click(function(){console.log("this works")})});
    
    
    $(document).ready(function(){
        console.log("hello")
        $("#add_to_do_button").click(function(){
            console.log("button works")
            var name_of_todo= $("#name_of_todo").val()
            var pomodoros= $("#number_of_pomodoros").val()
            console.log(name_of_todo) 
            console.log(pomodoros)
            $("ul").append("<li><input type='checkbox'/>"+name_of_todo+"<span class='pomodoros'>"+pomodoros+"</span></li>");
            
            
            
            
            
             
        })
    })
    
   
    
    