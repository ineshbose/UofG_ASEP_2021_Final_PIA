from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("", include("calapp.urls")),
    path("admin/", admin.site.urls),
]
