# release-to-npm

## How to use

- Add as a dependency to your project `npm install --save-dev release-to-npm`

- Login into your project's NPM registry

```
npm login --registry <registry url>
npm login --registry http://registry.npmjs.org
```

- Copy the token

see how to extracting the NPM_TOKEN https://docs.npmjs.com/private-modules/ci-server-config#getting-an-authentication-token

- Set the token as environment variable

Go to your project settings and add a new variable `NPM_TOKEN` with the value you
have just copied

- Add script command (optional)

Create a script command to run the release-to-npm, in your `package.json`

```json
{
    "scripts": {
        "release-to-npm": "release-to-npm"
    }
}
```

