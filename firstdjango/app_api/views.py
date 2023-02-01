from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
from thiethv.models import Course


@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})


class Courses(APIView):
    def get(self, request):
        return Response("Ajhiihhi")

    def post(self, request):
        subject = request.POST.get('key')
        a = Course.objects.create(subject=subject)
        return Response({
                        "score": 0,
                        "index_question": 0
                    }, status=200)

    def put(self, request):
        subject = request.POST.get('key')
        a = Course.objects.create(subject=subject)
        return Response(a)