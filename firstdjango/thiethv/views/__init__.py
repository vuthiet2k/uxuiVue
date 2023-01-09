import json

import requests
from django.shortcuts import render, redirect, HttpResponse


def thiethv(request, **kwargs):
    return render(request, 'thiethv/components.html')
