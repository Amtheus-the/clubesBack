const Annotations = require ('../models/AnnotatiosData')

module.exports = {

   async read(request, response){
        const Priority = request.query;

        const PriorityNotes = await Annotations.find(Priority);

        return response.json(PriorityNotes);
    },

    async update(request, response){
        const { id } = request.params;

        const annotation = await Annotations.findOne({ _id : id });

        if (annotation.priority){
            annotation.priority = false;
        }else{
            annotation.priority = true
        }

        await annotation.save();

        return response.json(annotation)
    }
}