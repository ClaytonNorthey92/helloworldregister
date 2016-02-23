from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^register/?$', TemplateView.as_view(template_name='user-form.html'))
]
