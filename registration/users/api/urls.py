from django.conf.urls import url, include
from users.api.views import CreateUserView

urlpatterns = [
    url(r'^create/?$', CreateUserView.as_view()),
    url(r'^state_choices/?$', 'users.api.views.list_state_choices')
]
