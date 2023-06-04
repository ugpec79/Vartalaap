from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime
from Blogs.models import Blog
from django.core import serializers
import json

# Create your views here.
def newBlog(request):
    if(request.method=='POST'):
        req=json.loads(request.body)
        title=req['title']
        desc=req['desc']
        auth=req['auth']
        blog= Blog(title=title, content=desc, pub_date=datetime.today(),upt_date=datetime.today(),created_user=auth)
        blog.save()
        return  JsonResponse({'result':'success'})
def getBlogs(request):
    if(request.method=='GET'):
        list_of_blogs=list(Blog.objects.all().order_by('-pub_date').values())
        print(list_of_blogs)
        return JsonResponse({'blogs':list_of_blogs})
def getBlog(request,idNum):
    if(request.method=='GET'):
        if(Blog.objects.filter(id=idNum).exists()):
            blog=Blog.objects.get(id=idNum)
            return JsonResponse({'title':blog.title,'content':blog.content,'pub_date':blog.pub_date,'upt_date':blog.upt_date,'author':blog.created_user})
        else:
            return JsonResponse({'result':'Not Found'})

def deleteBlog(request,idNum):
    if(request.method=='POST'):
        if(Blog.objects.filter(id=idNum).exists()):
            blog=Blog.objects.get(id=idNum)
            blog.delete()
            return JsonResponse({'result':'success'})
        else:
            return JsonResponse({'result':'Not Found'})
def updateBlog(request,idNum):
    if(request.method=='POST'):
        if(Blog.objects.filter(id=idNum).exists()):
            req=json.loads(request.body)
            title=req['title']
            content=req['desc'] 
            
            blog=Blog.objects.get(id=idNum)
            blog.title=title
            blog.content=content
            blog.upt_date=datetime.today()
            blog.save()
            return JsonResponse({'result':'success'})
        else:
            return JsonResponse({'result':'Not Found'})
   