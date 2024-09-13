from django.contrib import admin
from MyTree.models import *

@admin.register(Tree)
class TreeAdmin(admin.ModelAdmin):
    list_display = ('species', 'planted_on', 'location', 'user')
    search_fields = ('species', 'location')

@admin.register(PlantingEvent)
class PlantingEventAdmin(admin.ModelAdmin):
    list_display = ('name', 'event_date', 'location', 'created_by')
    search_fields = ('name', 'location')

@admin.register(TreeGrowthRecord)
class TreeGrowthRecordAdmin(admin.ModelAdmin):
    list_display = ('tree', 'record_date', 'height', 'health_status')
    search_fields = ('tree__species',)

@admin.register(ImpactReport)
class ImpactReportAdmin(admin.ModelAdmin):
    list_display = ('report_date', 'total_trees_planted', 'total_carbon_sequestered')
    search_fields = ('report_date',)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio')
    search_fields = ('user__username',)
