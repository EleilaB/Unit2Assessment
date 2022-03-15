///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    'name': `Meat Lovers Pizza`,
    'price': 13.68,
    'category': `Entree`,
    'popularity': 5,
    'rating': 4.6,
    'tags': [`family-size`, `finger-food`],
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

let meatLoversPrice = pizza.price

console.log(meatLoversPrice)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

let meatLoversCategory = pizza.category

console.log(meatLoversCategory)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
    spaghetti = {
        'name': `Spaghetti and Meatballs`,
        'price': 12.99,
        'category': `Entree`,
        'popularity': 4,
        'rating': 3.8,
        'tags': [`kids`, `pasta`],
    },
    breadsticks = {
        'name': `Garlic Bread Knots`,
        'price': 7.99,
        'category': `Appetizer`,
        'popularity': 5,
        'rating': 4.9,
        'tags': [`family-size`, `finger-food`]
    },
    burger = {
        'name': `All-American Bacon Burger`,
        'price': 14.98,
        'category': `Entree`,
        'popularity': 4,
        'rating': 4.2,
        'tags': [`premium`, `sandwich`]
    },
    neapolitanShake = {
        'name': `Crazy Shake`,
        'price': 9.78,
        'category': `Drink`,
        'popularity': 5,
        'rating': 4.9,
        'tags': [`kids`, `dessert`]
    },
    sideSalad = {
        'name': `House Salad`,
        'price': 7.89,
        'category': `Side`,
        'popularity': 3,
        'rating': 3.4,
        'tags': [`healthy`]
    }
]

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(ele => {
    for(let i = 0; i < ele.tags.length; i++){
        if(ele.tags[i] === `kids`){
            return true
        }
    }
})

console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

function filterByProperty(property, num, type){
    let propFilteredFood = foodArr.filter(ele => {
        if(type === `above`){
            if(ele[property] > num){
                return true
            }
        }
        else if(type === `below`){
            if(ele[property] < num){
                return true
            }
        }
    })
    return propFilteredFood
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE

console.log(filterByProperty('price', 10, `above`))