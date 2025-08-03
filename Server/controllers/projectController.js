const {generateReactProject} = require('../services/generateServices.js');

const generateProject = async (req, res) =>{
    try{
        const config = req.body;
        const zipBuffer = await generateReactProject(config);

        res.set({
            'Content-Type' : 'application/zip',
            'Content-Disposition' : 'attachment; filename = "project.zip"',
        });

        res.send(zipBuffer);
    }
    catch(error) {
        console.log('Project ganeration failed:', error);
        res.status(500).json({error:'failed to generate project'});

        
    }
}

module.exports = {generateProject};