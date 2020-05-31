$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#name").val().trim(),
          devoured: 0
        };
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          }
        );
      });

    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function() {
            location.reload();
        })
      })
    });
