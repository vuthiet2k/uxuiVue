from rest_framework.decorators import api_view, action
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.core import serializers

# Create your views here.
from thiethv.models import Course
from thiethv.serializers import CourseSerializer


@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})


class CourseAPI(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    serializers_class = CourseSerializer

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        course = Course.objects.all()
        return Response(self.serializers_class(course,many=True).data,status= status.HTTP_200_OK)

# class Courses(APIView):
#     def get(self, request):
#         if not Course.objects.all().exists():
#             return Response([])
#             # Chưa tồn tại table
#             # => Tạo table mới
#             # system_config = Course.objects.create()
#             # system_config.save()
#         data = Course.objects.all()
#         return Response(data=serializers.serialize("json", data))
#
#     def post(self, request):
#         subject = request.POST.get('subject')
#         discription = request.POST.get('discription')
#         a = Course.objects.create(subject=subject, discription=discription)
#         serialize = CourseSerializer(a)
#
#         return Response(serialize)
#
#     def put(self, request):
#         subject = request.POST.get('key')
#         a = Course.objects.create(subject=subject)
#         return Response(a)
