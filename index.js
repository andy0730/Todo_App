// $(document.ready(function(){
//     $("ul").on("click",input[type="checkbox"],function(){
//         $(this).closest("li").togleClass("completed-todo")}}
        

    console.log ("hello world");

    var name_of_todo= $("#name_of_todo");

    // $(document).ready(console.log("Hello World"));
    
    // $(document).ready($("#add_to_do_button").click(function(){console.log("this works");}))
    
    // $(document).ready(function(){console.log("this works");
    // $("add_to_do_button").click(function(){console.log("this works")})});
    
    
    $(document).ready(function(){
        console.log("hello")
        $("#add_to_do_button").click(function(){
            console.log("button works")
            var name_of_todo= $("#name_of_todo").val()
            console.log(name_of_todo) 
            $("ul").append("<li><input type='checkbox' />"+name_of_todo+"</li>")      
            
            
            
            
            
        })
    })
    
    