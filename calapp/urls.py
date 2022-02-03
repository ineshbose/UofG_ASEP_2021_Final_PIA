from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("exponent/", views.exponent, name="exponent"),
    path("multiply/", views.multiply, name="multiply"),
    path("addition/", views.addition, name="addition"),
    path("subtract/", views.subtract, name="subtract"),
    path("divide/", views.divide, name="divide"),
]
