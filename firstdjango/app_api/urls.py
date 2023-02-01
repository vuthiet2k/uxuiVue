from django.urls import path
from . import views


urlpatterns = [
    path('a', views.Courses.as_view()),
    path('abc', views.hello_world),
]
