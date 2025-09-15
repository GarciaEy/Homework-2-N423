const apiKey = "5b8400e6740d4d23b00211804250809";

// export function getRandomRecipe() {
//   let ranRecipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

//   $.getJSON(ranRecipeUrl, (data) => {
//     console.log(data);
//     let meal = data.meals[0];
//     let recipeString = `<h1>${meal.strMeal}</h1>
// 		<div>
// 			<img src="${meal.strMealThumb}"/>
// 		</div>
// 			<h3>Ingredients</h3>
// 			<ul>`;
//     let ingredCount = 20;
//     for (let i = ingredCount; i > 0; i--) {
//       let ingred = meal[`strIngredient${i}`];
//       if (ingred != "") {
//         console.log(ingred);
//         recipeString += `<li>${ingred}</li>`;
//       }
//     }
//     recipeString += `</ul><h3>Measurements</h3><ul>`;

//     let measurementCount = 20;
//     for (let i = measurementCount; i > 0; i--) {
//       let measurement = meal[`strMeasure${i}`];
//       if (measurement != "" && measurement != null && measurement != " ") {
//         console.log(measurement);
//         recipeString += `<li>${measurement}</li>`;
//       }
//     }

//     $(".recipeHolder").html(recipeString);
//   });
// }

// export function getCategories() {
//   let catURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

//   $.getJSON(catURL, (data) => {
//     console.log(data);
//     $.each(data.categories, (idx, cat) => {
//       $("#cat").append(
//         `<option value="${cat.strCategory}">${cat.strCategory}</option>`
//       );
//     });
//   }).fail((error) => {
//     console.log("Error fetching categories:", error);
//   });
// }

// export function getMealsByCategory(category) {
//   let mealsByCatURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
//   $.getJSON(mealsByCatURL, (data) => {
//     console.log(data);
//   }).fail((error) => {
//     console.log("Error fetching meals by category:", error);
//   });
// }

// model/model.js

export function fetchWeatherData(city, days) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`;

  return $.getJSON(url);
}
