from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/posts/', views.PostView.as_view(), name='post-view'),
    path('api/profiles/', views.ProfileView.as_view(), name='profile-view'),
    path('api/experiences/', views.ExperienceView.as_view(), name='experience-view'),
    path('api/educations/', views.EducationView.as_view(), name='education-view'),
    path('api/skills/', views.SkillView.as_view(), name='skill-view'),
]