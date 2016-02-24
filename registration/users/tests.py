from django.db.utils import IntegrityError
from django.test import TransactionTestCase
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
import time
from selenium import webdriver
from users.models import RegisterUser


class DataMixin:
    data = {
        'first_name': 'test first name',
        'last_name': 'test last name',
        'address_1': '1 Main Street',
        'address_2': 'Apt. 101',
        'city': 'Coruscant',
        'state': 'MI',
        'postal': '48226',
        'country': 'US'
    }    

class UserValidationTests(DataMixin, TransactionTestCase):

    def create_with_data(self):
        RegisterUser.objects.create(**self.data)

    def test_save_valid(self):
        RegisterUser.objects.create(**self.data)

    def test_missing_field(self):
        for key, value in self.data.items():
            if key!='address_2':
                tmp = value
                self.data[key] = None
                with self.assertRaises(IntegrityError):
                    self.create_with_data()
                self.data[key] = value

class PageTests(DataMixin, StaticLiveServerTestCase):
    test_server = 'http://localhost:8081'

    def browser_get(self, path):
        self.driver.get(self.test_server + path)
        time.sleep(1)

    def click(self, element):
        element.click()
        time.sleep(1)

    def tearDown(self):
        self.driver.close()

    def test_create_user(self):
        self.driver = webdriver.Firefox()
        user_count = RegisterUser.objects.count()
        self.browser_get('/users/register')
        for key, value in sorted(self.data.items(), reverse=True):
            current_field = self.driver.find_element_by_id(key + '_input')
            current_field.click()
            current_field.send_keys(value)
            time.sleep(0.5)
        time.sleep(1)
        save_button = self.driver.find_element_by_id('save-button')
        self.click(save_button)
        self.assertEqual(RegisterUser.objects.count(), user_count + 1)

        self.assertIn('/confirm', self.driver.current_url)
        self.driver.find_elements_by_xpath('//td[contains(text(), "{}")]'
            .format(self.data['first_name']))