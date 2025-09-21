const recipeData = {
    steaks: [
        {
            id: 1,
            name: "Spicy Ground Beef Stir",
            image: "Images/Recipe1.jpg",
            description: "This dish combines tender ground beef with bold spices for a satisfying kick of flavor. Fresh vegetables add vibrant color and nutrients, creating a balanced and hearty meal. Served over rice or grains, it’s perfect for a quick yet nourishing dinner.",
            ingredients: [
                "1 lb ground beef",
                "2 cloves garlic, minced",
                "1 bell pepper, sliced",
                "1 onion, diced",
                "2 tbsp soy sauce",
                "1 tsp chili flakes",
                "2 cups cooked rice",
                "2 tbsp vegetable oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat oil in a large skillet over medium-high heat",
                "Add ground beef and cook until browned, breaking it up as it cooks",
                "Add garlic, onion, and bell pepper. Cook for 5 minutes",
                "Add soy sauce, chili flakes, salt, and pepper",
                "Stir-fry for another 3-4 minutes until vegetables are tender",
                "Serve over cooked rice and enjoy"
            ],
            nutrition: {
                calories: 485,
                protein: "28g",
                carbs: "35g",
                fat: "25g",
                fiber: "3g"
            }
        },

        {
            id: 2,
            name: "Indulge in Bavette Steak",
            image: "Images/Recipe2.jpg",
            description: "Enjoy juicy, perfectly cooked bavette steak with a rich, savory flavor that melts in your mouth. Paired with fresh herbs and a light drizzle of sauce, it elevates any mealtime experience. This dish offers a balance of protein and taste, making it both indulgent.",
            ingredients: [
                "2 bavette steaks (8oz each)",
                "4 cloves garlic, roasted",
                "2 tbsp butter",
                "1/4 cup red wine",
                "2 tbsp olive oil",
                "Fresh thyme",
                "Salt and black pepper"
            ],
            instructions: [
                "Season steaks generously with salt and pepper",
                "Heat olive oil in a cast-iron skillet over high heat",
                "Sear steaks for 3-4 minutes per side for medium-rare",
                "Remove steaks and let rest",
                "Add butter and roasted garlic to the pan",
                "Deglaze with red wine and add thyme",
                "Pour sauce over steaks and serve"
            ],
            nutrition: {
                calories: 520,
                protein: "45g",
                carbs: "2g",
                fat: "35g",
                fiber: "0g"
            }
        },

        {
            id: 3,
            name: "Beef and Broccoli Stir Fry",
            image: "Images/Recipe3.jpg",
            description: "A classic combination of tender beef and crisp broccoli tossed in a flavorful sauce. This quick-cooking dish is loaded with protein, vitamins, and rich umami notes. It’s a healthy and satisfying choice for busy weeknights.",
            ingredients: [
                "1 lb beef sirloin, sliced thin",
                "4 cups fresh broccoli florets",
                "3 cloves garlic, minced",
                "1/4 cup soy sauce",
                "2 tbsp oyster sauce",
                "1 tbsp cornstarch",
                "2 tbsp vegetable oil",
                "1 tsp sesame oil"
            ],
            instructions: [
                "Marinate beef with soy sauce and cornstarch for 15 minutes",
                "Heat oil in a wok over high heat",
                "Stir-fry beef until browned, remove and set aside",
                "Add broccoli and garlic to the wok",
                "Stir-fry for 3-4 minutes until broccoli is tender-crisp",
                "Return beef to wok, add oyster sauce and sesame oil",
                "Toss everything together and serve immediately"
            ],
            nutrition: {
                calories: 320,
                protein: "28g",
                carbs: "12g",
                fat: "18g",
                fiber: "4g"
            }
        },

        {
            id: 4,
            name: "Garlic Butter Steak Bites ",
            image: "Images/Recipe4.jpg",
            description: "Succulent steak bites are seared to perfection and coated in a rich garlic butter sauce. They deliver big, bold flavor in every bite while remaining quick to prepare. Perfect as a main dish or hearty appetizer, they’re both indulgent and easy to enjoy.",
            ingredients: [
                "1.5 lbs sirloin steak, cubed",
                "4 large potatoes",
                "1/2 cup heavy cream",
                "4 tbsp butter",
                "4 cloves garlic, minced",
                "Fresh parsley",
                "Salt and pepper"
            ],
            instructions: [
                "Boil potatoes until tender, then mash with cream and 2 tbsp butter",
                "Season steak bites with salt and pepper",
                "Heat remaining butter in a skillet over high heat",
                "Sear steak bites for 2-3 minutes until browned",
                "Add garlic and cook for 1 more minute",
                "Serve over mashed potatoes, garnish with parsley"
            ],
            nutrition: {
                calories: 580,
                protein: "40g",
                carbs: "32g",
                fat: "32g",
                fiber: "3g"
            }
        },

        {

            id: 5,
            name: "Pan-Seared Steak in Butter Sauce",
            image: "Images/Recipe5.jpg",
            description: "This recipe features a perfectly seared steak finished with a velvety butter sauce. Simple ingredients come together to create a rich and elegant flavor profile. It’s an effortless yet impressive dish ideal for weeknights or special occasions.",
            ingredients: [
                "2 ribeye steaks (10oz each)",
                "4 tbsp butter",
                "2 cloves garlic, crushed",
                "2 sprigs fresh rosemary",
                "1 tbsp olive oil",
                "Coarse salt and pepper"
            ],
            instructions: [
                "Bring steaks to room temperature, season with salt and pepper",
                "Heat olive oil in a heavy skillet over medium-high heat",
                "Sear steaks for 4-5 minutes per side",
                "Add butter, garlic, and rosemary to the pan",
                "Baste steaks with the flavored butter",
                "Let rest for 5 minutes before serving"
            ],
            nutrition: {
                calories: 650,
                protein: "52g",
                carbs: "1g",
                fat: "48g",
                fiber: "0g"
            }
        }
    ],

    salads: [
        {
            id: 6,
            name: "Grilled Chicken Power Salad",
            image: "Images/Salad1.jpg",
            description: "This hearty salad features juicy grilled chicken atop crisp greens and fresh vegetables. A light dressing ties everything together, creating a balanced and flavorful meal. It’s perfect for a protein-rich lunch that still feels refreshing.",
            ingredients: [
                "2 grilled chicken breasts, sliced",
                "6 cups mixed greens",
                "1 cup cherry tomatoes",
                "1 cucumber, diced",
                "1/2 red onion, sliced",
                "1/4 cup olive oil",
                "2 tbsp lemon juice",
                "Salt and pepper"
            ],
            instructions: [
                "Grill chicken breasts until fully cooked, then slice",
                "Combine mixed greens, tomatoes, cucumber, and onion in a large bowl",
                "Whisk together olive oil, lemon juice, salt, and pepper",
                "Top salad with sliced chicken",
                "Drizzle with dressing and toss gently",
                "Serve immediately"
            ],
            nutrition: {
                calories: 285,
                protein: "32g",
                carbs: "8g",
                fat: "14g",
                fiber: "4g"
            }
        },
        {
            id: 7,
            name: "Southwest Chicken Power Salad",
            image: "Images/Salad2.jpg",
            description: "Packed with zesty spices and colorful vegetables, this salad offers a bold southwest twist. Tender chicken pairs with beans, corn, and a tangy dressing for vibrant flavor. It’s a wholesome and satisfying choice for any time of day.",
            ingredients: [
                "2 grilled chicken breasts",
                "4 cups romaine lettuce",
                "1 cup corn kernels",
                "1 avocado, diced",
                "1 cup cherry tomatoes",
                "1/4 cup cilantro",
                "2 tbsp lime juice",
                "2 tbsp olive oil"
            ],
            instructions: [
                "Chop romaine lettuce and place in a large bowl",
                "Add corn, diced avocado, and cherry tomatoes",
                "Slice grilled chicken and add to salad",
                "Whisk lime juice and olive oil together",
                "Add cilantro and toss with dressing",
                "Serve chilled"
            ],
            nutrition: {
                calories: 345,
                protein: "28g",
                carbs: "18g",
                fat: "20g",
                fiber: "8g"
            }
        },
        {
            id: 8,
            name: "Protein & Avocado Power Salad",
            image: "Images/Salad3.jpg",
            description: "Creamy avocado and protein-rich toppings make this salad both nourishing and filling. Fresh greens, tomatoes, and lentils add color and texture for a balanced bite. It’s an energizing option that keeps you fueled and satisfied.",
            ingredients: [
                "1 cup cooked lentils",
                "2 hard-boiled eggs",
                "1 large avocado",
                "2 cups spinach",
                "1 cup cherry tomatoes",
                "1/4 cup pumpkin seeds",
                "2 tbsp balsamic vinegar",
                "2 tbsp olive oil"
            ],
            instructions: [
                "Cook lentils according to package directions",
                "Hard boil eggs and slice",
                "Dice avocado and halve cherry tomatoes",
                "Arrange spinach in bowls",
                "Top with lentils, eggs, avocado, and tomatoes",
                "Sprinkle with pumpkin seeds and drizzle with dressing"
            ],
            nutrition: {
                calories: 425,
                protein: "22g",
                carbs: "25g",
                fat: "28g",
                fiber: "12g"
            }
        },
        {
            id: 9,
            name: "Classic Waldorf Power Salad",
            image: "Images/Salad4.jpg",
            description: "A timeless combination of crisp apples, grapes, and crunchy walnuts tossed with greens. This salad balances sweetness, crunch, and creaminess for a refreshing treat. It’s a lighter yet satisfying way to enjoy a classic favorite.",
            ingredients: [
                "3 large apples, diced",
                "3 celery stalks, chopped",
                "1 cup red grapes, halved",
                "1/2 cup walnuts, chopped",
                "1/2 cup mayonnaise",
                "2 tbsp lemon juice",
                "2 cups lettuce leaves"
            ],
            instructions: [
                "Dice apples and toss with lemon juice to prevent browning",
                "Chop celery and halve grapes",
                "Mix apples, celery, grapes, and walnuts in a bowl",
                "Add mayonnaise and remaining lemon juice",
                "Toss until well coated",
                "Serve over lettuce leaves"
            ],
            nutrition: {
                calories: 265,
                protein: "4g",
                carbs: "28g",
                fat: "16g",
                fiber: "5g"
            }
        },
        {
            id: 10,
            name: "Lentil & Chickpea Power Salad",
            image: "Images/Salad5.jpg",
            description: "This plant-based salad blends protein-packed lentils and chickpeas with fresh herbs and vegetables. A bright dressing adds a tangy kick, making every bite vibrant. It’s a wholesome choice that supports long-lasting energy.",
            ingredients: [
                "1 cup cooked lentils",
                "1 cup cooked chickpeas",
                "1 cucumber, diced",
                "1 bell pepper, diced",
                "1/4 cup red onion, minced",
                "3 tbsp olive oil",
                "2 tbsp lemon juice",
                "Fresh herbs"
            ],
            instructions: [
                "Cook lentils and chickpeas if using dried",
                "Dice cucumber, bell pepper, and red onion",
                "Combine all vegetables with lentils and chickpeas",
                "Whisk olive oil and lemon juice together",
                "Add fresh herbs and toss with dressing",
                "Let marinate for 30 minutes before serving"
            ],
            nutrition: {
                calories: 285,
                protein: "15g",
                carbs: "35g",
                fat: "10g",
                fiber: "12g"
            }
        },
        {
            id: 11,
            name: "Fresh Niçoise Power Salad",
            image: "Images/Salad6.jpg",
            description: "Inspired by the Mediterranean, this salad features tuna, eggs, olives, and crisp vegetables. A simple vinaigrette ties the ingredients together with bright, savory notes. It’s a well-rounded dish rich in protein, healthy fats, and flavor.",
            ingredients: [
                "6 oz canned tuna in olive oil",
                "4 cups mixed greens",
                "8 small potatoes, boiled",
                "1 cup green beans, blanched",
                "2 hard-boiled eggs",
                "1 cup cherry tomatoes",
                "1/4 cup black olives",
                "3 tbsp olive oil",
                "1 tbsp red wine vinegar"
            ],
            instructions: [
                "Boil potatoes until tender, cool and halve",
                "Blanch green beans until crisp-tender",
                "Hard boil eggs and cut into quarters",
                "Arrange mixed greens on a platter",
                "Top with tuna, potatoes, green beans, eggs, tomatoes, and olives",
                "Drizzle with olive oil and vinegar dressing"
            ],
            nutrition: {
                calories: 385,
                protein: "28g",
                carbs: "22g",
                fat: "22g",
                fiber: "6g"
            }
        }
    ],

    smoothies: [
        {
            id: 12,
            name: "Pear Ginger Energy Smoothie",
            image: "Images/Smoothie1.jpg",
            description: "This vibrant smoothie blends sweet pear with zesty ginger for a refreshing kick. Packed with fiber and antioxidants, it helps support digestion and immunity. It’s a light, energizing drink perfect for mornings or midday boosts.",
            ingredients: [
                "2 ripe pears, cored",
                "1 inch fresh ginger",
                "1 cup almond milk",
                "1 tbsp honey",
                "1/2 cup ice",
                "1 tsp lemon juice"
            ],
            instructions: [
                "Peel and core the pears",
                "Peel fresh ginger",
                "Add all ingredients to blender",
                "Blend until smooth and creamy",
                "Taste and adjust sweetness if needed",
                "Serve immediately over ice"
            ],
            nutrition: {
                calories: 165,
                protein: "2g",
                carbs: "38g",
                fat: "1g",
                fiber: "8g"
            }
        },
        {
            id: 13,
            name: "Blueberry Bliss Energy Smoothie",
            image: "Images/Smoothie2.jpg",
            description: "Bursting with juicy blueberries, this smoothie delivers a naturally sweet, antioxidant-rich blend. Greek yogurt (or plant-based alternative) adds creaminess and protein for staying power. It’s a delicious way to fuel your day.",
            ingredients: [
                "1 cup fresh blueberries",
                "1/2 cup Greek yogurt",
                "1 banana",
                "1 cup almond milk",
                "1 tbsp maple syrup",
                "1/2 tsp vanilla extract"
            ],
            instructions: [
                "Wash blueberries thoroughly",
                "Peel and slice banana",
                "Add all ingredients to blender",
                "Blend until smooth and thick",
                "Add more milk if too thick",
                "Pour into glasses and enjoy"
            ],
            nutrition: {
                calories: 195,
                protein: "8g",
                carbs: "35g",
                fat: "3g",
                fiber: "6g"
            }
        },
        {
            id: 14,
            name: "Peanut Banana Power Smoothie",
            image: "Images/Smoothie3.jpg",
            description: "Creamy peanut butter and ripe banana come together for a rich, satisfying smoothie. Plant-based milk keeps it dairy-free while adding smooth texture and nutrients. It’s a wholesome drink that supports energy.",
            ingredients: [
                "2 ripe bananas",
                "2 tbsp natural peanut butter",
                "1 cup oat milk",
                "1 tbsp maple syrup",
                "1/2 tsp vanilla extract",
                "1/2 cup ice"
            ],
            instructions: [
                "Peel and slice bananas",
                "Add all ingredients to blender",
                "Blend until smooth and creamy",
                "Add more milk if needed for consistency",
                "Taste and adjust sweetness",
                "Serve immediately"
            ],
            nutrition: {
                calories: 285,
                protein: "8g",
                carbs: "42g",
                fat: "12g",
                fiber: "6g"
            }
        },
        {
            id: 15,
            name: "Hibiscus Pineapple Glow Smoothie",
            image: "Images/Smoothie4.jpg",
            description: "This tropical smoothie combines tangy pineapple with floral hibiscus tea for a refreshing flavor. Naturally rich in vitamin C and antioxidants, it helps hydrate and revitalize. It’s a bright, healthful pick-me-up for any time of day.",
            ingredients: [
                "1/2 cup brewed hibiscus tea, cooled",
                "1 cup fresh pineapple chunks",
                "1/2 banana",
                "1 tbsp honey",
                "1/2 cup ice",
                "Mint leaves for garnish"
            ],
            instructions: [
                "Brew hibiscus tea and let cool completely",
                "Cut pineapple into chunks",
                "Add tea, pineapple, banana, and honey to blender",
                "Add ice and blend until smooth",
                "Garnish with mint leaves",
                "Serve chilled"
            ],
            nutrition: {
                calories: 125,
                protein: "1g",
                carbs: "32g",
                fat: "0g",
                fiber: "3g"
            }
        },
        {
            id: 16,
            name: "Mango Madness Power Smoothie",
            image: "Images/Smoothie5.jpg",
            description: "Sweet mango blends with creamy yogurt (or plant-based milk) for a smooth, tropical treat. Full of vitamins and natural energy, it fuels you without added sugar. It’s a sunshine-in-a-glass drink perfect for breakfast or snacks.",
            ingredients: [
                "1 large ripe mango, diced",
                "1/2 cup Greek yogurt",
                "1/2 cup coconut milk",
                "1 tbsp lime juice",
                "1 tsp lime zest",
                "1 tbsp honey",
                "1/2 cup ice"
            ],
            instructions: [
                "Peel and dice the mango",
                "Add mango, yogurt, and coconut milk to blender",
                "Add lime juice, zest, and honey",
                "Blend with ice until smooth and creamy",
                "Adjust sweetness with more honey if needed",
                "Serve immediately in chilled glasses"
            ],
            nutrition: {
                calories: 185,
                protein: "6g",
                carbs: "35g",
                fat: "4g",
                fiber: "3g"
            }
        },
        {
            id: 17,
            name: "Watermelon Refresh Energy Smoothie",
            image: "Images/Smoothie6.jpg",
            description: "Juicy watermelon and a touch of lime create a cooling, hydrating smoothie. Naturally low in calories and high in vitamins, it supports hydration and recovery. It’s a crisp, revitalizing option for hot days or post-workout refueling.",
            ingredients: [
                "4 cups cubed watermelon",
                "2 tbsp fresh lime juice",
                "1 tbsp mint leaves",
                "1 tsp honey (optional)",
                "1 cup ice",
                "Lime wedges for garnish"
            ],
            instructions: [
                "Remove seeds from watermelon and cube",
                "Add watermelon and lime juice to blender",
                "Add mint leaves and honey if using",
                "Blend with ice until slushy consistency",
                "Pour into glasses and garnish with lime wedges",
                "Serve immediately while cold"
            ],
            nutrition: {
                calories: 65,
                protein: "1g",
                carbs: "16g",
                fat: "0g",
                fiber: "1g"
            }
        }
    ],

    snacks: [
        {
            id: 18,
            name: "Spinach Cheddar Egg Muffins",
            image: "Images/Snack1.jpg",
            description: "These grab-and-go muffins combine fluffy eggs with fresh spinach and sharp cheddar. High in protein and packed with veggies, they’re a balanced option for busy mornings. Enjoy them warm for a wholesome, portable breakfast or snack.",
            ingredients: [
                "8 large eggs",
                "2 cups fresh spinach, chopped",
                "1 cup cherry tomatoes, halved",
                "1/2 cup cheddar cheese, shredded",
                "1/4 cup milk",
                "1/4 cup onion, diced",
                "Salt and pepper to taste",
                "Cooking spray"
            ],
            instructions: [
                "Preheat oven to 350°F and spray muffin tin with cooking spray",
                "Whisk eggs with milk, salt, and pepper in a large bowl",
                "Sauté onion until soft, add spinach until wilted",
                "Divide vegetable mixture among 12 muffin cups",
                "Pour egg mixture over vegetables and top with cheese",
                "Bake for 18-20 minutes until eggs are set and tops are golden"
            ],
            nutrition: {
                calories: 125,
                protein: "9g",
                carbs: "3g",
                fat: "8g",
                fiber: "1g"
            }
        },
        {
            id: 19,
            name: "Mini Herb Frittata Cups",
            image: "Images/Snack2.jpg",
            description: "Light and airy, these mini frittatas are baked with fresh herbs and parmesan. Each bite delivers protein and micronutrients in a convenient handheld form. Herby, light protein bites.They’re perfect for meal prep or healthy brunches.",
            ingredients: [
                "10 large eggs",
                "1/2 cup Parmesan cheese, grated",
                "1/4 cup fresh basil, chopped",
                "2 tbsp fresh chives, chopped",
                "1/4 cup heavy cream",
                "1/2 cup bell peppers, diced",
                "Salt and pepper",
                "Olive oil spray"
            ],
            instructions: [
                "Preheat oven to 375°F and spray muffin tins",
                "Beat eggs with cream, salt, and pepper",
                "Stir in herbs, cheese, and diced peppers",
                "Pour mixture into muffin cups, filling 2/3 full",
                "Bake 15-18 minutes until puffed and golden",
                "Cool for 5 minutes before removing from pan"
            ],
            nutrition: {
                calories: 98,
                protein: "8g",
                carbs: "2g",
                fat: "7g",
                fiber: "0g"
            }
        },
        {
            id: 20,
            name: "Banana Protein Power Muffins",
            image: "Images/Snack3.jpg",
            description: "Naturally sweetened with ripe bananas, these muffins are boosted with extra protein. Whole grains add fiber for steady energy throughout the day. They’re a delicious, nutritious snack or post-workout bite.",
            ingredients: [
                "3 ripe bananas, mashed",
                "2 eggs",
                "1/2 cup protein powder (vanilla)",
                "1/2 cup oat flour",
                "1/4 cup almond butter",
                "1/4 cup honey",
                "1 tsp baking powder",
                "1/2 tsp cinnamon"
            ],
            instructions: [
                "Preheat oven to 350°F and line muffin tin",
                "Mash bananas in a large bowl",
                "Mix in eggs, almond butter, and honey",
                "Combine dry ingredients in separate bowl",
                "Fold wet and dry ingredients together",
                "Bake 18-20 minutes until golden and set"
            ],
            nutrition: {
                calories: 145,
                protein: "8g",
                carbs: "18g",
                fat: "5g",
                fiber: "3g"
            }
        },
        {
            id: 21,
            name: "Avocado Egg Power Toast",
            image: "Images/Snack4.jpg",
            description: "Creamy avocado pairs with soft scrambled eggs on hearty whole-grain toast. Healthy fats and protein make it a satisfying, nutrient-dense meal. It’s a quick, energizing breakfast that keeps you full and focused.",
            ingredients: [
                "2 slices whole grain bread",
                "1 large avocado",
                "3 eggs",
                "2 tbsp milk",
                "1 tbsp butter",
                "1 tomato, sliced",
                "Salt, pepper, and paprika",
                "Fresh herbs for garnish"
            ],
            instructions: [
                "Toast bread slices until golden brown",
                "Mash avocado with salt and pepper",
                "Scramble eggs with milk and butter until fluffy",
                "Spread avocado on toast",
                "Top with scrambled eggs and tomato slices",
                "Season with paprika and garnish with herbs"
            ],
            nutrition: {
                calories: 385,
                protein: "18g",
                carbs: "28g",
                fat: "24g",
                fiber: "12g"
            }
        },
        {
            id: 22,
            name: "Vegan Banana Energy Pancakes",
            image: "Images/Snack5.jpg",
            description: "These fluffy pancakes are made without dairy or eggs, using banana for natural sweetness. They’re rich in fiber and plant-based goodness for lasting energy. Enjoy them as a wholesome twist on a breakfast.",
            ingredients: [
                "2 ripe bananas, mashed",
                "1 cup oat flour",
                "1 cup almond milk",
                "1 tbsp maple syrup",
                "1 tsp baking powder",
                "1/2 tsp vanilla extract",
                "Pinch of salt",
                "Coconut oil for cooking"
            ],
            instructions: [
                "Mash bananas in a large bowl",
                "Mix in almond milk, maple syrup, and vanilla",
                "Combine dry ingredients separately",
                "Fold wet and dry ingredients until just combined",
                "Cook pancakes in oil over medium heat",
                "Serve with fresh fruit and maple syrup"
            ],
            nutrition: {
                calories: 165,
                protein: "4g",
                carbs: "32g",
                fat: "3g",
                fiber: "4g"
            }
        },
        {
            id: 23,
            name: "Classic Quiche Lorraine Bake",
            image: "Images/Snack6.jpg",
            description: "A lightened version of the French classic with a flaky crust, eggs, and lean bacon. Packed with protein and flavor, it offers an elegant yet nourishing meal. Serve it warm with greens for a balanced brunch or lunch.",
            ingredients: [
                "1 pre-made pie crust",
                "6 slices bacon, cooked and crumbled",
                "6 large eggs",
                "1 cup heavy cream",
                "1/2 cup Gruyere cheese, grated",
                "1/4 cup chives, chopped",
                "Salt, pepper, and nutmeg"
            ],
            instructions: [
                "Preheat oven to 375°F and prebake crust 10 minutes",
                "Cook bacon until crispy, then crumble",
                "Whisk eggs, cream, and seasonings",
                "Sprinkle bacon and cheese in crust",
                "Pour egg mixture over filling",
                "Bake 35-40 minutes until set and golden"
            ],
            nutrition: {
                calories: 345,
                protein: "16g",
                carbs: "18g",
                fat: "25g",
                fiber: "1g"
            }
        }
    ],

    meals: [
        {
            id: 24,
            name: "Healthy Sesame Chicken Bowl",
            image: "Images/Meal1.jpg",
            description: "This dish features tender chicken tossed in a light sesame sauce with fresh vegetables. Packed with protein and healthy fats, it’s a balanced meal that still feels indulgent. Serve it over brown rice or quinoa for a satisfying, nutrient-rich option.",
            ingredients: [
                "1.5 lbs chicken breast, cubed",
                "1/4 cup sesame oil",
                "3 tbsp soy sauce (low sodium)",
                "2 tbsp honey",
                "2 tbsp rice vinegar",
                "2 cloves garlic, minced",
                "1 tbsp fresh ginger, grated",
                "2 tbsp sesame seeds",
                "2 green onions, sliced"
            ],
            instructions: [
                "Cut chicken into bite-sized pieces and season",
                "Mix sesame oil, soy sauce, honey, vinegar, garlic, and ginger",
                "Cook chicken in a large skillet until golden brown",
                "Add sauce and simmer until chicken is coated and sauce thickens",
                "Sprinkle with sesame seeds and green onions",
                "Serve over brown rice with steamed vegetables"
            ],
            nutrition: {
                calories: 385,
                protein: "35g",
                carbs: "12g",
                fat: "22g",
                fiber: "1g"
            }
        },
        {
            id: 25,
            name: "Jerk Chicken Mango Rice Bowl",
            image: "Images/Meal2.jpg",
            description: "Smoky jerk-spiced chicken is paired with fluffy coconut rice and a bright mango salsa. The blend of heat and sweetness creates a vibrant, island-inspired flavor. It’s a wholesome, protein-packed bowl that’s both colorful and satisfying.",
            ingredients: [
                "4 chicken thighs, boneless",
                "2 tbsp jerk seasoning",
                "1 cup jasmine rice",
                "1 cup coconut milk",
                "1 mango, diced",
                "1/4 cup red onion, diced",
                "1 bell pepper, diced",
                "2 tbsp lime juice",
                "Cilantro for garnish"
            ],
            instructions: [
                "Cut chicken into bite-sized pieces and season with jerk spice blend",
                "Cook coconut rice by simmering rice with coconut milk, water, and a pinch of salt until fluffy",
                "Sear chicken in a large skillet until cooked through and slightly charred",
                "Dice mango, red onion, cilantro, and lime juice to make the mango salsa",
                "Assemble bowls by layering coconut rice, jerk chicken, and topping with mango salsa",
                "Garnish with extra cilantro or lime wedges before serving"
            ],
            nutrition: {
                calories: 480,
                protein: "38g",
                carbs: "45g",
                fat: "16g",
                fiber: "5g"
            }
        },

        {
            id: 26,
            name: "Mediterranean Power Rice Bowl",
            image: "Images/Meal3.jpg",
            description: "A fresh mix of herbed rice, crisp vegetables, olives, and lean protein inspired by Mediterranean flavors. Healthy fats from olive oil and a lemony dressing add brightness and balance. It’s a gluten-free bowl full of nutrients.",
            ingredients: [
                "1 cup cooked brown or basmati rice",
                "1 cup diced cucumbers",
                "1 cup halved cherry tomatoes ",
                "½ cup diced red onion ",
                "½ cup Kalamata olives (pitted & sliced) ",
                "2 cups grilled chicken breast (or chickpeas for vegetarian option)  ",
                "2 tbsp olive oil",
                "2 cloves garlic (minced)",
                "1 tsp dried oregano"
            ],
            instructions: [
                "Cook rice (brown or basmati) with a pinch of salt until fluffy",
                "Prepare toppings: dice cucumbers, cherry tomatoes, red onion, and Kalamata olives",
                "Grill or pan-sear chicken (or chickpeas) with olive oil, garlic, and oregano until done",
                "Make a quick dressing by whisking olive oil, lemon juice, salt, and pepper",
                "Assemble bowls by layering rice, protein, and veggies",
                "Drizzle with dressing and top with crumbled feta and fresh parsley before serving"

            ],
            nutrition: {
                calories: 420,
                protein: "30g",
                carbs: "48g",
                fat: "14g",
                fiber: "6g"

            }
        },

        {
            id: 27,
            name: "Mediterranean Rice Bowl - Gluten Free",
            image: "Images/Meal4.jpg",
            description: "A fresh mix of herbed rice, crisp vegetables, olives, and lean protein inspired by Mediterranean flavors. Healthy fats from olive oil and a lemony dressing add brightness and balance. It’s a gluten-free bowl full of nutrients, perfect for a light yet filling meal.",
            ingredients: [
                "2 cups cooked white or brown rice",
                "300g smoked sausage, sliced into rounds",
                "1 red bell pepper, diced",
                "1 yellow bell pepper, diced",
                "1 small onion, chopped",
                "2 cloves garlic, minced",
                "2 tbsp olive oil",
                "½ tsp smoked paprika",
                "Salt and black pepper to taste",
                "¼ cup fresh parsley, chopped"
            ],
            instructions: [
                "Heat olive oil in a large pot over medium heat",
                "Add smoked sausage slices and cook until lightly browned",
                "Add chopped onion, garlic, and diced bell peppers; sauté until softened",
                "Stir in cooked rice and smoked paprika; season with salt and pepper",
                "Cook for 2–3 minutes, stirring, until everything is well combined and heated through",
                "Sprinkle with fresh parsley before serving"
            ],
            nutrition: {
                calories: 480,
                protein: "22g",
                carbs: "52g",
                fat: "18g",
                fiber: "4g"
            }
        },

        {
            id: 28,
            name: "Classic Quiche Lorraine Bake",
            image: "Images/Meal5.jpg",
            description: "A lightened take on the French classic with eggs, lean bacon, and a flaky crust. Flaky, savory egg bake delight, perfectly balanced.. Each slice offers protein and flavor while remaining elegant and satisfying. Serve it warm with a side salad for a balanced breakfast or brunch.",
            ingredients: [
                "4 salmon fillets (about 150g each)",
                "2 tbsp olive oil or melted butter",
                "3 cloves garlic, minced",
                "2 tbsp fresh dill, chopped (or 1 tsp dried dill)",
                "1 tbsp lemon juice",
                "Salt and black pepper to taste",
                "Lemon wedges for serving (optional)"
            ],
            instructions: [
                "Preheat oven to 200°C (400°F) and line a baking tray with parchment paper",
                "Place salmon fillets skin-side down on the tray",
                "In a small bowl, mix olive oil (or butter), minced garlic, chopped dill, lemon juice, salt, and pepper",
                "Brush the mixture evenly over the salmon fillets",
                "Bake for 12–15 minutes (depending on thickness) until salmon flakes easily with a fork",
                "Serve hot with lemon wedges and your choice of vegetables or whole grains"
            ],
            nutrition: {
                calories: 320,
                protein: "34g",
                carbs: "2g",
                fat: "19g",
                fiber: "0g"
            }
        },
    ]

};


