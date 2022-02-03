import json
from django.http import HttpResponse, JsonResponse


def index(request):
    """
    Root view of calapp, just displays 'Hello world'.
    """
    return HttpResponse("Hello, world.")


def exponent(request):
    """
    Takes two numbers and performs exponent operation.
    """
    data = json.loads(request.body.decode("utf-8"))
    return JsonResponse({"result": data["num1"] ** data["num2"]})

def multiply(request):
    """
    Takes two numbers and performs multiply operation.
    """
    data = json.loads(request.body.decode("utf-8"))
    return JsonResponse({"result": data["num1"] * data["num2"]})
def addition(request):
    """
    Takes two numbers and performs addition operation.
    """
    data = json.loads(request.body.decode("utf-8"))
    return JsonResponse({"result": data["num1"] + data["num2"]})
def subtract(request):
    data = json.loads(request.body.decode("utf-8"))
    return JsonResponse({"result": data["num1"] - data["num2"]})

def divide(request):
    """
    Takes two numbers and performs a division operation.
    If denominator is equal to zero, None will be returned
    """
    data = json.loads(request.body.decode("utf-8"))
    result = None if data["num2"] == 0 else data["num1"] / data["num2"]
    return JsonResponse({"result": result})
