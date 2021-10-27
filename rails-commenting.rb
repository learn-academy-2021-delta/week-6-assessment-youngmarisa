# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the generated controller file created when $ rails g controller BlogPost is ran in the terminal. The controller takes class methods that define what happens when a method is reached.
class BlogPostsController < ApplicationController
  def index
    # ---2) An Active Record call, in the index controller method, that saves all database content from BlogPost as an instance variable (@posts)
    # instance variable (@posts) that holds Active Record query (BlogPost.all) that returns an array of all the instances in the database.
    @posts = BlogPost.all
  end

  def show
    # ---3) A singular instance variable (@post) set to an active record query to find one particular blogpost from the set. Collect an id from the url, pass it into the .find() method to query the database for one post.
    @post = BlogPost.find(params[:id])
  end

  # ---4) new controller method is a RESTful route that displays a form for the user. This is a way for the user to add information to the application that can then be stored in the database. It contains an instance variable @post that holds an active record command .new. It acts as a placeholder for expecting new information to follow. A place to take content from the form and hold it to be able to pass information to the database.
  def new
    @post = Post.new
  end

  def create
    # ---5) a RESTful route that takes the user's data and submits it to the database. .create takes a param
    # a singular instance variable (@post) and pass an active record queary (BlogPost.create) pass it a method call called (blog_post_params). blog_post_params is a method defined in the controller.
    # adding content to the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit controller method, updates pieces of information from a specific item that has already been created.
  # Have to know which item we want to edit so it contains a singular instance variable (@post) set to an active record query to find one particular blogpost from the set. Collect an id from the url, pass it into the .find() method to query the database for one post to update.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Active record update that only allows user to interact and update data from specific columns by passing in the blog_post_params method.  Check to see if instance variable is valid, redirect page to show page that will display update by passing in the @post param or if not valid redirect to edit form page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If post was not destroyed correctly, redirects user's webpage view back to the show page blog_post_path that passes the instance variable @post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Anything below keyword (private) cannot be accessed outside the scope of this class. Create method gets called by route but blog_post_params method should only be called inside this class. Pass private to protect method.
  private
  def blog_post_params
    # ---10) A strong params method that only allows user to access the database table blogpost and it restricts user access to only the title and content columns of the blogpost database.
    params.require(:blog_post).permit(:title, :content)
  end
end