// These will hold references to HTML elements we need to work with
let searchInput;        // The search text box
let categoryFilter;     // The dropdown menu for categories
let recipeSections;     // The div where all recipes will be displayed
let modal;              // The popup window for recipe details
let modalBody;          // The content area inside the popup
let closeModalButton;   // The X button to close the popup
let noResultsMessage;   // The message when no recipes are found

document.addEventListener('DOMContentLoaded', function () {

    // Find and store all the HTML elements we need
    searchInput = document.getElementById('searchInput');
    categoryFilter = document.getElementById('categoryFilter');
    recipeSections = document.getElementById('recipe-sections');
    modal = document.getElementById('recipeModal');
    modalBody = document.getElementById('modal-body');
    closeModalButton = document.querySelector('.close');
    noResultsMessage = document.getElementById('no-results');

    // Show all the recipes on the page
    showAllRecipes();

    // Set up all the button clicks and interactions
    setupAllEventListeners();
});

function setupAllEventListeners() {

    // Get  clear filters button
    let clearButton = document.getElementById('clearFiltersBtn');

    //  user types in search box, filter the recipes
    searchInput.addEventListener('input', filterRecipesBySearch);

    // user changes category dropdown, filter the recipes
    categoryFilter.addEventListener('change', filterRecipesBySearch);

    //  user clicks clear button, reset everything
    clearButton.addEventListener('click', clearAllFilters);

    // When user clicks X button, close the popup
    closeModalButton.addEventListener('click', closeRecipePopup);

    // When user clicks outside the popup, modal will close
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeRecipePopup();
        }
    });
}

