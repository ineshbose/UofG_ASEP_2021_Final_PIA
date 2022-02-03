import json
from urllib import response
from django.test import TestCase

class CalappTests(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        return super().setUpTestData()

    def test_correct_exponential(self):
        response = self.client.post(
            "/exponent/",
            json.dumps({"num1": 2, "num2": 2}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], 4)

    def test_incorrect_exponential(self):
        response = self.client.post(
            "/exponent/",
            json.dumps({"num1": 3, "num2": 2}),
            content_type="application/json",
        )
        self.assertNotEqual(response.status_code, 404)
        self.assertJSONNotEqual(response.content, {"result": 100})

    def test_correct_multiply(self):
        response = self.client.post(
            "/multiply/",
            json.dumps({"num1": 5, "num2": 5}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], 25)

    def test_incorrect_multiply(self):
        response = self.client.post(
            "/multiply/",
            json.dumps({"num1": 41, "num2": 2}),
            content_type="application/json",
        )
        self.assertNotEqual(response.status_code, 404)
        self.assertJSONNotEqual(response.content, {"result": 80})

    def test_correct_addition(self):
        response = self.client.post(
            "/addition/",
            json.dumps({"num1": 0, "num2": 6}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], 6)

    def test_negative_addition(self):
        response = self.client.post(
            "/addition/",
            json.dumps({"num1": 2, "num2": -6}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], -4)

    def test_incorrect_addition(self):
        response = self.client.post(
            "/addition/",
            json.dumps({"num1": 12, "num2": 2}),
            content_type="application/json",
        )
        self.assertNotEqual(response.status_code, 404)
        self.assertJSONNotEqual(response.content, {"result": 100})


    def test_correct_subtract_with_positive_result(self):
        response = self.client.post(
            "/subtract/",
            json.dumps({"num1": 3, "num2": 2}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], 1)
    
    def test_incorrect_subtract(self):
        response = self.client.post(
            "/subtract/",
            json.dumps({"num1": 8, "num2": 5}),
            content_type="application/json",
        )
        self.assertNotEqual(response.status_code, 404)
        self.assertJSONNotEqual(response.content, {"result": 100})
    
    def test_subtract_with_negative_result(self):
        response = self.client.post(
            "/subtract/",
            json.dumps({"num1": 2, "num2": 3}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], -1)



    def test_correct_division(self):
        response = self.client.post(
            "/divide/",
            json.dumps({"num1": 21, "num2": 3}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)

        data = json.loads(response.content)
        self.assertIn("result", data)
        self.assertEqual(data["result"], 7.0)

    def test_incorrect_division(self):
        response = self.client.post(
            "/divide/",
            json.dumps({"num1": 1, "num2": 1}),
            content_type="application/json",
        )
        self.assertNotEqual(response.status_code, 404)
        self.assertJSONNotEqual(response.content, {"result": 100})
