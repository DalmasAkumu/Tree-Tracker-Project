from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Tree(models.Model):
    species = models.CharField(max_length=100)
    planted_on = models.DateField()
    location = models.CharField(max_length=255)
    geotag = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
         return f"{self.species} planted by {self.user.username} on {self.planted_on}"

class PlantingEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    event_date = models.DateField()
    location = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    trees_planted = models.ManyToManyField(Tree, related_name='events')

    def __str__(self):
        return f"{self.name} on {self.event_date}"
    
class TreeGrowthRecord(models.Model):
    tree = models.ForeignKey(Tree, on_delete=models.CASCADE)
    record_date = models.DateField()
    height = models.DecimalField(max_digits=5, decimal_places=2)  #Height in meters 
    health_status = models.CharField(max_length=100)
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Record for {self.tree.species} on {self.record_date}"

class ImpactReport(models.Model):
    report_date = models.DateField()
    total_trees_planted = models.IntegerField()
    total_carbon_sequestered = models.DecimalField(max_digits=10, decimal_places=2)  # Carbon in tons
    summary = models.TextField()

    def __str__(self):
        return f"Impact Report for {self.report_date}"

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return self.user.username


     
    