from django.views.generic import TemplateView

from users.models import RegisterUser

class UserListView(TemplateView):
    template_name = 'admin.html'

    def get_context_data(self, **kwargs):
        context = super(UserListView, self).get_context_data(**kwargs)
        context['users'] = RegisterUser.objects.all().order_by('-created')
        return context
