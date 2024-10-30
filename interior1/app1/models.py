from django.db import models

# Create your models here.
class QuoteRequest(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.name} - {self.phone_number}"