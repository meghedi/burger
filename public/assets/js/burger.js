// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devouredToggle").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var thisElem = $(this);
      
      var updatedDevoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedDevoured
      }).then(
        function() {
          console.log("changed devoured to", updatedDevoured);
          // Reload the page to get the updated list
          location.reload();
        }.bind(this));
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
     $('.delete-burger').on('click', function(){
      $.ajax("/api/burgers" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("Burger deleted!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
     });
  });
  