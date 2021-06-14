# kubernetes-practice
This is a basic web api service that was built to practice the things I learned in kubernetes.

The API was built in NodeJS and it exposes one endpoint (`/users`) that does two things;
- Receives a payload and creates a user
- Gives a list of all users created.

## Basic Setup
To set it up locally, you need to have [minikube installed](https://minikube.sigs.k8s.io/docs/start/) and running.
Then you need to run the following deployments and services using their respective configuration files in this order;

- `kubectl apply -f mongo-configmap.yaml`
- `kubectl apply -f mongo-secret.yaml`
- `kubectl apply -f mongo.yaml`
- `kubectl apply -f app.yaml`

Then to view the list of running deployments or services, you can run the following commands `kubectl get deployments`, `kubectl get services`.

`kubectl get services` should give a list of running services, the one we particularly care about(To start the application) is the `kubernetes-practice-service` service.

Run this command to start the API service. 

`minikube service kubernetes-practice-service`. The application should start and open an IP address url on your default browser.
You will see a page that opens a blank screen and has a "Cannot GET /" text written on it as shown below. <img width="402" alt="Screenshot 2021-06-14 at 8 14 15 AM" src="https://user-images.githubusercontent.com/29985200/121853195-86254300-cce8-11eb-9dbf-b47c806bfda6.png">

## Getting started
This API exposes a single route(route). What the ro route dependson the type of request made to it (GET or POST).

#### GET /users
Add a `/users` route to the url opened in your browser and you should see a page that prints a json response with the following data. 

```javascript
{
    "success": true,
    "payload": []
}
```
The payload is an empty array because we have not added any data yet. We would add some data in the next step.

#### POST /users
Sending a POST request to `/users` expects the following optional datas in the body of the request.
- firstname
- lastname
- email
- age

Using any API development client such as Insomnia or Postman, send a POST request to the `/user` with the following request body

```javascript
{ 
    "firstname": "Alfred", 
    "lastname": "Williams", 
    "email": "alfred@gmail.com", 
    "age": 56

}
```
You should get a response that looks as shown below.
<img width="1061" alt="Screenshot 2021-06-14 at 8 37 43 AM" src="https://user-images.githubusercontent.com/29985200/121855920-cc2fd600-cceb-11eb-9098-b9c0a1e94311.png">

WooHoo!! It works! Our application is running on a Kubernetes cluster!!.

**NOTE:** The K8s mongo deployment uses a persistent volume storage, which means if you quit the whole application, delete the deployments, you would still be able to retrieve the data as it takes up a portion of your physical storage and hence does not die with the pods.
