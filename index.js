'use strict';

const os = require('os');
const spawn = require('child_process').execFile;

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
		
        res.add({
            payload: 'TaskManager',
            title: 'TaskManager'
        });		
    }
	

    function execute(id, payload) {
        if (payload == 'TaskManager') {
			var child = spawn('cmd', ['/c', 'TASKMGR'],  {
       		detached: true,
       		stdio: 'ignore',
       		cwd: os.homedir()
      		});	
		 }
	}
    return {search, execute};
};