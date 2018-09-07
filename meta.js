module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    google_analytics_id: {
      'type': 'string',
      'message': 'Google analytics product id',
      'required': true
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
