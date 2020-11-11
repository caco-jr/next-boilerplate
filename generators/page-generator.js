module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}.tsx',
        templateFile: 'templates/PageRoute.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/index.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
    ],
  });
};
