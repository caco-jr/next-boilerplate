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
        path: '../src/views/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/views/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/pages/{{dashCase name}}.tsx',
        templateFile: 'templates/PageRoute.tsx.hbs',
      },
    ],
  });
};
