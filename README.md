# 12 Factor App Kata

## Part 1 : centralized configuration

### Introduction

Read the code, and notice how we can switch the Mailer API URL and the database URL form
the JSON config files by setting the 'APP_ENVIRONMENT' variable.

For instance:

```console
$ APP_ENVIRONMENT=production ts-node main.ts
Env:  production
Connecting to db app at database.example.org
Connecting to mailer API at:  https://mailer.example.org
```


```console
Env:  local
Connecting to db app at localhost
Connecting to mailer API at:  http://localhost:8080/mailer/api
```

## Changes we want to make

- Add a "useTls" boolean to the database configuration
- Introduce a pre-production environment in addition to the production env
- Encrypt the password databse and the secret token for the mailer

Reflect on how big this changes would be in the state of the current code.

## Part 2 : configuration as environment variables


## Instructions

Go read the 12 Factor App documentation, especially the part about configuration:

=> https://12factor.net/config


Then refactor the code, getting rid of the 'configuration.ts' module completly.

Use a tool like `direnv` to store local configuration.

Then, try and apply the changes listed in part 1.

Finally, try and run the code using the "local" database and the "pre-production" mailer API.

