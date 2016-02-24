from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^users/', include('users.pages.urls')),
    url(r'^api/users/', include('users.api.urls')),
    url(r'^.*$', TemplateView.as_view(template_name='home.html'))
]