// This function displays all recipes on the page
function showAllRecipes() {

    // Clear any existing content 
    recipeSections.innerHTML = '';

    // this will filter recipe category (steaks, salads, etc.)
    for (let categoryName in recipeData) {

        // this will get all recipes
        let categoryRecipes = recipeData[categoryName];

        // this will create section for this category
        let categorySection = document.createElement('section');
        categorySection.innerHTML = '<h3><b>' + categoryName.toUpperCase() + '</b></h3>';

        // Create a container to hold all the recipe cards
        let cardsContainer = document.createElement('div');
        cardsContainer.className = 'card-container';
        cardsContainer.setAttribute('data-category', categoryName);

        // this will create a card for each recipe
        for (let i = 0; i < categoryRecipes.length; i++) {
            let recipe = categoryRecipes[i];
            let recipeCard = createOneRecipeCard(recipe, categoryName);
            cardsContainer.appendChild(recipeCard);
        }

        // Adding the cards container to the category section
        categorySection.appendChild(cardsContainer);

        // Adding the whole section to the page
        recipeSections.appendChild(categorySection);
    }

    noResultsMessage.classList.add('hidden');
}

// This function creates one recipe card
function createOneRecipeCard(recipe, categoryName) {

    // Create the card container
    let card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-recipe-id', recipe.id);
    card.setAttribute('data-category', categoryName);
    card.setAttribute('data-name', recipe.name.toLowerCase());

    // Fill the card with HTML content
    card.innerHTML =
        '<img src="' + recipe.image + '" alt="' + recipe.name + '" />' +
        '<div class="card-content">' +
        '<h3>' + recipe.name + '</h3>' +
        '<p>' + recipe.description + '</p>' +
        '<a href="#" class="btn">Read More</a>' +
        '</div>';

    // Finding the "Read More" button 
    let readMoreButton = card.querySelector('.btn');
    readMoreButton.addEventListener('click', function (event) {
        event.preventDefault();  // Stop the link from navigating
        openRecipePopup(recipe.id);  // Show the recipe details
    });

    return card;
}

