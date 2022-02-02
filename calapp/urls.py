from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("exponent/", views.exponent, name="exponent"),
    path("subtract/", views.subtract, name="subtract"),
]
