from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Post, Profile, Experience, Education, Skill
from .serializers import PostSerializer, ProfileSerializer, ExperienceSerializer, EducationSerializer, SkillSerializer

# Create your views here.

def home(request):
    return render(request, 'home.html')

class PostView(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
class ProfileView(APIView):
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

class ExperienceView(APIView):
    def get(self, request):
        experiences = Experience.objects.all()
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

class EducationView(APIView):
    def get(self, request):
        educations = Education.objects.all()
        serializer = EducationSerializer(educations, many=True)
        return Response(serializer.data)

class SkillView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)