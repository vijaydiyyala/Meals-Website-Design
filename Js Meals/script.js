$.ajax({
   type:'get',
   url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
   success : function(response)
   {
    for(var i=0; i<response.meals.length ; i++){

        var mealitems = `<div class="col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center">
        <p>${response.meals[i].strMeal}</p>
        <img src=${response.meals[i].strMealThumb} class="img-fluid" />
        <p>${response.meals[i].idMeal}</p> 

        </div>`
        $('#myitems').append(mealitems)
    }
   },
   error: function(error)
   {
    console.log(error)
   }

})
