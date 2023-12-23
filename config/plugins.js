module.exports = ({ env }) => ({
   'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms : {
          wrapBodyWithDataKey: false
        },
        /* hooks: {
          preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
          postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
        }, */
      }
    },
    'email-designer': {
      enabled: true,
  
      config: {
        editor: {  
          tools: {
            heading: {
              properties: {
                text: {
                  value: 'This is the new default text!',
                },
              },
            },
          },
          options: {
            features: {
              colorPicker: {
                presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
              },
            },
            fonts: {
              showDefaultFonts: false,
              /*
               * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
               */
              customFonts: [
                {
                  label: 'Anton',
                  value: "'Anton', sans-serif",
                  url: 'https://fonts.googleapis.com/css?family=Anton',
                },
                {
                  label: 'Lato',
                  value: "'Lato', Tahoma, Verdana, sans-serif",
                  url: 'https://fonts.googleapis.com/css?family=Lato',
                },
                // ...
              ],
            },
            mergeTags: [
              {
                name: 'Email',
                value: '{{ USER.username }}',
                sample: 'john@doe.com',
              },
              // ...
            ],
          },
          appearance: {
            theme: 'dark',
            panels: {
              tools: {
                dock: 'left',
              },
            },
          },
        },
      },
    },
  });
