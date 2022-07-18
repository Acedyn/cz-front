# Cardboard Citizens frontend

Vuejs App to discover the Cardboard Citizens project and use the Cardboard
Citizens tools. The application is written in Typescript with Vuejs 3
using the composition API

## Setup

First install nodejs LTS for your system on the [official website](https://nodejs.org/en/download/)

Install the dependencies, including the the dev dependencies if needed:

```bash
npm install --also=dev
```

Run the application in dev mode. This will make the application available
on localhost:3000

```bash
npm run dev
```

## Contributing

The project follows the following workflow:

- Create a branch with the name of the feature/fix you are working on
- Create a pull request to the alpha branch even before starting to work
  on your branch. and link your pull request to the issue you are
  working on (if any)
- Once your work is done and commited, request a review from an other
  developper.
- Wait for potential retakes, otherwise it is not your responsability
  to merge the pull request, de reviewer will do it.
- The requested developper will approve the pull request and merge it.
  He will also delete to feature branch

Before pushing our changes to the alpha branch, make sure the application
builds correctly

```bash
npm run build
```

To deploy the alpha branch we use github tags. The tags must follow
the syntax v[major].[minor].[patch] where major is non backward
compatible changes, minor a backward compatible new feature, and
a patch an update that do not add any new feature (generally a fix)

```bash
git tag v1.23.12
git push origin v1.23.12
```

When the tag is pushed, it will trigger the github action that will
deploy the application on AWS EKS
