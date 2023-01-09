from django.urls import path
from . import views


urlpatterns = [
    path('', views.thiethv, name='test-ui-ux')
]
