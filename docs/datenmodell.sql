create table administration(
    famID number(8),
    constraint pk_famID primary key (famID),
    mainUser_ID number(4) constraint fk_mainuserID references main_user_template(mainUserID)
);

drop table adminstration;

create table mealPlan(
    weekID number(4),
    constraint pk_weekID primary key (weekID),
    famID number(8) constraint fk_famID references administration(famID)
);

create table main_user_template(
    mainUserID number(4),
    constraint pk_mainUserID primary key (mainUserID),
    username varchar2(30),
    pw varchar2(30)
);

create table user_template(
    userID number(4),
    constraint pk_user primary key (userID),
    username varchar2(30),
    pw varchar2(30),
    rights number(1), -- 1 = main-user (alle Rechte), 2 = side-user ...
    famID number(8) constraint fk_famID_ut references administration(famID) -- UCD ändern,
);

create table recipes(
    recipeID number(4),
    constraint pk_recipes primary key (recipeID),
    recipeName varchar2(30),
    preparation varchar2(1000),
    rating number(1) check (rating between 1 and 5),
    weekID number(4) constraint fk_weekID references mealPlan(weekID)
);

create table ingredients(
    ingredient_name varchar2(30),
    constraint pk_ingredients primary key (ingredient_name),
    amount number,
    unit varchar(10),
    recipeID number(4) constraint fk_recipeID references recipes(recipeID),
    shoppinglist_ID constraint fk_shoppinglistID references shoppinglist(shoppinglist_ID)
);

create table shoppinglist(
    shoppinglist_ID number(4),
    constraint pk_shoppinglist primary key (shoppinglist_ID)
);

create table remysTips(
    message_ID number(4),
    constraint pk_messageID primary key (message_ID),
    tips varchar2(500)
);