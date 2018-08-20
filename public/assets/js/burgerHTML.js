    $(".eat").on("click", function(event) {
      event.preventDefault();
        let id = $(this).data("id");
        let newEat = $(this).data("newEat");
        let eaten = {
        devoured: newEat
        };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEat
    }).then(
        function() {
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: false
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

  $(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });