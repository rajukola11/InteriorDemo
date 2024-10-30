from django.shortcuts import render,redirect
from django.http import JsonResponse
from .forms import QuoteRequestForm

def index(request):
    return render(request,'index.html')

def form(request):
    if request.method=="POST":
        form = QuoteRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request,'backtohome.html')
    else:
        form=QuoteRequestForm()
    return render(request,'form.html',{'form':form})
