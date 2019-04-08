const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }, 
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a new note.',
    builder : {
        title : {
            required : 'Note title',
            demandOption : true,
            type : 'string'
        }
    }, 
    handler : function (argv) {
        notes.removeNode(argv.title)
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note from the list',
    handler : function() {
        console.log('Read a note')
    }
})

yargs.command({
    command : 'list',
    describe : 'Lists all the notes',
    handler : function() {
        console.log('Listing all notes.')
    }
})
// add, remove, read, list

//console.log(yargs.argv)

yargs.parse()