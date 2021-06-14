# kubernetes-pracrice
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
You will see a page that opens a blank screen and has a "Cannot GET /" text written on it
