from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("exponent/", views.exponent, name="exponent"),
    path("multiply/", views.multiply, name="multiply"),
]
