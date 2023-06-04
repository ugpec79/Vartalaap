from django.contrib import admin
from django.urls import path, include
from Blogs import views
urlpatterns = [
    path('getBlogs', views.getBlogs),
    path('getBlog/<int:idNum>', views.getBlog),
    path('updateBlog/<int:idNum>', views.updateBlog),
    path('deleteBlog/<int:idNum>', views.deleteBlog),
    path('createBlog', views.newBlog),
    
]
