# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: If the foreign key was not added then create a migration to the database. The name of the foreign key would be Student Id and the foreign key would be on the Student model because students belongs to the Cohort model.

  Researched answer: You can use $ rails db:migrate if you forgot to add the foreign key or if the column name was mislabled by mistake.
  app/models/cohort.rb
class Cohort < ApplicationRecord
  has_many :students
end

Note: emails is plural
app/models/student.rb
class Student < ApplicationRecord
  belongs_to :cohort
end


To create a new student entry, we have to assign it to a cohort entry
$ rails c
Alpha = cohort.first

Now assign students to alpha cohort entry

> alpha.students.create name: “Jess”
> alpha.students.create name: “Kim”
> alpha.students.create name: “Will”
> alpha.students

#<ActiveRecord::Associations::CollectionProxy [#<Student id: 1, name: “Jess”, person_id: 1, ...>, #<Student id: 2, name: “Kim”, person_id: 1, ...>, #<Student id: 3, name: “Will”, person_id: 1, ...>]>



2. Which RESTful routes must always be passed params? Why?

  Your answer: The three RESTful routes that require a param to be passed are Show, Update, and Delete. The reason why these RESTful routes require params are because they need to be able to identify the item that requires updating, deleting or showing. For example, if a user has a list of clothing items to purchase on a shopping website and they wish to delete one of the items from the cart, the delete restful route must require the param with the id of the item the user wishes to delete. Such as if the user wants to update an item in their cart, the restful route will require the id for that item to be passed in the param so it knows which item to update.

  Researched answer: Show is the R in CRUD which stands for read. Show is a restful route that requires a parameter because Rails needs to identify which particular item in the database to be viewed so the user can read it. Update is the U in CRUD and it requires a param because Rails needs to identify and show which item's content in the database the user wants edit. Lastly, delete/destroy is the D in CRUD which also requires a param because Rails needs to identify which item's content the user wants to remove and delete from the database.



3. Name three rails generator commands. What is created by each?

  Your answer: Generate Rspec, generate model, and generate controller are three rails generator commands. Generate rspec creates a test file used to test code through rspec. Generate model creates a model file. The generate model command takes in a name for the model file as well as category names for each column as well as the data type for each column.
  Generate controller creates files associated with the controller which handles the interactions between the model, user, and views (MVC).

  Researched answer: The generate commands tasks Rails in creating the corresponding file structures by passing information into the terminal command line.
  The three rails generator commands are:
  $ rails generate rspec:install --> generates test driven development file, RSpec.
  $ rails generate model Name --> generates a model file
  $ rails generate controller Name --> generates a app/controllers/name_controller.rb and app/views/name.rb folders




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         
index- displays list of all students

method="POST"   /students         
create- adds new students to the database

method="GET"    /students/new     
new- a form to add new student to the database

method="GET"    /students/2       
show- displays data for student with id:2

method="GET"    /students/2/edit  
edit- a form to edit data for student with id:2

method="PATCH"  /students/2      
update- modifies/updates data for student with id: 2

method="DELETE" /students/2      
destroy- deletes data for student with id:2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to create an Amazon account so that I can use Amazon 2-day shipping.
2. As a Amazon registered user, I want to buy a kindle so that I can download books to read.
3. As a Amazon seller, I want to display all my items on a store front page so users can browse and purchase my items.
4. As a Amazon registered user, I want to read item reviews from customers so that I can decide which item to purchase.
5. As a Amazon registered user, I want to view all items and their price in my shopping cart so that I can see what I am buying and the total cost.
6. As a user, I want to remove an item from my cart and save it for later so that I can buy it when I am ready.
7. As a user, I want to return a damaged purchased item that I bought so that I can receive a refund.  
8. As a user, I want to write a review for the item I bought so that other customers can read it to determine if they should buy it or not.
9. As a user, I want to track the shipping of my item so that I can know when it is being delivered.
10. As a user, I want to view my purchase history so that I can buy the same item again.
