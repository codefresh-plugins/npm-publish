README:

The release-to-npm can be used to publish images to npm. 
The below pipeline configuration demonstrates simple usage:

EXAMPLE:

    deploy_to_npm:  
      title: Publishing To Npm 
      image: codefresh/release-to-npm
      commands:
      - NPM_TOKEN=${{NPM_TOKEN}} npm run ci-publish 
      when:   
        branch: 
          only: [ master ]


Parameter Reference:

    NPM_TOKEN : token of npm account
    
for get the token please see https://docs.npmjs.com/private-modules/ci-server-config#getting-an-authentication-token
