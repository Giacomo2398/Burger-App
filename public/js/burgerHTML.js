$(".create-burger").on("submit", function(event) {
  event.preventDefault();
  var newBurger = {
    burger_name: $("#name").val().trim(),
    devoured: false,
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
    
$(".eat").on("click", function(event) {
  event.preventDefault();
    let id = $(this).data("id");
    let eaten = {
    devoured: 1
    };
  $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eaten
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