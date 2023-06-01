from django.db import models

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=500,null=True)
    content=models.CharField(max_length=25000,null=True)
    pub_date=models.DateField()
    upt_date=models.DateField()
    created_user=models.CharField(max_length=500,null=True)
