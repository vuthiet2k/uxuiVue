from django.urls import path, include

from app_api.views import CourseAPI
from . import views
from rest_framework import routers
# routers = routers.DefaultRouter()
# routers.register('place', CourseAPI, 'place')

urlpatterns = [

    path('a', CourseAPI.as_view() ),
    path('', views.thiethv, name='test-ui-ux')
]