// Search and filter function
// a function t filter recipes using key word
function filterRecipesBySearch() {

    // Get what the user typed in the search box
    let searchText = searchInput.value.toLowerCase();

    // Get which category the user selected
    let selectedCategory = categoryFilter.value;

    // Find all recipe cards on the page
    let allCards = document.querySelectorAll('.card');
    let visibleCount = 0;

    // to Check card to see if it should be shown or hidden
    for (let i = 0; i < allCards.length; i++) {
        let card = allCards[i];

        // Get the recipe name and category from the card
        let recipeName = card.getAttribute('data-name');
        let recipeCategory = card.getAttribute('data-category');

        // Check if this recipe matches the search
        let matchesSearch = recipeName.includes(searchText);
        let matchesCategory = (selectedCategory === 'all' || recipeCategory === selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    }

    // Show/hide category sections if they have visible cards
    let allSections = document.querySelectorAll('section');
    for (let i = 0; i < allSections.length; i++) {
        let section = allSections[i];
        let visibleCards = section.querySelectorAll('.card:not(.hidden)');

        if (visibleCards.length === 0) {
            section.classList.add('hidden');
        } else {
            section.classList.remove('hidden');
        }
    }

    // Show error message if no recipes match
    if (visibleCount === 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }
}

// This function clears all filters and shows all recipes
function clearAllFilters() {
    // Reset the search box
    searchInput.value = '';

    // Reset the category dropdown
    categoryFilter.value = 'all';

    // Run the filter function to update the display
    filterRecipesBySearch();
}

// Modal pop up
// This function will help finds a recipe by its ID number
function findRecipeById(recipeId) {

    // Look through each category
    for (let categoryName in recipeData) {
        let categoryRecipes = recipeData[categoryName];

        // Look through each recipe in this category
        for (let i = 0; i < categoryRecipes.length; i++) {
            let recipe = categoryRecipes[i];
            if (recipe.id === recipeId) {
                return recipe;  // Found it!
            }
        }
    }

    return null;  //if it not found
}

// This function opens the popup with recipe details
function openRecipePopup(recipeId) {

    // Find the recipe we want to show
    let recipe = findRecipeById(recipeId);

    if (!recipe) {
        return;
    }

    // Create the ingredients list (unordered list)
    let ingredientsList = '<ul>';
    for (let i = 0; i < recipe.ingredients.length; i++) {
        ingredientsList += '<li>' + recipe.ingredients[i] + '</li>';
    }
    ingredientsList += '</ul>';

    // Create the instructions list (ordered list)
    let instructionsList = '<ol>';
    for (let i = 0; i < recipe.instructions.length; i++) {
        instructionsList += '<li>' + recipe.instructions[i] + '</li>';
    }
    instructionsList += '</ol>';

    // Create the nutrition table (HTML table)
    let nutritionTable =
        '<table>' +
        '<tr><th>Nutrient</th><th>Amount</th></tr>' +
        '<tr><td>Calories</td><td>' + recipe.nutrition.calories + '</td></tr>' +
        '<tr><td>Protein</td><td>' + recipe.nutrition.protein + '</td></tr>' +
        '<tr><td>Carbohydrates</td><td>' + recipe.nutrition.carbs + '</td></tr>' +
        '<tr><td>Fat</td><td>' + recipe.nutrition.fat + '</td></tr>' +
        '<tr><td>Fiber</td><td>' + recipe.nutrition.fiber + '</td></tr>' +
        '</table>';

    // Put all the content together
    let popupContent =
        '<h2>' + recipe.name + '</h2>' +
        '<img src="' + recipe.image + '" alt="' + recipe.name + '" />' +
        '<div class="ingredients">' +
        '<h3>Ingredients</h3>' +
        ingredientsList +
        '</div>' +
        '<div class="instructions">' +
        '<h3>Instructions</h3>' +
        instructionsList +
        '</div>' +
        '<div class="nutrition">' +
        '<h3>Nutrition Information</h3>' +
        nutritionTable +
        '</div>';

    // Put the content in the popup and show it
    modalBody.innerHTML = popupContent;
    modal.style.display = 'block';

    // Prevent scrolling in the background
    document.body.style.overflow = 'hidden';
}

// This function closes the recipe popup
function closeRecipePopup() {

    // Hide the popup
    modal.style.display = 'none';

    // Allow scrolling again
    document.body.style.overflow = 'auto';
}

// This function can be used by other pages to create nutrition tables

function createNutritionTable(nutritionInfo) {
    return '<table>' +
        '<tr><th>Nutrient</th><th>Amount</th></tr>' +
        '<tr><td>Calories</td><td>' + nutritionInfo.calories + '</td></tr>' +
        '<tr><td>Protein</td><td>' + nutritionInfo.protein + '</td></tr>' +
        '<tr><td>Carbohydrates</td><td>' + nutritionInfo.carbs + '</td></tr>' +
        '<tr><td>Fat</td><td>' + nutritionInfo.fat + '</td></tr>' +
        '<tr><td>Fiber</td><td>' + nutritionInfo.fiber + '</td></tr>' +
        '</table>';
}