from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    # return HttpResponse("Hello World")
    students = [
        {'name': 'Ali', 'age': 21, 'program': 'BSCS', 'batch': 2021},
        {'name': 'John', 'age': 22, 'program': 'BSCS', 'batch': 2022},
        {'name': 'Kevin', 'age': 23, 'program': 'BSCS', 'batch': 2023},
        {'name': 'Jack', 'age': 24, 'program': 'BSCS', 'batch': 2024},
    ]
    return render(request, "home/index.html", context={'std': students})
