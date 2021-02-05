import Project from '../models/Project'

export async function getProjects(req, res) {
    const projects = await Project.findAll();
    res.status(200).json({
        data: projects
    })
};

export async function createProject (req, res) {
    const {name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },{
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        if (newProject) {
            return res.status(200).json({
                message:'Project created succesfully',
                data: newProject
            })
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        })
    }
    res.send(newProject);
};
