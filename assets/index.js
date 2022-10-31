const inqurier = require('inquirer')
// generator questions that wil show up and ask user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        },
    {
            type: 'input',
            name: 'description',
            message: 'Project description:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Installation instructions?',
                },  
                {
                    type: 'input',
                    name: 'usage',
                    message: 'Project usage?',
                    },
                    {
                        type: 'input',
                        name: 'contribution',
                        message: 'Contribution info',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'For questions (email)',
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'For questions(github)',
                                },
                                {
                                    type: 'list',
                                    name: 'license',
                                    message: 'License?',
                                    choices: ['MIT', 'ISC','GNUPLv3'],
                                    filter(val){
                                        return val.toLowerCase();
                                    }
                                    },
]