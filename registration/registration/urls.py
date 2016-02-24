from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

from users.pages.views import UserListView

urlpatterns = [
    url(r'^admin/?$', UserListView.as_view()),
    url(r'^users/', include('users.pages.urls')),
    url(r'^confirm/?$', TemplateView.as_view(template_name='confirmation.html')),
    url(r'^api/users/', include('users.api.urls')),
    url(r'^.*$', TemplateView.as_view(template_name='home.html'))
]
