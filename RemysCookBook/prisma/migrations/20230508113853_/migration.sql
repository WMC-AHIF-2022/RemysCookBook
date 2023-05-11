-- CreateTable
CREATE TABLE "recipes" (
    "recipeID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeName" TEXT NOT NULL,
    "preparation" TEXT NOT NULL,
    "rating" INTEGER,
    "category" TEXT NOT NULL,
    "weekID" INTEGER,
    "recipeDate" TEXT
);

-- CreateTable
CREATE TABLE "requestedRecipes" (
    "recipeID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeName" TEXT NOT NULL,
    "requestedFrom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ingredients" (
    "ingredientID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recipeID" INTEGER NOT NULL,
    "ingredientName" TEXT NOT NULL,
    "amount" TEXT,
    "unit" TEXT
);

-- INSERT VALUES
insert into recipes values (4929, 'Maki Sushi', '1. Prepare sushi rice: Cook Japanese white rice is mixed with a special sushi rice vinegar. 
  2. Prepare your sushi rolling mat: Once you have your sushi rice prepared, you will need to begin by laying out a preparation area with your makisu rolling mat. 
  3. Place a sheet of nori seaweed on the mat: Cover two thirds of one side of your nori seaweed with your sushi rice approximately 1cm high. 
  4. Add your ingredients in a line on top of the rice in the centre: You can choose any combination of ingredients that compliment each other well. We went for salmon, salad and mayonnaise for this one. 
  5. Roll your sushi: Now for the fun bit. Using the wooden rolling mat, start rolling up the ingredients away from you, while keeping the roll tight. The moisture from the rice will help it stick together. 
  6. Cut the sushi roll: You can then cut your roll into 6-8 pieces and serve with some soy sauce, wasabi, sushi ginger and cup of sencha green tea.', 5, 'Japanese', 3934, '2023-05-15');
  
  insert into recipes values (6787, 'Pizza Margherita', '1. Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it is not essential for a thin crust.
  2. Make the sauce: Mix the passata, basil and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.
  3. Roll out the dough: if you havve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.
  4. Top and bake: heat the oven to 240C/220C fan/gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil, and basil leaves if using. Repeat step for remaining pizza.', 4, 'Italian', 3934, '2023-05-16');
  
  insert into recipes values (9078, 'Hamburger', '1. In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
  2. Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grill.
  3. Lay buns, cut side down, on grill and cook until lightly toasted, 30 seconds to 1 minute.
  4. Spread mayonnaise and ketchup on bun bottoms. Add lettuce, tomato, burger, onion, and salt and pepper to taste. Set bun tops in place.', 3, 'American', 3934, '2023-05-17');
  
  insert into recipes values (8066, 'spaghetti carbonara', '1. Put a large saucepan of water on to boil.
  2. Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.
  3. Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.
  4. Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).
  5. Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.
  6. While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.
  7. Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.
  8. Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Do not worry if a little water drops in the pan as well (you want this to happen) and do not throw the pasta water away yet.
  9. Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.
  10. Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but does not scramble, and everything is coated.
  11. Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You do not want it wet, just moist. Season with a little salt, if needed.
  12. Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived.', 4, 'Italian', 3934, '2023-05-18');
  
  insert into recipes values (6764, 'Chicken Ramen', '1. Mix 700ml chicken stock, 3 halved garlic cloves, 4 tbsp soy sauce, 1 tsp Worcestershire sauce, a sliced thumb-sized piece of ginger, 1/2 tsp Chinese five spice, pinch of chilli powder and 300ml water in a stockpot or large saucepan, bring to the boil, then reduce the heat and simmer for 5 mins.
  2. Taste the stock, add 1 tsp white sugar or a little more soy sauce to make it sweeter or saltier to your liking.
  3. Cook 375g ramen noodles following the pack instructions, then drain and set aside.
  4. Slice 400g cooked pork or chicken, fry in 2 tsp sesame oil until just starting to brown, then set aside.
  5. Divide the noodles between four bowls. Top each with a quarter of the meat, 25g spinach, 1 tbsp sweetcorn and two boiled egg halves each.
  6. Strain the stock into a clean pan, then bring to the boil once again.
  7. Divide the stock between the bowls, then sprinkle over 1 shredded nori sheet, sliced spring onions or shallots and a sprinkle of sesame seeds. Allow the spinach to wilt slightly before serving.', 3, 'Korean', null, null);
  
  insert into recipes values (7432, 'Tomato Penne', '1. Bring a large pot of water to a rolling boil over high heat. Cook pasta in boiling water until cooked through but still firm to the bite, about 10 minutes. Drain and set aside.
  2. Heat both oils in a large skillet over medium-high heat. Add garlic and cook until soft, 1 to 2 minutes. Add tomatoes, reduce heat to medium, and simmer for 10 minutes. Stir in pepper Jack, mozzarella, and Parmesan cheese. When cheese begins to melt, mix in cooked penne pasta. Season with fresh basil.', 5, 'Italian', null, null);
  
  insert into requestedRecipes values (6760, 'Chicken Ramen', 'Melanie');
  
  insert into ingredients values (1, 4929, 'sushi rice', 1, 'cup');
  insert into ingredients values (2, 4929, 'water', 1, 'cup');
  insert into ingredients values (3, 4929, 'rice vinegar', 1, 'tbsp');
  insert into ingredients values (4, 4929, 'sugar', 1, 'tbsp');
  insert into ingredients values (5, 4929, 'salt', 1, 'tsp');
  insert into ingredients values (6, 4929, 'nori', 1, 'sheet');
  insert into ingredients values (7, 4929, 'cucumber', 1, null);
  insert into ingredients values (8, 4929, 'avocado', 1, null);
  insert into ingredients values (9, 4929, 'crab sticks', 1, null);
  
  insert into ingredients values (10, 6764, 'chicken stock', 700, 'ml');
  insert into ingredients values (11, 6764, 'garlic', 3, 'cloves');
  insert into ingredients values (12, 6764, 'soy sauce', 4, 'tbsp');
  insert into ingredients values (13, 6764, 'Worcestershire sauce', 1, 'tsp');
  insert into ingredients values (14, 6764, 'ginger', 1, 'thumb-sized piece');
  insert into ingredients values (15, 6764, 'Chinese five spice', 1, 'tsp');
  insert into ingredients values (16, 6764, 'ramen noodles', 375, 'g');
  insert into ingredients values (17, 6764, 'cooked pork or chicken', 400, 'g');
  insert into ingredients values (18, 6764, 'sesame oil', 2, 'tsp');
  insert into ingredients values (19, 6764, 'spinach', 25, 'g');
  insert into ingredients values (20, 6764, 'sweetcorn', 1, 'tbsp');
  insert into ingredients values (21, 6764, 'eggs', 2, 'boiled');
  insert into ingredients values (22, 6764, 'nori sheet', 1, 'shredded');
  insert into ingredients values (23, 6764, 'spring onions or shallots', 1, 'sliced');
  insert into ingredients values (24, 6764, 'sesame seeds', 1, 'sprinkle');
  
  insert into ingredients values (25, 6787, 'pizza dough', 1, null);
  insert into ingredients values (26, 6787, 'tomato sauce', 1, 'cup');
  insert into ingredients values (27, 6787, 'mozzarella cheese', 1, 'cup');
  insert into ingredients values (28, 6787, 'basil', 1, 'tbsp');
  
  insert into ingredients values (29, 7432, 'minced fresh basil', 1, 'tbsp');
  insert into ingredients values (30, 7432, 'garlic', 3, 'cloves');
  insert into ingredients values (31, 7432, 'olive oil', 2, 'tbsp');
  insert into ingredients values (32, 7432, 'salt', 1, 'tsp');
  insert into ingredients values (33, 7432, 'penne pasta', 1, 'pound');
  insert into ingredients values (34, 7432, 'pepper jack cheese', 1, 'cup');
  insert into ingredients values (35, 7432, 'mozzarella cheese', 1, 'cup');
  insert into ingredients values (36, 7432, 'parmesan cheese', 1, 'cup');
  insert into ingredients values (37, 7432, 'tomatoes', 1, 'pound');
  insert into ingredients values (38, 7432, 'sesame seeds', null, null);
  
  insert into ingredients values (39, 8066, 'spaghetti', 350, 'g');
  insert into ingredients values (40, 8066, 'pancetta', 100, 'g');
  insert into ingredients values (41, 8066, 'pecorino cheese', 50, 'g');
  insert into ingredients values (42, 8066, 'parmesan', 50, 'g');
  insert into ingredients values (43, 8066, 'eggs', 3, '');
  insert into ingredients values (44, 8066, 'garlic', 2, 'cloves');
  insert into ingredients values (45, 8066, 'butter', 50, 'g');
  insert into ingredients values (46, 8066, 'black pepper', 1, 'pinch');
  
  insert into ingredients values (47, 9078, 'beef', 1, 'pound');
  insert into ingredients values (48, 9078, 'salt', 1, 'tsp');
  insert into ingredients values (49, 9078, 'pepper', 1, 'tsp');
  insert into ingredients values (50, 9078, 'onion', 1, 'chopped');
  insert into ingredients values (51, 9078, 'garlic', 1, 'clove');
  insert into ingredients values (52, 9078, 'egg', 1, null);
  insert into ingredients values (53, 9078, 'bread crumbs', 1, 'cup');
  insert into ingredients values (54, 9078, 'olive oil', 1, 'tbsp');
  insert into ingredients values (55, 9078, 'hamburger buns', 4, null);
  insert into ingredients values (56, 9078, 'lettuce', 4, 'leaves');
  insert into ingredients values (57, 9078, 'tomato', 4, 'slices');